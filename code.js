const {constructAlterTableQuery} = require('./Util');

const DB_TO_SKIP = "'information_schema', 'performance_schema', 'mysql','jbossdb','sys','photo_store','click_store','TEST','Library'";
const GET_ALL_DB_QUERY = `SELECT DISTINCT SCHEMA_NAME AS dbname FROM information_schema.SCHEMATA  WHERE SCHEMA_NAME NOT IN (${DB_TO_SKIP}) ORDER BY SCHEMA_NAME`;

const getQuery = (dbname) => {
    return constructAlterTableQuery(dbname,"ZSActivityRecord","Type","INTEGER",0,1,0);
}
module.exports = {DB_TO_SKIP,GET_ALL_DB_QUERY,getQuery};
// ALTER TABLE CurrencySettings ADD RoundingMode TINYINT NOT NULL DEFAULT 4;
