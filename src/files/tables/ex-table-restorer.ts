import { BaseTableRestorer } from '../../yycomp/base-table/base-table-resorer';
import { Table } from '../../yycomp/base-table/base-table';
import { M_ボートレーサーTable } from './boatrace/M_ボートレーサーTable';
import { json } from 'body-parser';

export class NoExistanceTableError extends Error {
  constructor(){
    super('存在しないテーブルクラスの復元が試みられました。');
  }
}
export class ExTableRestorer extends BaseTableRestorer {
  public static createTableInstance (jsonParsedObj: any ): Table {
    //jsonParsedObjに必要なプロパティが含まれているかチェックする。※今は実装しない。
    
    switch(jsonParsedObj['dbo']){
      case 'BoatRace':
          switch(jsonParsedObj['tableName']){
            case 'M_ボートレーサー':
                return new M_ボートレーサーTable();
              break;
            default:
              throw new NoExistanceTableError();
              break;
          }
        break;
      default: 
        throw new NoExistanceTableError();
        break;
    }
  }
}