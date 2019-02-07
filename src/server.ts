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

//import { cookieParser } from 'cookie-parser';
const cookieParser = require('cookie-parser');

const app = Express();

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

app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    return res.send('Hello TTSEN Page.');
});

app.listen(3000, () => {
    console.log('Listen on port 3000.');
});

export default app;