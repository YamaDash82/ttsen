import { Table, ISDataRow, FieldDataType } from '../base-table/base-table';


//テーブルに対するSQLCommandを保持したり、生成したりするクラスの抽象クラス。
export abstract class SQLCommand {
  protected abstract  table : Table;
  abstract getCommands(): string[];
}


//挿入SQLを生成するクラス
export class InsertSQLCommand extends SQLCommand {
  protected table: Table;
  private _additionalRows: ISDataRow[];

  constructor(table: Table) {
    super();
    this.table = table;
    this._additionalRows = [];
  }
  
  //行追加処理
  addRow(row: ISDataRow): void{
    this._additionalRows.push(row);
  }

  get additionalRows(): ISDataRow[] {
    return this._additionalRows;
  }

  //挿入SQL文を生成し、返す。
  //INSERT TABLE (FLD1, FLD2...) VALUES (VAL11, VAL12...), (VAL21, VAL22...)の形式で生成する。
  //上記の形式は、１０００行までなので、１０００行を超える場合は、挿入SQLを分ける。
  getCommands(): string[]{
    let commands: string[] = [];
    
    let enumeratedFields: string = '';
    for(let fld in this.table.attributes){
      //オートナンバー型の列はスキップする。
      if(this.table.attributes[fld].isAutoNo) continue;

      if(enumeratedFields) enumeratedFields+=', ';

      enumeratedFields += `[${fld}]`;
    }
    //'INSERT INTO [データベース名].dbo.[テーブル名] ([列1], [列2]....) VALUES'までを生成する。
    let insertSql1: string = `INSERT INTO [${this.table.dbo}].dbo.[${this.table.tableName}] (${enumeratedFields}) VALUES `
    
    let valuesSet: string[] = [];
    
    //1行当たりのデータを巡回するし、valuesSet配列に追加していく。
    for(let row of this._additionalRows) {
      let values: string = '';

      for(let fld in this.table.attributes){
        let attr = this.table.attributes[fld];

        //オートナンバー型の列の場合、スキップする。
        if(attr.isAutoNo) continue;

        if(values) values += ', ';

        if(row[fld] === null){
          values += `NULL`
          continue;
        }

        //データ型で分岐する。文字列または、日付型の時、シングルコーテーションでくくる。
        if(attr.dataType === FieldDataType.TYPE_NUMBER) {
          values += row[fld].toString();
        } else {
          values += `'${row[fld].toString()}'`;
        }
      }

      //括弧でくくる。
      values = `(${values})`;

      //配列に追加する。
      valuesSet.push(values);
    }

    console.log(`値セット確認:${valuesSet.join(',')}`);

    let values: string = '';
    //INSERT TABLE (FLD1, FLD2...) VALUES (VAL11, VAL12...), (VAL21, VAL22...)を生成し、1000行当たりで、1挿入sqlとし、commands配列に追加する。
    for(let i = 0; i <= valuesSet.length - 1 ; i++){
      console.log('配列の幅' + valuesSet.length);
      if(values) values += ',';
      
      //行データを追加する。
      values += valuesSet[i];

      //配列の終端に達したか、1000行になったとき、commands配列に追加する。
      if(i === (valuesSet.length - 1) || !((i+1) % 1000)){
        commands.push(insertSql1 += values);
        values = '';
      }
    }

    return commands;
  }
}

export class DeleteSQLCommand extends SQLCommand {
  protected table: Table;
  
  constructor(table: Table){
    super();
    this.table = table;
  }
  getCommands(): string[]{
    return [''];
  }
}

export class UpdateSQLCommand extends SQLCommand {
  protected table: Table;
  
  constructor(table: Table){
    super();
    this.table = table;
  }

  getCommands(): string[]{
    return [''];
  }
}