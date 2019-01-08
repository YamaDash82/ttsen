const config = {
  userName: 'sa', 
  password: '', 
  server: 'localhost', 
  options: {
    truestedConnection: true,
    database: 'BoatRace', 
    port: 1433, 
    encrypt: false, 
    rowCollectionOnRequestCompletion: true, 
    //rowCollectionOnDone: true 
  }
};

export default config;