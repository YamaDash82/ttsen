import { TediousType } from 'tedious';
import { BaseModel } from './models/base-model';

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

export enum TSDataType {
  TYPE_NUMBER, 
  TYPE_STRING
}
export interface Attribute {
  [index: string] : {
    sqlDataType: TediousType;
    dataType: TSDataType;
    primaryKye: boolean;
    allowNull: boolean;
    defaultValue ?: any;
    length ?: number;
  }
}

export interface DataRow {
  [key: string]: any;
}