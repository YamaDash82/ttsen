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