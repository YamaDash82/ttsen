import { Request, RequestError, ColumnValue } from 'tedious';
import { ResultData } from './declarations';
//リクエストの状態を示す列挙体
export enum RequestState {
  BEFORE_EXECUTE, 
  COMPLETED, 
  ERROR
}
export class YYRequest extends Request {
  private records: any[];
  private state: RequestState;
  
  constructor(private _queryName: string, private source: string, callback: (resultData: ResultData) => void){
    //スーパークラスのコンストラクタ
    super(source, (error: RequestError, rowCount: number) => {
      if(error) {
        //状態を設定する。
        this.state = RequestState.ERROR;
        //例外を発生させる。
        //…未実装
      }
    });
    //各々のフィールドを初期化する。
    this.state = RequestState.BEFORE_EXECUTE;
    this.records = [];
    
    //イベントを設定。
    this.on('row', (columns: ColumnValue[]) => {
      let row = {};
      columns.forEach((column) => {
        row[column.metadata.colName] = column.value;
        this.records.push(row);
      });
    });
    this.on('requestCompleted', () => {
      this.state = RequestState.COMPLETED;
      //コールバックを実行する。(取得したレコードを渡す。)
      const resultData = new ResultData();
      resultData.queryName = this.queryName;
      resultData.records = this.records;

      callback(resultData);
    });
  }

  get queryName():string {
    return this._queryName;
  }

  //レコード群取得処理
  public getRecords(){
    return this.records;
  }
}