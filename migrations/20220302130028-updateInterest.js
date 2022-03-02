const tableName = 'users';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.changeColumn(tableName, 'interests', {
                type: Sequelize.TEXT
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.changeColumn(tableName, 'interests', {
                type: Sequelize.STRING
            }),
        ]);
    }
};