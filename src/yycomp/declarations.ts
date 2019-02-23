//要求クエリ
export interface RequestedQuery {
  queryName: string;
  source: string;
}

//要求データ
export interface RequestedData {
  requests: RequestedQuery[];
}

//結果データ
export class ResultData {
  queryName: string;
  records: any[];

  constructor(){
    this.queryName = "";
    this.records = [];
  }
}

//SQL処理タイプ 
export enum SQLProcessType {
  None,
  InsertWithRecords, 
  Insert, 
  Update, 
  Delete
}

//SQL処理
export class SQLProcess {
  source: string; 
  records: any[];
  type: SQLProcessType

  constructor(){
    this.source = "";
    this.records = [];
    this.type = SQLProcessType.None; 
  }
}