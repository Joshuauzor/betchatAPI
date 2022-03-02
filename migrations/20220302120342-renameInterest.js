const tableName = 'interests';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameTable(tableName, 'posts'),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.renameTable('posts', tableName),
        ]);
    }
};