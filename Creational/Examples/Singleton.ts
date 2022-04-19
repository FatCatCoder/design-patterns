/**
 * Single Instance object
 */
 type Param = {
    Key: string;
    Value: any;
  };

  type Connection = {
      Host: string;
      Port: Number;
      ConnectionId: Number;
      IsAvailable: Boolean;
  }

 export default class Database{
    private static instance: Database;
    private Database(){}

    public ConnectionPool: Connection[] = [
        { Host: 'localhost', Port: 6789, ConnectionId: 0, IsAvailable: true},
        { Host: 'localhost', Port: 6789, ConnectionId: 1, IsAvailable: true}
    ];

    /** Returns or creates object */
    public static getInstance(): Database{
        if(!Database.instance) Database.instance = new Database();
        
        return Database.instance;
    }

    /**
     * Logic & Methods Go Here
     */

    /** Gets & Saves Connections From pool */
    private static LifeGuard(){
        ConnectionPool.Find(y=> y.);
        
    }

    /** Cleans up Pool Connections */
    private PoolCleaner(){

    }

    public static Query(sql: string, params: Param[]){

        params.forEach(x=> sql.replace(x.Key, x.Value));
    
        return sql;
    }
}