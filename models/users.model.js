const { Model, DataTypes, Op } = require('sequelize');
const { seq: DB } = require('../sequelize');
class Users extends Model {

};

Users.init({
    agentId: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.UUID,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    mdaID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    userType: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    organization: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    balance: {
        type: DataTypes.STRING
    },
    lastsync: {
        type: DataTypes.STRING
    },
    supervisorId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    dateCreated: {
        type: DataTypes.STRING
    },
    loggedIn: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'users',
    underscored: false,
    timestamps: true,
    sequelize: DB,
});

module.exports = Users;