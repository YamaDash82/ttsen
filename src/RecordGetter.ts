import * as Tedious from 'tedious';
import { Constant } from './constant';

export class RecordGetter {
  private _sourceSql: string;
  protected executed: boolean = false;

  private rows : any[];

  constructor(sourceSql:string){
    this._sourceSql = sourceSql;
    this.rows = [];
  }

  //サーバと接続し、レコードを取得する。
  execute(callBack: (completed: boolean, rowCount: number, rows: any[]) => void){
    const connection = new Tedious.Connection(Constant.connConfig);

    connection.on('connect', ()=> {
      //指定されたSQLを実行し、レコードを取得する無名関数。
      (()=>{
        const request = new Tedious.Request(this._sourceSql, (error: Tedious.RequestError, rowCount: number, rows: any[])=>{
          if(error){
            throw error;
          }
  /*
          this.rows = rows;

          callBack(true, rowCount, rows);

          this.executed = true;
  */
        });
  
        let cacheRow: any = {};
        let counter : number = 0;

        request.on('row', (columns: Tedious.ColumnValue[]) => {
          columns.forEach((column: Tedious.ColumnValue) => {
            cacheRow[column.metadata.colName] = column.value;
          });

          this.rows.push(cacheRow);

          cacheRow = {};
        });

        request.on('requestCompleted', () => {
          connection.close();
          callBack(true, this.rows.length, this.rows);
        });

        connection.execSql(request);
      })();
    });
  }

  //レコードを返す。
  getRecords(){
    if(!this.executed){ throw new Error('レコードがまだ取得されていません。'); }

    return this.rows;
  }

  get souceSql(){
    return this._sourceSql;
  }
}