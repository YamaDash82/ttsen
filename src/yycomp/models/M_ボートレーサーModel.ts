import { BaseModel } from './base-model';
import { DataRow, Attribute, TSDataType as dType } from '../declarations';

//import { TYPES } from 'tedious';

export class M_ボートレーサーModel extends BaseModel {
  protected tableName : string = 'M_ボートレーサー';
  protected dbo: string = 'BoatRace';

  protected _attributes : Attribute ={    
      "登録番号": {
        //sqlDataType: TYPES.Int, 
        dataType: dType.TYPE_NUMBER, 
        primaryKye: true, 
        allowNull: false
    }, 
      "名前": {
        //sqlDataType: TYPES.VarChar, 
        dataType: dType.TYPE_STRING, 
        primaryKye: false, 
        allowNull: true, 
        length: 20, 
    }, 
      "フリガナ": {
        //sqlDataType: TYPES.VarChar,
        dataType: dType.TYPE_STRING, 
        primaryKye: false, 
        allowNull: true, 
        length: 20, 
      }
    };
  
  public getNewRow():DataRow {
    let row : DataRow = {};

    for(let key in this._attributes) {
      let attr = this._attributes[key];

      let value : any = attr.defaultValue || null;

      row[key] = value;
    }
    return row;
  }
}