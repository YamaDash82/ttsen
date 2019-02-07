import * as Express from 'express';
import { ConnectionFactory } from '../yycomp/connection-factory';
import * as Tedious from 'tedious';

const router = Express.Router();

interface BoatRacer{
  "登録番号": number;
  "名前": string;
  "フリガナ": string;
}
interface BoatRacers {
/*
  boatRacer: {
    "登録番号": number;
    "名前": string;
    "フリガナ": string;
    No: number;
    Name: string;
    Furigana: string 

  }[];
*/
  boatRacer: BoatRacer[]
}
router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  // まずは動作確認。
  
  //コネクション
  let conn = ConnectionFactory.getConnection();

  conn.on('connect', (error: Tedious.ConnectionError) => {
    if(error){
      res.send(JSON.stringify(error));
      return;
    }

    //リクエストを実行する。
    executeStatement();
  });

  const executeStatement = ():void => {
    // ダミーデータ
    const boatRacersData: BoatRacers ={boatRacer: [
      {"登録番号": 4151, "名前": "Jhon", "フリガナ": "ｼﾞｮﾝ"}, 
      {"登録番号": 4136, "名前": "Smith", "フリガナ": "ｽﾐｽ"}, 

    ]};
    // 挿入SQLを生成する。
    let sql: string = "";
    let fields: string = "";
    let rowValues: string = "";

    for(let key in boatRacersData.boatRacer[0]){
      if(fields.length > 0 ) fields += ",";
      fields += key;
    }

    sql = `INSERT INTO BoatRace.dbo.M_ボートレーサー ([登録番号], [名前], [フリガナ]) VALUES `;
    sql += `(4136, '江夏 満', 'ｺｳｶ ﾐﾂﾙ'), `
    sql += `(4151, '下河 誉史', 'ｼﾓｶﾞﾜ ﾀｶﾌﾐ')`


    const request = new Tedious.Request(sql, (error: Tedious.RequestError, rowCount: number) => {
      if(error){
        res.send(JSON.stringify(error));
        return;
      }

      res.send('挿入された行数:' + rowCount);
    });

    request.on('requestCompleted', () => {
      conn.close();
    });

    conn.execSql(request);
  }
});

export default router;