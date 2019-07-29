import * as Express from 'express';
import { TransactionManager } from '../yycomp/transaction-manager';
import { SQLProcess } from '../yycomp/sql-process';
import { SQLProcesses } from '../yycomp/declarations';
import { M_ボートレーサーModel } from '../yycomp/models/M_ボートレーサーModel';
import { DataRow } from '../yycomp/declarations';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const model = new M_ボートレーサーModel();
  const row :DataRow = model.getNewRow();
  row['登録番号'] = 5000;
  row['名前'] = "だれやねん";
  row['フリガナ'] = 'ﾀﾞﾚﾔﾈﾝ';
  model.addInsertRow(row);

  const process: SQLProcess = new SQLProcess(model);
  console.log(process);
  console.log(JSON.parse(JSON.stringify(process)));
  res.send(JSON.stringify(process, null, '  '));
});

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

export default router;