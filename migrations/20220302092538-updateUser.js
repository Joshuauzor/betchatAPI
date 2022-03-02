const tableName = 'users';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.addColumn(tableName, 'updatedAt', {
                type: Sequelize.DATE
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.removeColumn(tableName, 'updatedAt', {
                type: Sequelize.DATE
            }),
        ]);
    }
};