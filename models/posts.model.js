const { Model, Sequelize, Op } = require('sequelize');
const { seq: DB } = require('../sequelize');

class Posts extends Model {
    // write additional logic
};

Posts.init({
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
    post: {
        type: Sequelize.STRING,
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    },
}, {
    tableName: 'posts',
    underscored: false,
    timestamps: true,
    sequelize: DB,
});

module.exports = Posts;