const Sequelize = require('sequelize');
require('dotenv').config();

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_NAME, MYSQL_DIALECT } =
process.env;
const sequelize = new Sequelize(MYSQL_NAME, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    dialect: MYSQL_DIALECT,
    logging: false,
    timezone: '+01:00',
});

sequelize
    .authenticate()
    .then(() => {
        console.log({
            type: 'success',
            message: '****Connected To MYSQL*****',
        });
    })
    .catch((err) => {
        console.log({
            type: 'danger',
            msg: 'Failed to connect to MySQL:',
            err: err.toString ? err.toString() : err,
        });
        process.exit(1);
    });

const seq = sequelize;
const Op = Sequelize.Op;

module.exports = {
    seq,
    Op,
};