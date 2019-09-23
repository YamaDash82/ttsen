import { SQLCommand } from './sql-command';

export class SQLCommandRestorer {
  public static createSQLCommandInstance(jsonParsedObj: any): SQLCommand {
    throw new Error('createSQLCommandInstanceは継承クラスで実装してください。');
  }
}