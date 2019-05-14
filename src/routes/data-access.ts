import * as Express from 'express';
import { RequestedData } from '../yycomp/declarations';
import { RequestReceiver } from '../yycomp/request-receiver';
const router = Express.Router();

//ダミーのリクエストデータ
const dummyRequestData: RequestedData = {
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
  //RequestReceiverクラスのインスタンスを生成する。
  console.log('get');
  console.log(JSON.stringify(req.query));
  let requestedData: RequestedData = {
    requests: [
      req.query
    ]
  }
  const requestReceiver = new RequestReceiver(requestedData, res);
  
  //処理を実行する。requestReceiverに渡したResponseに取得したデータを渡してフロントに返している。
  requestReceiver.execute();
});

router.post('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  //RequestReceiverクラスのインスタンスを生成する。
  /**
  let requestedData: RequestedData = {
    requests: [
      req.body
    ]
  };
  */
  console.log('post');
  console.log(`受信:${JSON.stringify(req.body)}`);
  console.log(`生データ${req.body}`);
  let requestedData: RequestedData = <RequestedData>req.body;
  console.log('通過');
  const requestReceiver = new RequestReceiver(requestedData, res);
  //処理を実行する。requestReceiverに渡したResponseに取得したデータを渡してフロントに返している。
  requestReceiver.execute();
});

export default router;