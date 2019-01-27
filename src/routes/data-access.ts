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
  const requestReceiver = new RequestReceiver(JSON.stringify(dummyRequestData), res);
  //処理を実行する。requestReceiverに渡したResponseに取得したデータを渡してフロントに返している。
  requestReceiver.execute();
});

export default router;