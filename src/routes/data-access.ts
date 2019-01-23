import * as Express from 'express';
import * as Tedious from 'tedious';
import { ConnectionFactory } from '../ConnectionFactory';
const router = Express.Router();

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
    const records2 : any[] = [];

    let row : any = {};
    let row2: any = {};

    const request2 = new Tedious.Request('SELECT * FROM BoatRace.dbo.M_ボートレース場', (error: Tedious.RequestError, rowCount: number) => {
      res.send(records2);
    });

    request2.on('row', (columns: Tedious.ColumnValue[]) => {
      columns.forEach((column: Tedious.ColumnValue) => {
        row2[column.metadata.colName] = column.value;
      });

      records2.push(row2);
      row2 = {};
    });

    const request = new Tedious.Request('SELECT * FROM BoatRace.dbo.M_ボートレーサー', (error: Tedious.RequestError, rowCount: number) => {
      if(error){
        res.send(error.message);
        return;
      }

      //コネクションを閉じる。
      //conn.close();
      res.send(records);
    });

    request.on('row', (columns: Tedious.ColumnValue[]) => {
      columns.forEach((column: Tedious.ColumnValue) => {
        row[column.metadata.colName] = column.value;
      });
      records.push(row);

      row = {};
    });

    const requests : Tedious.Request[] = [];
    //requests.push(request);
    requests.push(request2);

    requests.forEach((currentReq: Tedious.Request) => {
      conn.execSql(currentReq);
    });
    
  };
});

export default router;