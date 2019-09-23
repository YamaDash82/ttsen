import { Table, ISAttributes, FieldDataType as FldDtType } from '../../../yycomp/base-table/base-table';

export class M_ボートレーサーTable extends Table {
  protected _tableName: string = "M_ボートレーサー";
  protected _dbo: string = "BoatRace";
  protected _attributes: ISAttributes = {
    "登録番号": {
      dataType: FldDtType.TYPE_NUMBER, 
      isPrimaryKey: true, 
      isAutoNo: false,
      allowNull: false, 
    }, 
    "名前": {
      dataType: FldDtType.TYPE_STRING, 
      isPrimaryKey: false, 
      isAutoNo: false, 
      allowNull: true, 
      defaultValue: '', 
      length: 20
    }, 
    "フリガナ": {
      dataType: FldDtType.TYPE_STRING, 
      isPrimaryKey: false, 
      isAutoNo: false, 
      allowNull: true, 
      defaultValue: '', 
      length: 20
    }
  };
}