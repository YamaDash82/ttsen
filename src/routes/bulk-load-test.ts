import * as Express from 'express';
import { ConnectionFactory } from '../yycomp/connection-factory';
import * as Tedious from 'tedious';

const router = Express.Router();

interface BoatRacer{
/*
  "登録番号": number;
  "名前": string;
  "フリガナ": string;
*/
  No1: number;
  Name1: string;
  Furigana1: string 

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

  const loadBuldData = () => {
    let bulkLoad: Tedious.BulkLoad = conn.newBulkLoad('M_ボートレーサー', (error: Tedious.ConnectionError, rowCount: number) => {
      if(error){
        res.send(JSON.stringify(error));
        return;
      }
      res.send(`inserted ${rowCount} rows`);
    });
    
    // 列情報をセットする。
    /*
    bulkLoad.addColumn('登録番号', Tedious.TYPES.SmallInt, { length: "max", nullable: false, objName: "No1" });
    bulkLoad.addColumn('名前', Tedious.TYPES.NVarChar, { length: 20, nullable: true, objName: "Name1"});
    bulkLoad.addColumn('フリガナ', Tedious.TYPES.NVarChar, { length: 20, nullable: true, objName: "Furigana1" });
    */
    bulkLoad.addColumn("登録番号", Tedious.TYPES.SmallInt, { length: Infinity, nullable: false, objName: "No1"});
    bulkLoad.addColumn("名前", Tedious.TYPES.NVarChar, { length: 20, nullable: true, objName: "Name1"});
    bulkLoad.addColumn("フリガナ", Tedious.TYPES.NVarChar, { length: 20, nullable: true, objName: "Furigana1"});
    
    /*
    bulkLoad.addColumn('No', Tedious.TYPES.SmallInt, { nullable: false });
    bulkLoad.addColumn('Name', Tedious.TYPES.NVarChar, { length: 20, nullable: true});
    bulkLoad.addColumn('Furigana', Tedious.TYPES.NVarChar, { length: 20, nullable: true });
    */
    //ダミーデータを準備する。
    const boatRacersData: BoatRacers ={boatRacer: [
      {No1: 4151, Name1: "Jhon", Furigana1: "ｼﾞｮﾝ"}, 
      {No1: 4136, Name1: "Smith", Furigana1: "ｽﾐｽ"}, 

    ]};
  
    boatRacersData.boatRacer.forEach((boatRacer: BoatRacer) => {
      /*
      let rowData : any[] = [];
      for(let key in boatRacer){
        console.log('key:' + key);
        //rowData.push(boatRacer[key]);
      }
      bulkLoad.addRow(boatRacer["登録番号"], boatRacer["名前"], boatRacer["フリガナ"]);
      */
      // bulkLoad.addRow([boatRacer.No1, boatRacer.Name1, boatRacer.Furigana1]);
      bulkLoad.addRow(boatRacer);
      
      console.log('行追加成功:' + JSON.stringify(boatRacer));
    });
  
    //挿入処理を実行する。
    conn.execBulkLoad(bulkLoad);
  };

  conn.on('connect', (error: Tedious.ConnectionError) => {
    if(error){
      res.send(JSON.stringify(error));
      return;
    }

    loadBuldData();
  });
});

export default router;