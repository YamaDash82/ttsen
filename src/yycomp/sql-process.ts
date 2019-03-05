import { BaseModel } from './models/base-model';
import { DataRow } from './declarations';

//SQL処理
export class SQLProcess {
  source: string; 
  rows: DataRow[];
  type: SQLProcessType;
  private _model : BaseModel;

  constructor(model: BaseModel){
    this.source = "";
    this.rows = [];
    this.type = SQLProcessType.None; 
    this._model = model;
  }

  set model(model: BaseModel){
    this._model = model;
  }
  get model() : BaseModel {
    return this._model;
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