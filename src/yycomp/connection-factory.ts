import * as Tedious from 'tedious';

export class ConnectionFactory {
  private static config = {
    //userName: 'sa', 
    //password: '', 
    server: 'localhost', 
    authentication: {
      type: "default", 
      options: {
        userName: 'sa', 
        password: ''
      }
    },
    options: {
      database: 'BoatRace', 
      port: 50625, 
      encrypt: false
    }
  };
  
  public static getConnection(): Tedious.Connection {
    return new Tedious.Connection(this.config);
  }

}

export class ConnectionCreator {
  private _conn: Tedious.Connection;

  private static config = {
    //userName: 'sa', 
    //password: '', 
    server: 'localhost', 
    authentication: {
      type: "default", 
      options: {
        userName: 'sa', 
        password: ''
      }
    },
    options: {
      database: 'BoatRace', 
      port: 50625, 
      encrypt: false
    }
  };

  constructor(){
    this._conn = new Tedious.Connection(ConnectionCreator.config);
  }

  connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      this._conn.on('connect', (error) => {
        if(error){
          return reject(error);
        }
        console.log('1:Connected');
        return resolve();
      })
    });
  }

  get conn(): Tedious.Connection{
    return this._conn;
  }
}


export class ExConnection extends Tedious.Connection {
  private static config = {
    //userName: 'sa', 
    //password: '', 
    server: 'localhost', 
    authentication: {
      type: "default", 
      options: {
        userName: 'sa', 
        password: ''
      }
    },
    options: {
      database: 'BoatRace', 
      port: 50625, 
      encrypt: false
    }
  };

  constructor(){
    super(ExConnection.config);
    console.log('インスタンス生成');
  }

  connectEventPromise(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.on('connect', (error) => {
        if(error){
          return reject(error);
        }
        return resolve();
      })
    });
  }
}