import { DataRow, TSDataType } from '../declarations';
//import { SQLProcess, SQLProcessType } from './sql-process';
import { SQLCommand, InsertSQLCommand, DeleteSQLCommand, UpdateSQLCommand, ISTransactionSQLCommandSet } from '../sql-command/sql-command';

import * as Tedious from 'tedious';
import { ConnectionFactory } from '../connection-factory';

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
  private preSQLCommands: SQLCommand[];
  //処理群
  private mainSQLCommands: SQLCommand[];
  //後処理群
  private postSQLCommands: SQLCommand[];
  //逐次処理群
  private sequentialPromises : Array<() => Promise<any>>;
  //接続オブジェクト
  private conn: Tedious.Connection;

  //トランザクション中フラグ
  private isDuringTransaction: boolean;

  //コンストラクタ
  constructor(){
    this.preSQLCommands = [];
    this.mainSQLCommands = [];
    this.postSQLCommands = [];
    this.sequentialPromises = [];
    this.conn = ConnectionFactory.getConnection();
    this.isDuringTransaction = false;
  }

  //前処理追加
  public addPreSQLCommand(command: SQLCommand) : void {
    this.preSQLCommands.push(command);
  }

  //メイン処理追加
  public addMainSQLCommands(command: SQLCommand) : void {
    this.mainSQLCommands.push(command);
  }

  //後処理追加
  public addPostSQLCommand (command: SQLCommand): void {
    this.postSQLCommands.push(command);
  }

  //SQLCommandSet設定処理
  public setSQLCommandSet(commandSet: ISTransactionSQLCommandSet){
    //SQLCommand群の参照を渡す。
    this.preSQLCommands = commandSet.preSQLCommands;
    this.mainSQLCommands = commandSet.mainSQLCommands;
    this.postSQLCommands = commandSet.postSQLCommands;
  }

  //順次処理追加処理
  //SQL文をPromiseに変換しながらsequentialPromisesに追加していく。
  private addSequentialPromise(strSQL : string) : void {
    this.sequentialPromises.push(():Promise<any>=>{
      return new Promise((resolve, reject) => {
        const request = new Tedious.Request(strSQL, (error, rowCount) => {
          if(error){
            return reject(error);
          }

          return resolve(rowCount);
        });

        this.conn.execSql(request);
      });
    });
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
    this.preSQLCommands.forEach((sqlCommand: SQLCommand) => {
      sqlCommand.getCommands().forEach((command) => {
        this.addSequentialPromise(command);
      });
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
    this.mainSQLCommands.forEach((sqlCommand: SQLCommand) => {
      sqlCommand.getCommands().forEach((command) => {
        this.addSequentialPromise(command);
      });
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
    this.postSQLCommands.forEach((sqlCommand: SQLCommand) => {
      sqlCommand.getCommands().forEach((command) => {
        this.addSequentialPromise(command);
      });
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