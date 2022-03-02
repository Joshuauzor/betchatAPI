const tableName = 'posts';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameColumn(tableName, 'interest', 'posts'),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameColumn(tableName, 'interest', 'posts'),
        ]);
    }
};