import * as Express from 'express';
import * as Tedious from 'tedious';
import connConfig from './conn.config';

const app = Express();
const Connection = require('tedious').Connection;

const ejs = require('ejs');
app.engine('ejs', ejs.renderFile);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


/*
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
*/
app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  return res.send('Hello World');
});

app.get('/dbconnect', (req: Express.Request, res: Express.Response) => {
  console.log('きた');
  const connection = new Connection(connConfig);
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

app.get('/add', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const connection = new Connection(connConfig);
  const Request = require('tedious').Request;
  const TYPES = require('tedious').TYPES;
  
  connection.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      console.log(err);
      return; 
    }

    executeStatement();
  });
  
  connection.on('end', (err: Tedious.ConnectionError) => {
    res.send('新規追加完了');
  });

  const executeStatement = () =>{
    const request = new Request('INSERT INTO M_ボートレーサー (登録番号, 名前, フリガナ) VALUES (@no, @name, @furigana)', (err: Tedious.RequestError) => {
      if(err){
        console.log(err);
      }
    });
    request.addParameter('no', TYPES.Int, 1111), 
    request.addParameter('name', TYPES.NVarChar, '山田　太郎');
    request.addParameter('furigana', TYPES.NVarChar, 'ﾔﾏﾀﾞ ﾀﾛｳ');
    
    request.on('row', (columns: Tedious.ColumnValue[]) => {
      columns.forEach((column: Tedious.ColumnValue) => {
        console.log(column.value === null ? 'null' : `列の値:${column.value}`);
      });
    });

    request.on('requestCompleted', () => {
      connection.close();
    });

    connection.execSql(request);
  };
});

app.get('/update', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const connection = new Connection(connConfig);
  
  connection.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      console.log(err);
    }
    executeStatement();
  });

  const executeStatement = () => {
    const request = new Tedious.Request('UPDATE M_ボートレーサー SET 名前 = @name, フリガナ = @furigana WHERE 登録番号 = @no', (err: Tedious.RequestError) => {
      if(err){
        console.log(err);
      }
    });
    
    request.addParameter('no', Tedious.TYPES.Int, 1111);
    request.addParameter('name', Tedious.TYPES.NVarChar, '鈴木　史郎');
    request.addParameter('furigana', Tedious.TYPES.NVarChar, 'ｽｽﾞｷ ｼﾛｳ');

    request.on('requestCompleted', () => {
      res.send('更新完了');
      connection.close();
    });

    connection.execSql(request);
  };
});

app.get('/delete', (req: Express.Request, res: Express.Response) => {
  const connection = new Connection(connConfig);
  
  connection.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      console.log(err);
    }
    executeStatement();
  });

  connection.on('end', () => {
    console.log('切断');
  });

  const executeStatement = () =>{
    const request = new Tedious.Request('DELETE FROM M_ボートレーサー WHERE 登録番号 = @no', (err: Tedious.RequestError) => {
      if(err){
        console.log(err);
      }
    });

    request.addParameter('no', Tedious.TYPES.Int, req.query['no']);

    request.on('requestCompleted', () => {
      console.log('削除完了');
      res.send('削除完了');
      connection.close();
    });
    connection.execSql(request);
  }
});

app.get('/racermaster', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.render('racerMaster.ejs');

});

app.post('/racermaster/add', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  const connection = new Connection(connConfig);
  connection.on('connect', (err: Tedious.ConnectionError) => {
    if(err){
      console.log(err);
    }
    executeStatement();
  });
  
  connection.on('end', () => {
    res.redirect('/racermaster');
  });

  const executeStatement = () =>{
    const request = new Tedious.Request('INSERT INTO M_ボートレーサー (登録番号, 名前, フリガナ) VALUES (@no, @name, @furigana)', (err: Tedious.RequestError) => {
      if(err){
        console.log(err);
      }
    });

    request.addParameter('no', Tedious.TYPES.Int, req.body['no']);
    request.addParameter('name', Tedious.TYPES.NVarChar, req.body['name']);
    request.addParameter('furigana', Tedious.TYPES.NVarChar, req.body['furigana']);

    connection.execSql(request);

    request.on('requestCompleted', () => {
      connection.close();
    });
  };

});

app.listen(3000, () => {
  console.log('Server Open');
});

export default app;
