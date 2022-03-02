const { Model, Sequelize, Op } = require('sequelize');
const { seq: DB } = require('../sequelize');

class Interest extends Model {
    // write additional logic
};

Interest.init({
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
    interest: {
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

module.exports = Interest;