import * as Express from 'express';
import * as Tedious from 'tedious';

const app = Express();
const Connection = require('tedious').Connection;

const config = {
  userName: 'sa', 
  password: '', 
  server: 'localhost', 
  options: {
    truestedConnection: true,
    database: 'BoatRace', 
    port: 1433, 
    encrypt: false
  }
};

app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  return res.send('Hello World');
});

app.get('/dbconnect', (req: Express.Request, res: Express.Response) => {
  console.log('きた');
  const connection = new Connection(config);
  console.log('接続成功');
  const content: any[] = [];
  const Request = require('tedious').Request;
  
  connection.on('connect', (err: any) => {
    console.log('ProgramMessage:connected');
    executeStatement();
  });

  connection.on('end', () => {
    console.log('ProgramMessage:disconnected');

    res.json(content);
  });

  const executeStatement = () => {
    console.log('executeStatementきた');
    const request = new Request('SELECT * FROM M_ボートレーサー', (err: any) => {
      if(err){
        console.log(err);
      }
      console.log('Request生成');
    });

    let result: any = {};

    request.on('row', (columns: any) => {
      console.log('request.on(\'columns\')');
      if(columns.value===null){
        console.log('Null');
      } else {
        console.log('else');
        columns.forEach((column: Tedious.ColumnValue) => {
          result[column.metadata.colName] = column.value;
        });
        content.push(result);
        result = {};
      }
    });


    request.on('requestCompleted', () => {
      console.log('requestCompleted');
      connection.close();
    });
    connection.execSql(request);
  }


});

app.listen(3000, () => {
  console.log('Server Open');
});

export default app;
