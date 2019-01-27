import * as Express from 'express';
import * as Tedious from 'tedious';
import { ConnectionFactory } from '../yycomp/connection-factory';
const router = Express.Router();


interface SQLRequest{
  queryName: string;
  source: string;
}

interface RequestData {
  requests: SQLRequest[];
}

class ResultData {
  queryName: string;
  records: any[];

  constructor(){
    this.queryName = "";
    this.records = [];
  }
}

const dummyRequestData: RequestData = {
  requests: [
    {
      queryName: "M_ボートレーサー", 
      source: "SELECT * FROM BoatRace.dbo.M_ボートレーサー"
    }, 
    {
      queryName: "M_ボートレース場", 
      source: "SELECT * FROM BoatRace.dbo.M_ボートレース場"
    }
  ]
};

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //ダミーのリクエストデータを生成。
  const dummyRequest = JSON.stringify(dummyRequestData);
  const dreqs: RequestData = JSON.parse(dummyRequest);
  const conn: Tedious.Connection = ConnectionFactory.getConnection();
  const reqCount = dreqs.requests.length;
  let current: number = 0;
  let requests: Tedious.Request[] = [];
  let results: ResultData[] = [];
  let result: ResultData;
  let completedCount: number = 0;

  conn.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      res.send(err.message);
      return;
    }
    executeStatement();
  });

  const trySend = () => {
    if(completedCount===reqCount){
      res.json(results);
    }
  };

  const executeStatement = () => {
    const sqlRequests: SQLRequest[] = dreqs.requests;
    let records: any[] = [];

    sqlRequests.forEach((sqlRequest) => {
      let row: any = {};
      console.log('リクエスト生成');
      const request = new Tedious.Request(sqlRequest.source, (error: Tedious.RequestError) => {
        completedCount++;

        if(error){
          console.log("エラー内容:" + error);
          return;
        }
      });

      console.log('行イベント生成');
      request.on('row', (columns: Tedious.ColumnValue[]) => {
        columns.forEach((column: Tedious.ColumnValue) => {
          row[column.metadata.colName] = column.value;
        });
        console.log(`行の内容:${JSON.stringify(row)}`);
        records.push(row);

        row = {};
      });

      request.on('requestCompleted', () => {
        if(++current in sqlRequests){
          conn.execSql(requests[current]);
        }
        result = new ResultData();
        result.queryName = sqlRequest.queryName;
        result.records = records;
        results.push(result);
        records = [];
        console.log("trySend前:" + sqlRequest.source + ", recors:" + JSON.stringify(records));
        trySend();
      });

      requests.push(request);
    });

    conn.execSql(requests[0]);
  };
});

export default router;