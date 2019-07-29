import * as Express from 'express';
//const bodyParser = require('body-parser');
//const path = require('path');
import * as bodyParser from 'body-parser';
import * as path from 'path';
import dataAccess from './routes/data-access';
import queryInput from './routes/query-input';
import bulkLoadTest from './routes/bulk-load-test';
import deleteInsert from './routes/delete-insert';
import transactionTest from './routes/transaction-test';
import transactionManagerTest from './routes/transaction-manager-test';
import modelTest from './routes/model-test2';
import selectData from './routes/select-data';

//import { cookieParser } from 'cookie-parser';
const cookieParser = require('cookie-parser');

const app = Express();

let allowCrossDomain = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    //res.header('Access-Control-Allow-Credentials', 'true');
    //res.header('Access-Control-Allow-Method', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //res.setHeader('Set-Cookie', ['keyword=Donkey']);
    //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //res.header('Access-Control-Max-Age', '864000')
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, 'public')));

//以下ルーティング
app.use('/data-access', dataAccess);
app.use('/query-input', queryInput);
app.use('/bulk-load-test', bulkLoadTest);
app.use('/delete-insert', deleteInsert);
app.use('/transaction-test', transactionTest);
app.use('/transaction-manager-test', transactionManagerTest);
app.use('/model-test', modelTest);
app.use('/select-data', selectData);

app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    return res.send('Hello TTSEN Page.');
});

app.listen(3000, () => {
    console.log('Listen on port 3000.');
});

export default app;