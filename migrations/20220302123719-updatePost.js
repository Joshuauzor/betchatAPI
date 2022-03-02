const tableName = 'posts';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameColumn(tableName, 'posts', 'post'),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameColumn(tableName, 'post', 'posts'),
        ]);
    }
};