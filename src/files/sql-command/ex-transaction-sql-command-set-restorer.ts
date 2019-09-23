import { ISTransactionSQLCommandSet, TransactionSQLCommandSetRestorer } from '../../yycomp/sql-command/sql-command';
import { ExSQLCommandRestorer } from './ex-sql-command-restorer';

//拡張SQLCommandSet復元機
export class ExTransactionSQLCommandSetRestorer extends TransactionSQLCommandSetRestorer {
  
  //復元処理
  public static restore(jsonParsedObj: any): ISTransactionSQLCommandSet{
    //復元したコマンドセットを格納するインスタンス。初期化する。
    const commandSet : ISTransactionSQLCommandSet = {
      preSQLCommands: [], 
      mainSQLCommands: [], 
      postSQLCommands: []
    };
    
    try {
      //オブジェクト中に含まれていると想定しているプロパティ群。
      const props = ['preSQLCommands, mainSQLCommands, postSQLCommands'];

      //プロパティを巡回する。
      for(let key in commandSet) {
        //プロパティ中にはSQLCommand群が格納されている想定なので、巡回する。
        for(let parsedCommand of jsonParsedObj[key]){
          //SQLCommandを復元する。
          const command = ExSQLCommandRestorer.createSQLCommandInstance(parsedCommand);
          
          commandSet[key as keyof ISTransactionSQLCommandSet].push(command);
        }
      }
    } catch(err) {
      throw err;
    }
    
    //復元したSQLCommandSetを返す。
    return commandSet;
  }
}