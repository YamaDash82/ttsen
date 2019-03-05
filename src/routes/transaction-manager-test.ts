import * as Express from 'express';
import { TransactionManager } from '../yycomp/transaction-manager';
import { SQLProcess } from '../yycomp/sql-process';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
/*
  const tranManager = new TransactionManager();
  
  let delSQL : SQLProcess = new SQLProcess();

  delSQL.source = "DELETE FROM BoatRace.dbo.M_ボートレース場 WHERE 番号 = 7"; 
  
  let insSQL = new SQLProcess();
  insSQL.source = "INSERT INTO BoatRace.dbo.M_ボートレース場 (番号, 名称) VALUES (7, '名古屋')";
  
  tranManager.addMainProcesses(delSQL);
  tranManager.addMainProcesses(insSQL);

  tranManager.execute().then(
    () => { res.send("成功"); }
  ).catch(
    (error) => { res.send(error); }
  );
*/
});

export default router;