import { TediousType } from 'tedious';

export interface FieldInformation {
  name: string;
  dataType: TediousType;
  primaryKye: boolean;
  allowNull: boolean;
  defaultValue: any;
  length: number;
}

export class FieldInformation2 {
  [fieldName: string] : {
    dataType: TediousType;
    primaryKye: boolean;
    allowNull: boolean;
    defaultValue: any;
    length: number;
    value: any;
  }
}



export interface ColumnValue {
  [index: string] : any;
}