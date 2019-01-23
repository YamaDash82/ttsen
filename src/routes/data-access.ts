import * as Express from 'express';
import * as Tedious from 'tedious';
import { ConnectionFactory } from '../ConnectionFactory';
const router = Express.Router();

class BoatRacer {
  TorokuBango : number;
  Namae : string; 
  Furigana: string;
}

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const conn: Tedious.Connection = ConnectionFactory.getConnection();
  
  conn.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      res.send(err.message);
      return;
    }
    executeStatement();
  });

  const executeStatement = () => {
    const records: any[] = [];
    let row : BoatRacer;

    const request = new Tedious.Request('SELECT 登録番号 as TorokuBango, 名前 as Namae, フリガナ as Furigana FROM BoatRace.dbo.M_ボートレーサー', (error: Tedious.RequestError, rowCount: number) => {
      if(error){
        res.send(error.message);
        return;
      }

      //コネクションを閉じる。
      conn.close();
      res.send(records);
    });

    request.on('row', (columns: Tedious.ColumnValue[]) => {
      row = new BoatRacer();
      columns.forEach((column: Tedious.ColumnValue) => {
        row[column.metadata.colName] = column.value;
      });
      records.push(row);
    });

    conn.execSql(request);
  };
});

export default router;