export abstract class Table {
  protected abstract _tableName: string;
  protected abstract _dbo: string;
  protected abstract _attributes : ISAttributes;
  
  static restoreFromJSON(jsonParsedObj : object): Table{
    throw new Error('resotreFromJSONメソッドは、サブクラスで実装する必要があります。');
  };
  
  get tableName(): string {
    return this._tableName;
  }

  get dbo(): string {
    return this._dbo;
  }

  get attributes(): ISAttributes {
    return this._attributes;
  }
  
  getNewRow(): ISDataRow {
    const row : ISDataRow = {};

    for(let key in this._attributes){
      const field = this._attributes[key];

      //オートナンバー型はデータ行に含めない。
      if(field.isAutoNo) continue;
      
      //既定値が設定されている場合、その値で格納する。
      if("defaultValue" in field && field.defaultValue !== null){
        row[key] = field.defaultValue;
      } else {
        //データ型に応じて、NULL_NUMBERとかセットしたほうがいいかもしれない。
        row[key] = null;
      }
    }

    //プロパティを追加できないようにする。
    Object.seal(row);

    return row;
  }
  
  private toJSON(): object {
    return { 
      className: this.constructor.name, 
      dbo: this._dbo, 
      tableName: this._tableName
    };
  }
}


//エラー
export class TableParseError extends Error {
  constructor(public message : string){
    super(message);

    this.name = "TableParseError";
  }
}

//データベースの列の型
export enum FieldDataType {
  TYPE_NUMBER, 
  TYPE_STRING, 
  TYPE_DATETIME
}

//データベースの列の属性を、列名をキーにして連想配列として保持する。
//その型定義
export interface ISAttributes {
  [key: string] : ISAttribute
}

//データベースの列の属性を格納する変数の型定義
export interface ISAttribute {
  dataType: FieldDataType;
  isPrimaryKey: boolean;
  isAutoNo: boolean;
  allowNull: boolean;
  defaultValue ?: any;
  length ?: number;
}

//データ行
//レコード１行を表す連想配列
export interface ISDataRow {
  [key: string]: any;
}
