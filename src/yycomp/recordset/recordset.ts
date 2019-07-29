import { ExConnection, ConnectionCreator } from '../connection-factory';
import * as Tedious from 'tedious';

//レコードセット
//レコードセット名と、ソース（SQLのSELECT文）、その結果のレコードを保持する。
export class Recordset {
  private _records : any[];

  constructor(private _name: string, private _source: string){
    this._records = [];
  }

  get records() : any[] {
    return this._records;
  }

  get name(): string{
    return this._name;
  }

  get source(): string{
    return this._source;
  }
}

//レコードセット群の連想配列のインデックスシグニチャ
export interface ISRecordsets {
  [index: string] : Recordset;
}

//レコードセットオープナー
//各レコードセットオブジェクトをもとに、Tedious.Requestオブジェクトを生成し、
//元の各レコードセットオブジェクトの_recordsに値をセットする
export class RecordsetsOpener {
  constructor(private _recordsets: ISRecordsets, private conn: ExConnection) {
    
  }
  execute () : Promise<any> {
    const sequentialPromises: Array<() => Promise<any>> = [];

    //接続処理を処理群に追加。
    console.log('Connをシーケンシャルプロミスに追加');
    sequentialPromises.push((): Promise<any> => this.conn.connectEventPromise());
    
/*
    for(let rstName in this._recordsets.recordsets) {
      const currentRst = this._recordsets.recordsets[rstName];
      */  
     for(const rstName in this._recordsets) {
      const currentRst = this._recordsets[rstName];
      console.log(`recordsesの巡回:${JSON.stringify(currentRst)}`);

      const task = (): Promise<any> => { 
        return new Promise((resolve, reject) => {
          const request = new Tedious.Request(currentRst.source, (error: Error, rowCount: number, rows: any[]) => {
            console.log('Request生成時のコールバック');
            if(error) {
              return reject(error);
            }
            return resolve();
          });

          request.on('row', (columns: Tedious.ColumnValue[]) => {
            let row: any = {};
            console.log(`${currentRst.name}のRowイベント`);
            columns.forEach((column: Tedious.ColumnValue) => {
              row[column.metadata.colName] = column.value;
            });
            currentRst.records.push(row);
          });

          console.log(`${currentRst.name}のexecute前`);
          this.conn.execSql(request);
        });
      }
      sequentialPromises.push(task);
    }

    console.log('Before Reduce');
    return sequentialPromises.reduce((promise, task) => {
      return promise.then(() => {
        return task();
      }).catch((error) => {
        return Promise.reject(error);
      });
    }, Promise.resolve());    
  }
}