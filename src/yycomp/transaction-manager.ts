import { SQLProcess } from './declarations';
import * as Tedious from 'tedious';
import { ConnectionFactory } from '../yycomp/connection-factory';

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

  //コンストラクタ
  constructor(){
    this.preprocesses = [];
    this.mainProcesses = [];
    this.postProcesses = [];
    this.sequentialPromises = [];
    this.conn = ConnectionFactory.getConnection();
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
    this.sequentialPromises.push(():Promise<any> => {
      return new Promise((resolve, reject) => {
        const request = new Tedious.Request(process.source, (error, rowCount) => {
          if (error) {
            return reject(error);
          }

          return resolve(rowCount);
        });

        this.conn.execSql(request);
      });
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
        })
      })
    });
    //前処理群の各処理をProimseに変換し、処理郡に追加する。
    this.preprocesses.forEach((process: SQLProcess) => {
      this.addSequentialPromise(process);
    });

    //シーケンスにトランザクション開始処理を追加する。
    this.sequentialPromises.push(():Promise<any> => {
      return new Promise((resolve, reject) => {
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
      });
    }, Promise.resolve());
  }
}