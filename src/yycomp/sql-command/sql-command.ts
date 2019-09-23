import { Table, ISDataRow, FieldDataType } from '../base-table/base-table';

//テーブルに対するSQLCommandを保持したり、生成したりするクラスの抽象クラス。
export abstract class SQLCommand {
  protected abstract  table : Table;
  abstract getCommands(): string[];
  protected abstract toJSON(): Object;


  static restoreFromJSON(jsonParsedObj: object): SQLCommand {
    throw new Error('restoreFromJsonメソッドは、継承クラスで実装してください');
  }

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

  protected toJSON(): object {
    return {
      className: this.constructor.name,
      table: this.table,
      additionalRows: this._additionalRows
    };
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
  private _condition?: SQLExtractCondition;

  constructor(table: Table){
    super();
    this.table = table;
    //this._condition = new SQLExtractCondition();
  }

  get condition(): SQLExtractCondition{
    if(!this._condition){
      this._condition = new SQLExtractCondition();
    }
    return this._condition;
  }

  clearCondition(): void {
    delete this._condition;
  }
  /*
  set condition(condition: SQLExtractCondition){
    this._condition = condition;
  }
  */

  protected toJSON(): object {
    return {
      className: this.constructor.name, 
      table: this.table, 
      condition: this.condition
    };
  }

  getCommands(): string[]{
    let command: string = `DELETE FROM ${this.table.dbo}.dbo.[${this.table.tableName}]`
    console.log(`${this._condition}`);
    if(this._condition){
      command += ` WHERE ${this._condition.condition}`;
    } else {
      console.log(`condition取得できず`);
    }
    console.log(command);
    return [command];
  }
}

export class UpdateSQLCommand extends SQLCommand {
  protected table: Table;
  
  constructor(table: Table){
    super();
    this.table = table;
  }

  protected toJSON(): object {
    return {
      className: this.constructor.name
    };
  }
  getCommands(): string[]{
    return [''];
  }
}


//SQL抽出条件クラス
export class SQLExtractCondition {
  private _conditions: string[][];

  constructor(){
    this._conditions = [];
  }

  //条件群設定処理
  addConditions(conditions: string[]){
    this._conditions.push(conditions);
  }

  //条件取得処理
  get condition(): string {
    let conditionStr : string = ``;
    //AND条件を連結した回数をカウントする。
    let andJoinedCount = 0;
    this._conditions.forEach((conditions) => {
        if(andJoinedCount > 0) {
            conditionStr += ` AND `;
        }
        //OR条件を連結した回数をカウントする。
        let orJoinedCount = 0;
        conditionStr += `(`;
        conditions.forEach((condition) => {
            
            if(orJoinedCount > 0) {
                conditionStr += ` OR `;
            }

            conditionStr += condition;
            orJoinedCount++;
        });
        conditionStr += `)`;
        andJoinedCount++;
    });
    
    return conditionStr;
  }

  protected toJSON(): Object {
    return this._conditions;
  }
}

//トランザクションSQLコマンドセット
export interface ISTransactionSQLCommandSet {
  preSQLCommands: SQLCommand[], 
  mainSQLCommands: SQLCommand[], 
  postSQLCommands: SQLCommand[]
}

export class TransactionSQLCommandSetRestorer {
  public static restore(jsonParsedObj: Object): ISTransactionSQLCommandSet{
    throw new Error('restoreメソッドは継承クラスで実装してください。');
  }
}