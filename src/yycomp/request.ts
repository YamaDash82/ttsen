import { Request, RequestError, ColumnValue, TediousType } from 'tedious';
import { Connection } from 'tedious';
import { ResultData } from './declarations';

//リクエストの状態を示す列挙体
export enum RequestState {
  BEFORE_EXECUTE, 
  COMPLETED, 
  ERROR
}

/*
export class RequestManager {
  private records: any[];
  private state: RequestState;
  private _request: Request;
  
  constructor(private _queryName: string, private source: string){
    //Requestオブジェクトを生成する。
    this._request = new Request(this.source, (error: RequestError, rowCount: number) => {
      if(error){
        console.log(`RequestError:${error}`);
        //状態を設定する。
        this.state = RequestState.ERROR;
        //例外を発生させる予定。
      }
    });
    
    //各々のフィールドを初期化する。
    this.state = RequestState.BEFORE_EXECUTE;
    this.records = [];
  }

  public prepare(callback: (resultData: ResultData) => void): void {
    //イベントを設定。
    this._request.on('row', (columns: ColumnValue[]) => {
      let row: any = {};
      console.log('rowイベントにはいった。');
      columns.forEach((column) => {
        row[column.metadata.colName] = column.value;
      });
      this.records.push(row);
    });

    this._request.on('requestCompleted', () => {
      this.state = RequestState.COMPLETED;
      //コールバックを実行する。(取得したレコードを渡す。)
      const resultData = new ResultData();
      resultData.queryName = this.queryName;
      resultData.records = this.records;

      console.log(`oncompleted:${JSON.stringify(resultData)}`);
      callback(resultData);
    });
  }

  //リクエストオブジェクトを返す。
  get request(): Request {
    return this._request;
  }

  //クエリ名ゲッター
  get queryName():string {
    return this._queryName;
  }
}
*/

export class RequestManager {
  private records: any[];
  private state: RequestState;
  private _request: Request;
  
  constructor(private _queryName: string, private source: string, private conn: Connection){
    //Requestオブジェクトを生成する。
    this._request = new Request(this.source, (error: RequestError, rowCount: number) => {
      if(error){
        console.log(`RequestError:${error}`);
        //状態を設定する。
        this.state = RequestState.ERROR;
        //例外を発生させる予定。
      }
    });
    
    //各々のフィールドを初期化する。
    this.state = RequestState.BEFORE_EXECUTE;
    this.records = [];

    //イベントを設定。
    this._request.on('row', (columns: ColumnValue[]) => {
      let row: any = {};
      console.log('rowイベントにはいった。');
      columns.forEach((column) => {
        row[column.metadata.colName] = column.value;
      });
      this.records.push(row);
    });


  }

  public prepare(callback: (resultData: ResultData) => void): void {
    //後でコメントアウト
  }

  public execute():Promise<ResultData>{
    let connectProcess = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        this.conn.on('connect', (error) => {
          if(error){
            return reject(error);
          }
          return resolve();
        });
      });
    };

    let mainProcess = (): Promise<ResultData> => {
      return new Promise((resolve, reject) => {
        try {
          this._request.on('requestCompleted', () => {
            this.state = RequestState.COMPLETED;
            const resultData = new ResultData();
            
            resultData.queryName = this.queryName;
            resultData.records = this.records;
            
            console.log(`oncompleted:${JSON.stringify(resultData)}`);
  
            return resolve(resultData);
          });
          console.log('実行');
          this.conn.execSql(this._request);
  
        } catch(error) {
          reject(error);
        }
      });
    };

    
    return connectProcess().then(
      () => {
        return mainProcess();
      }
    );
    
   /*
   return Promise.resolve().then(
     () => {
       return connectProcess();
     }
   ).then(
     () => {
       return mainProcess();
     }
   ).catch(
    (error) => {
      return error;
    }
   );
   */
   
  }
  //リクエストオブジェクトを返す。
  get request(): Request {
    return this._request;
  }

  //クエリ名ゲッター
  get queryName():string {
    return this._queryName;
  }
}