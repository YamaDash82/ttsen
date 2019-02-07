import * as Express from 'express';
import * as Tedious from 'tedious';
import { ConnectionFactory } from '../yycomp/connection-factory';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const conn = ConnectionFactory.getConnection();
  
  const beginTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      conn.beginTransaction((error: Error) => {
        if(error){
          reject(error);
        } else {
          resolve();
        }
      });
    });
  };

  const commitTransaction = (): Promise<any> => {
    return new Promise((resolve, reject) => {
      conn.commitTransaction((error: Error) => {
        if(error){
          reject(error);
        } else {
          resolve();
        }
      })
    });
  };

  let deletedRows: number = 0;
  let insertedRows: number = 0;

  const deleteRequest = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      let sql = "DELETE FROM M_ボートレース場 WHERE 番号 = 24";
      const request = new Tedious.Request(sql, (error: Tedious.RequestError, rowCount: number) => {
        if(error){
          reject(error);
        } else {
          resolve(rowCount);
        }
      });

      conn.execSql(request);
    });
  };

  const insertRequest = (): Promise<number> => {
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO M_ボートレース場 (番号, 名称) VALUES (24, 'ボートレース明神湖')";
      const request = new Tedious.Request(sql, (error: Tedious.RequestError, rowCount:number) => {
        if(error){
          reject(error);
        } else {
          resolve(rowCount);
        }
      });

      conn.execSql(request);
    });
  }

  conn.on('connect', (error: Tedious.ConnectionError) => {
    beginTransaction()
    .then(
      () => {
        return deleteRequest();
      }, 
      (error) => { res.send(error); }
    ).then(
      (rowCount: number) => {
        deletedRows = rowCount;

        return insertRequest();
      }, 
      (error) => { res.send(error); }
    ).then(
      (rowCount:number) => {
        insertedRows = rowCount;

        return commitTransaction();
      } 
    ).then(
      () => {
        res.send(`削除された行数:${deletedRows}, 挿入された行数:${insertedRows}`);
      }, 
      (error) => { res.send(error); }
    );
  });
  
});

export default router;