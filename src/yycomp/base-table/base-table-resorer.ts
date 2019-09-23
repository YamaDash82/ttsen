import { Table } from './base-table';

export class BaseTableRestorer {
  createTableInstance(jsonParsedObj: Object): Table {
    throw new Error('restoreFromJsonメソッドは、継承クラスで実装してください');
  } 
}