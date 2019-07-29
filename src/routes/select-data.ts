import * as Express from 'express';
import { Recordset, ISRecordsets, RecordsetsOpener } from '../yycomp/recordset/recordset';
import { ConnectionFactory, ExConnection } from '../yycomp/connection-factory';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const rst1 = new Recordset('M_ボートレーサー', 'SELECT * FROM M_ボートレーサー');
  const rst2 = new Recordset('M_ボートレース場', 'SELECT * FROM M_ボートレース場');

  const recordsets : ISRecordsets = {};
  recordsets[rst1.name] = rst1;
  recordsets[rst2.name] = rst2;

  const rstOpener = new RecordsetsOpener(recordsets, new ExConnection());
  
  const result:Promise<any> = rstOpener.execute();

  result.then(
    () => {
      let results: string = '';
      results += JSON.stringify(rst1.records);
      results += JSON.stringify(rst2.records);
      

      console.log('send前');
      res.send(results);
    }
  ).catch(
    (error) => {
      console.log('エラーブロック');
      res.send(error);
    }
  );
});

export default router;