import * as Express from 'express';
import * as Tables from '../yycomp/base-table/base-table';
import { SQLCommand, InsertSQLCommand } from  '../yycomp/sql-command/sql-command';
//import { M_ボートレーサーTable } from '../yycomp/tables/boat-racer-m_ボートレーサー.table';

const router = Express.Router();

interface BoatRacer {
  登録番号: number; 
  名前: string; 
  フリガナ: string
  
};

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
/*
  const table = new M_ボートレーサーTable();
  const command = new InsertSQLCommand(table);

  const rows : BoatRacer[] = [
    {
      登録番号: 4150, 
      名前: '山田　雄太', 
      'フリガナ': 'ﾔﾏﾀﾞ ﾕｳﾀ'
    }, 
    {
      登録番号: 4151, 
      名前: '山田 江梨', 
      'フリガナ': 'ﾔﾏﾀﾞ ｴﾘ'
    }, 
  ];
*/
  const rows: {
    登録番号: number; 
    名前: string;
    フリガナ: string; 
  }[] = [
    {
      登録番号: 4150, 
      名前: '山田　雄太', 
      'フリガナ': 'ﾔﾏﾀﾞ ﾕｳﾀ'
    }, 
    {
      登録番号: 4151, 
      名前: '山田 江梨', 
      'フリガナ': 'ﾔﾏﾀﾞ ｴﾘ'
    }, 
  ];

  rows.push({
    登録番号: 5555, 
    名前: '仮面ライダー',
    フリガナ: 'ｶﾒﾝﾗｲﾀﾞｰ'
  });

/*
  for(let r of rows){
    const newRow = table.getNewRow();

    for(let fld in r){

      //newRow[fld as keyof Tables.ISAttributes] = r[fld as keyof BoatRacer];
      newRow[fld] = r[fld as keyof {
        登録番号: number; 
        名前: string;
        フリガナ: string; 
      }];
    }

    command.addRow(newRow);
  }
  
  console.log(`コマンド生成されたかな？${command.getCommands()[0]}`);

  //console.log('取得できるかな:' + Object.keys(table.attributes).length);

  

  res.send('Success');

*/
});

export default router;