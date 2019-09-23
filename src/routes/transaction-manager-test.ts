import * as Express from 'express';
import { TransactionManager } from '../yycomp/transaction-manager/transaction-manager';
import { ISDataRow, Table } from '../yycomp/base-table/base-table';
import { SQLCommand, InsertSQLCommand, DeleteSQLCommand, UpdateSQLCommand, SQLExtractCondition } from '../yycomp/sql-command/sql-command';
import { M_ボートレーサーTable } from '../files/tables/boatrace/M_ボートレーサーTable';
import { ExSQLCommandRestorer } from '../files/sql-command/ex-sql-command-restorer';
import { ExTransactionSQLCommandSetRestorer } from '../files/sql-command/ex-transaction-sql-command-set-restorer';
import { ISTransactionSQLCommandSet } from '../yycomp/sql-command/sql-command';

const router = Express.Router();

const sendOriginData : ISTransactionSQLCommandSet = {
  preSQLCommands: [], 
  mainSQLCommands: [], 
  postSQLCommands: []
};


router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //フロントからの送信データを作成。
  const table = new M_ボートレーサーTable();
  
  const delSQL = new DeleteSQLCommand(table);
  delSQL.condition.addConditions([`登録番号 = 4150`, `登録番号 = 4444`]);
  
  const insSQL = new InsertSQLCommand(table);
  let row : ISDataRow = table.getNewRow();
  
  row['登録番号'] = 4150;
  row['名前'] = "山田 雄太(^_^)";
  row['フリガナ'] = 'ﾔﾏﾀﾞ ﾕｳﾀ';
  insSQL.addRow(row);
  
  row = table.getNewRow();
  row['登録番号'] = 4444;
  row['名前'] = "桐生 順平";
  row['フリガナ'] = 'ｷﾘｭｳ ｼﾞｭﾝﾍﾟｲ';
  insSQL.addRow(row);
  
  
  sendOriginData.mainSQLCommands.push(delSQL);
  sendOriginData.mainSQLCommands.push(insSQL);

  let restoredCommandSet = ExTransactionSQLCommandSetRestorer.restore(JSON.parse(JSON.stringify(sendOriginData)));

  const tranManager = new TransactionManager();
  tranManager.setSQLCommandSet(restoredCommandSet);

  tranManager.execute().then(() => {
    res.send(`成功`);
  }).catch((error) => {
    res.send(`エラー発生${error.message}`);
  });

  //res.send('終了');  
});

/* フロントからポストされたデータを処理するのはまた明日。
router.post('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  let processes : SQLProcesses;

  try {
    processes = req.body;
    console.log(processes);
    res.send('success');
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});
*/
export default router;