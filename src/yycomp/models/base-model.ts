import { Attribute, DataRow } from '../declarations';
import { SQLProcess, SQLProcessType } from '../sql-process';

export abstract class BaseModel {
  protected abstract tableName: string;
  protected abstract dbo: string;
  protected abstract _attributes: Attribute;
  public abstract getNewRow():DataRow;
  
  protected insertRows: DataRow[] = [];

  public addInsertRow(row: DataRow): void {
    //追加前にチェックする。
    //後で実装

    this.insertRows.push(row);
  }

  public clearInsertRow(): void {
    this.insertRows = [];
  }
  
  getInsertSQL():string{
    return '';
  }

  getDeleteSQL():string{
    return '';
  }

  getUpdateSQL():string{
    return '';
  }

  insertSQLFactory(): SQLProcess {
    let process = new SQLProcess(this);
    let source: string = '';
    let cnt: number = 0;

    source = `INSERT INTO [${this.dbo}].dbo.[${this.tableName}] (`;
    //フィールド名を列挙する。
    for(let key in this._attributes){
      if(cnt++ > 0) { source += ','; }
      source += `[${key}]`;
    }
    source += ')';

    process.source = source;
    process.rows = this.insertRows;
    process.type = SQLProcessType.InsertWithRecords;
    
    return process;
  }

  deleteSQLFactory(filter: string):SQLProcess{
    let process = new SQLProcess(this);
    process.type = SQLProcessType.Delete;

    let source = `DELETE R FROM [${this.dbo}].dbo.[${this.tableName}] AS R`;
    if(filter){
      source += ` WHERE ${filter}`;
    }
    process.source = source;

    return process;
  }
  get attributes(): Attribute{
    return this._attributes;
  }
}