import * as Tedious from 'tedious';


export class BoatRacerMasterModel {
  private fields: {fieldName: string, type: any}[] = [
    { fieldName: "登録番号", type: Tedious.TYPES.SmallInt }, 
    { fieldName: "名前", type: Tedious.TYPES.VarChar }, 
    { fieldName: "フリガナ", type: Tedious.TYPES.VarChar }
  ];
  
  
}