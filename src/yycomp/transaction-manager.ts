import { DataRow, TSDataType } from './declarations';
import { SQLProcess, SQLProcessType } from './sql-process';

import * as Tedious from 'tedious';
import { ConnectionFactory } from '../yycomp/connection-factory';

//エラーの定義
export class TransactionError extends Error {
  constructor(public message : string){
    super(message);

    this.name = "TransactionError";
  }
}

export class TransactionManager {
  //メンバ
  //前処理群
  private preprocesses: SQLProcess[];
  //処理群
  private mainProcesses: SQLProcess[];
  //後処理群
  private postProcesses: SQLProcess[];
  //逐次処理群
  private sequentialPromises : Array<() => Promise<any>>;
  //接続オブジェクト
  private conn: Tedious.Connection;

  //トランザクション中フラグ
  private isDuringTransaction: boolean;

  //コンストラクタ
  constructor(){
    this.preprocesses = [];
    this.mainProcesses = [];
    this.postProcesses = [];
    this.sequentialPromises = [];
    this.conn = ConnectionFactory.getConnection();
    this.isDuringTransaction = false;
  }

  //前処理追加
  public addPreprocesses(process: SQLProcess) : void {
    this.preprocesses.push(process);
  }

  //メイン処理追加
  public addMainProcesses(process: SQLProcess) : void {
    this.mainProcesses.push(process);
  }

  //後処理追加
  public addPostProcesses (process: SQLProcess): void {
    this.postProcesses.push(process);
  }

  //順次処理追加処理
  //Insert、Update、Deleteを行うSQLProcessをPromiseに変換しつつ、配列に追加する。
  private addSequentialPromise(process: SQLProcess) : void {
    switch(process.type) {
      case SQLProcessType.InsertWithRecords:
        //ソースを生成する。
        let source: string = process.source + ' VALUES ';
        let rowsCount = 0, fieldsCount = 0;

        for(let row of process.rows){
          if(rowsCount++>0) source += ',';

          source += "(";
          for(let key in process.model.attributes){
            let attr = process.model.attributes[key];
            
            if (fieldsCount++ > 0) source += ',';
            
            switch(attr.dataType){
              case TSDataType.TYPE_STRING:
                source += `'${row[key]}'`;
                break;
              default:
                source += `${row[key]}`;
                break;
            }
          }
          source += ')';
          fieldsCount = 0;
        }
        
        console.log(source);

        this.sequentialPromises.push(():Promise<any> => {
          return new Promise((resolve, reject) => {
            const request = new Tedious.Request(source, (error, rowCount) => {
              if (error) {
                return reject(error);
              }
      
                return resolve(rowCount);
              });
      
              this.conn.execSql(request);
            });
          });
        break;
      default: 
        this.sequentialPromises.push(():Promise<any> => {
          return new Promise((resolve, reject) => {
            console.log('source:' + process.source);
            const request = new Tedious.Request(process.source, (error, rowCount) => {
              if (error) {
                return reject(error);
              }
    
              return resolve(rowCount);
            });
    
            this.conn.execSql(request);
          });
        });
        break;
    }
  }


  //ロールバック処理
  private rollback():Promise<any> {
    return new Promise((resolve, reject) => {
      this.conn.rollbackTransaction((error) => {
        if(error){
          return reject(error);
        }
        //トランザクション中フラグを戻す。
        this.isDuringTransaction = false;

        //return resolve();
        return reject(new TransactionError('トランザクション中にエラーが発生'));
      })
    });
  }
  //実行
  public execute(): Promise<any> {
    //処理群に接続処理を追加する。
    this.sequentialPromises.push(():Promise<any> => {
      return new Promise((resolve, reject) => {
        this.conn.on('connect', (error) => {
          if(error){
            return reject(error);
          }

          return resolve();
        });
      });
    });
    //前処理群の各処理をProimseに変換し、処理郡に追加する。
    this.preprocesses.forEach((process: SQLProcess) => {
      this.addSequentialPromise(process);
    });

    //シーケンスにトランザクション開始処理を追加する。
    this.sequentialPromises.push(():Promise<any> => {
      return new Promise((resolve, reject) => {
        //トランザクション中フラグを立てる。
        this.isDuringTransaction = true;
        this.conn.beginTransaction((error) => {
          if (error) {
            return reject(error);  
          }
          return resolve();
        })
      });
    });

    //メイン処理群の各処理をPromiseに変換し、処理群に追加する。
    this.mainProcesses.forEach((process: SQLProcess) => {
      this.addSequentialPromise(process);
    });

    //コミット処理を処理郡に追加する。
    this.sequentialPromises.push(() => {
      return new Promise((resolve, reject) => {
        this.conn.commitTransaction((error) => {
          if(error){
            return reject();
          }
          //トランザクション中処理を戻す。
          this.isDuringTransaction = false;

          return resolve();
        });
      });
    });

    //後処理群の各処理をPromiseに変換し、処理郡に追加する。
    this.postProcesses.forEach((process) => {
      this.addSequentialPromise(process);
    }); 

    //処理郡を逐次実行する。
    return this.sequentialPromises.reduce((promise, task) => {
      return promise.then(() => {
        return task();
      })
      .catch((error) => {
        if(this.isDuringTransaction) {
          //トランザクションをロールバックする。
          return this.rollback();
          //return Promise.reject(new Error('トランザクション中にエラーが発生。ロールバックしました。'));
        } else {
          //エラーが発生したとき、次のタスクを実行すべきか要調査。
          return Promise.reject(error);
        }
      });
    }, Promise.resolve());
  }
}