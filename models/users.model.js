const { Model, Sequelize, Op } = require('sequelize');
const { seq: DB } = require('../sequelize');
const bcrypt = require("bcryptjs");
const _ = require('lodash');

class Users extends Model {
    static async verifyEmail(data) {
        let user = await this.findOne({ where: { email: data.email } });

        if (!user)
            return Promise.reject('incorrect email and/or password');

        const comparePassword = await bcrypt.compare(data.password, user.password);
        if (!comparePassword)
            return Promise.reject('incorrect email and/or password');

        user = _.omit({...user.toJSON() }, ['password']);
        return user;
    }

    static async createUser(data) {
        const isUnqiue = await this.findOne({ where: { email: data.email } });
        if (isUnqiue)
            return Promise.reject('User already exist');
        const user = _.omit(data, data.password);
        const password = await bcrypt.hash(data.password, 8);
        await this.create({...user, password });
        return Promise.resolve('User created successfully');
    }
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
        type: Sequelize.JSON
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
    updatedAt: {
        type: Sequelize.DATE
    },
}, {
    tableName: 'users',
    underscored: false,
    timestamps: true,
    sequelize: DB,
});

module.exports = Users;