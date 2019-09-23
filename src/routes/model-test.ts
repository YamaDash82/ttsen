import * as Express from 'express';
import { M_ボートレーサーModel } from '../yycomp/models/M_ボートレーサーModel';
import { TransactionManager } from '../yycomp/transaction-manager/transaction-manager';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
/*
  const tranManager = new TransactionManager();

  const model = new M_ボートレーサーModel();
  
  console.log(JSON.stringify(model.deleteSQLFactory('登録番号 IN (1854, 1855)')));
  tranManager.addMainProcesses(model.deleteSQLFactory('登録番号 IN (1854, 1855)'));

  let row = model.getNewRow();
  row['登録番号'] = 1854;
  row['名前'] = 'レーサー太郎2';
  row['フリガナ'] = 'ﾚｰｻｰﾀﾛｳ2';
  model.addInsertRow(row);

  let row2 = model.getNewRow();
  row2['登録番号'] = 1855;
  row2['名前'] = 'レーサー花子2';
  row2['フリガナ'] = 'ﾚｰｻｰﾊﾅｺ2';
  model.addInsertRow(row2);

  console.log(JSON.stringify(model.insertSQLFactory()));
  
  tranManager.addMainProcesses(model.insertSQLFactory());
  tranManager.execute().then(() => {
    res.json('Success');
  })
  .catch((error) => {
    console.log(`エラー内容：${error}`);
    if ( error instanceof Error ){
      console.log('errorはErrorのインスタンスです');
    } else {
      console.log('errorはErrorのインスタンスではないです');
    }
    
    res.json(error);
    
  });
*/
});

export default router;