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