var mysql= require('mysql');

const constructAlterTableQuery = (dbname,tableName,columnName,dataType,isNullable,isDefault,defaultVal) => {
    var query="ALTER TABLE ";
    if(tableName==null || dbname==null || columnName==null || dataType==null)
    {
        return "";
    }
    query+=`${dbname}.${tableName} `;
    query+="ADD ";
    query+=`${columnName} ${dataType} `;
    if(!isNullable)
    {
        query+=`NOT NULL `;
    }
    if(isDefault)
    {
        query+=`DEFAULT ${defaultVal}`;
    }
    return query;
}

const getConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port:3306,
        user: 'root',
        database: 'TEST',
      });
}

const closeConnection = (connection) => {
    connection.end((error) => {
    });
}

module.exports = {constructAlterTableQuery,getConnection,closeConnection};