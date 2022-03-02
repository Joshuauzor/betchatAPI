const tableName = 'interests';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.addColumn(tableName, 'userId', {
                type: Sequelize.UUID,
                allowNull: false,
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.removeColumn(tableName, 'userId', {
                type: Sequelize.UUID,
                allowNull: false,
            }),
        ]);
    }
};