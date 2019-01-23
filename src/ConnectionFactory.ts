import * as Tedious from 'tedious';

export class ConnectionFactory extends Tedious.Connection {
  private static config: Tedious.ConnectionConfig = {
    userName: 'sa', 
    password: '', 
    server: 'localhost', 
    options: {
      database: 'BoatRace', 
      port: 1433, 
      encrypt: false
    }
  };

  public static getConnection(): Tedious.Connection {
    return new Tedious.Connection(this.config);
  }
}
/*
export class Connection extends Tedious.Connection {
  private static config: Tedious.ConnectionConfig = {
    userName: 'sa', 
    password: '', 
    server: 'localhost', 
    options: {
      database: 'BoatRace', 
      port: 1433, 
      encrypt: false
    }
  }; 

  private static _instance: Tedious.Connection;

  public static getConnection(): Tedious.Connection{
    if(!this._instance){
      new Connection(this.config);
    }
    return this._instance;
  }

  private constructor(_config: Tedious.ConnectionConfig){
    super(_config);
  }
}
*/