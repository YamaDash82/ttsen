import { SQLCommandRestorer } from '../../yycomp/sql-command/sql-command-restorer';
import { SQLCommand, InsertSQLCommand, DeleteSQLCommand, UpdateSQLCommand, SQLExtractCondition } from '../../yycomp/sql-command/sql-command';
import { ExTableRestorer, NoExistanceTableError } from '../tables/ex-table-restorer';
import { Table, ISDataRow } from '../../yycomp/base-table/base-table';
import { json } from 'body-parser';

export class ExSQLCommandRestorer extends SQLCommandRestorer {
  public static createSQLCommandInstance(jsonParsedObj: any): SQLCommand {
    //ゆくゆくはjsonParsedObjに必要なプロパティがあるかテストする。
    //テーブルクラスのインスタンスを復元する。
    let table : Table;
    
    try {
      let tableObj = jsonParsedObj['table'];
      table = ExTableRestorer.createTableInstance(tableObj);
    } catch(err) {
      if(err instanceof NoExistanceTableError) {
        //NoExistanceTableErrorの場合、そのまま呼び出し元に元のエラーをthrowする。
        throw err;
      } else {
        throw new Error('テーブルクラスのインスタンスの復元に失敗しました。');
      }
    }
    
    let sqlCommand: SQLCommand;

    try {
      switch(jsonParsedObj['className']){
        case 'InsertSQLCommand':
          sqlCommand = this.InsertSQLCommandRestorer(table, <ISDataRow[]>jsonParsedObj['additionalRows']);
          break;
        case 'DeleteSQLCommand':
          sqlCommand = this.DeleteSQLCommandRestorer(table, <string[][]>jsonParsedObj['condition']);
          break;
        case 'UpdateSQLCommand':
          throw new Error('まだ未定義');
          break;
        default:
          throw new Error('まだ未定義');
          break;
      }
    } catch(err) {
      throw err;
    }

    return sqlCommand;
    //throw new Error('テスト完了'); 
  }

  private static InsertSQLCommandRestorer(table: Table, additionalRows: any[]): InsertSQLCommand{
    const command = new InsertSQLCommand(table);

    for(let row of additionalRows){
      command.addRow(<ISDataRow>row);
    }

    return command;
  }

  private static DeleteSQLCommandRestorer(table: Table, parsedCondition: string[][]): DeleteSQLCommand {
    const command = new DeleteSQLCommand(table);

    //conditionの復元
    if(parsedCondition.length > 0){
      for(let param of parsedCondition){
        command.condition.addConditions(param);
      }
    }
    
    return command;
  }
}