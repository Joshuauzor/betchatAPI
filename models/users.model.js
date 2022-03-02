const { Model, Sequelize, Op } = require('sequelize');
const { seq: DB } = require('../sequelize');
class Users extends Model {

};

Users.init({
    id: {
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    uuid: {
        type: Sequelize.UUID,
        unique: true,
        defaultValue: Sequelize.UUIDV4
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    interests: {
        type: Sequelize.STRING
    },
    userType: {
        type: Sequelize.STRING,
        defaultValue: 'user'
    },
    password: {
        type: Sequelize.STRING
    },
    createdAt: {
        type: Sequelize.DATE
    },

}, {
    tableName: 'users',
    underscored: false,
    timestamps: true,
    sequelize: DB,
});

module.exports = Users;