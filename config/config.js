require('dotenv').config();

const {
    NODE_ENV,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_NAME,
    MYSQL_DIALECT
} = process.env;

module.exports = {
    [NODE_ENV]: {
        username: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_NAME,
        host: MYSQL_HOST,
        dialect: MYSQL_DIALECT,
        port: MYSQL_PORT
    }
};