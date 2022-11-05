const {getConnection,closeConnection} = require('./Util');
const {DB_TO_SKIP,GET_ALL_DB_QUERY,getQuery} = require('./code');


const connection1 = getConnection();

const connection2 = getConnection();

connection1.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection 1 established sucessfully');
});

connection2.connect((error) => {
    if(error){
      console.log('Error connecting to the MySQL Database');
      return;
    }
    console.log('Connection 2 established sucessfully');
  });

connection1.query(GET_ALL_DB_QUERY, function (error, results, fields) {
    if (error) throw error;
    console.log("Query: "+getQuery('dbname'));
    Array.from(results).forEach(result=>{
        var dbname = result.dbname;
        // console.log(result.dbname);
        const QUERY = getQuery(dbname);
        connection2.query(QUERY,function (error, results, fields) {
            if (error){
                console.log(`${dbname} is failed Error:`+error);
                return;
            } 
            console.log(`${dbname} is success`);

        });
    })
    closeCon();
    
});

function closeCon()
{
    closeConnection(connection1);
    closeConnection(connection2);
}
