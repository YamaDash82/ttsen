import * as Tedious from 'tedious';

export class ConnectionFactory extends Tedious.Connection {
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
      port: 1433, 
      encrypt: false
    }
  };

  public static getConnection(): Tedious.Connection {
    return new Tedious.Connection(this.config);
  }
}