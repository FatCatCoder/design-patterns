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

module.exports = class Database{
    private static instance: Database;
    private Database(){}

    public static ConnectionPool: Connection[] = [
        { Host: 'localhost', Port: 6789, ConnectionId: 0, IsAvailable: true},
        { Host: 'localhost', Port: 6789, ConnectionId: 1, IsAvailable: true},
        { Host: 'localhost', Port: 6789, ConnectionId: 2, IsAvailable: true}
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
    private static LifeGuard(): Connection | undefined{
        let openSwimmer: Connection | undefined;
         
        let retryCount = 0;

        (function loop(){
            setTimeout(function() {
                openSwimmer = Database.ConnectionPool.find(y=> y.IsAvailable == true);
                if(openSwimmer != undefined){
                    Database.ConnectionPool[Database.ConnectionPool.findIndex(y=> y.ConnectionId == openSwimmer?.ConnectionId)] = {...openSwimmer, IsAvailable: false};
                    retryCount = 5;
                } 
                if (retryCount < 5) loop();
                else retryCount += 1;
           }, 100);
         })();
         

        return openSwimmer;
    }

    private static PoolCleaner(CTX: Connection){
        CTX.IsAvailable = true;
        this.ConnectionPool[this.ConnectionPool.findIndex(y=> y.ConnectionId == CTX.ConnectionId)] = CTX;
    }

    public static Query = async (sql: string, params: Param[]) => {
        const Pool = Database.LifeGuard();

        // format
        params.forEach(x=> sql.replace(x.Key, x.Value));
    
        await setTimeout(()=>{
            // Execute On SQL Server ....
            // Release On Return
            
        }, 500);
        return `Executed SQL on ${Pool?.Host}:${Pool?.Port} ID:${Pool?.ConnectionId} With Query ${sql}`;
    }
}