module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.createTable('interests', {
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
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                },
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.dropTable('interests'),
        ]);
    }
};