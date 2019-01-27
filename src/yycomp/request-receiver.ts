import { RequestedData, RequestedQuery, ResultData } from './declarations';
import { ConnectionError } from 'tedious';
import { ConnectionFactory } from './connection-factory'; 
import { RequestManager } from './request';
import * as Express from 'express';

export class RequestReceiver {
  //フィールド
  //要求データ
  private requestedData: RequestedData;
  private conn: ConnectionFactory;
  private requests: RequestManager[];
  private currentExecute: number;
  private resultDatas: ResultData[];
  
  //コンストラクタ　
  //receivedData: フロントからポスト送信され、それを受信したデータ
  constructor(private receivedData: any, res: Express.Response){
    //受信データをパースし、要求データとして受け取る。(例外処理を組み込む予定。)
    this.requestedData = JSON.parse(receivedData);
    console.log(JSON.stringify(this.requestedData));

    //データベースと接続する。
    this.conn = ConnectionFactory.getConnection();

    //リクエスト配列を初期化する。
    this.requests = [];

    this.currentExecute = 0;

    this.resultDatas = [];

    //要求データ中の要求SQLを巡回し、TediousのRequestクラスのインスタンスを生成する。
    this.requestedData.requests.forEach((requestedQuery: RequestedQuery) => {
      const request = new RequestManager(requestedQuery.queryName, requestedQuery.source);
      
      request.prepare((resultData: ResultData) => {
        this.resultDatas.push(resultData);

        if(++this.currentExecute in this.requests) {
          this.conn.execSql(this.requests[this.currentExecute].request);
        } else {
          res.json(this.resultDatas);
        }
      });

      this.requests.push(request);
    });
  }
  
  //実行処理
  public execute():void {
    //最初の取得処理を実行する。
    this.conn.on('connect', (error: ConnectionError) => {
      if(error){
        console.log(error);
      }

      this.conn.execSql(this.requests[0].request);
    });
  }
}