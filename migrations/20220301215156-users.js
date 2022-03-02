const tableName = 'datalite_ticket_limit';


module.exports = {
    up: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.createTable('users', {
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
                    type: Sequelize.STRING
                },
                userType: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    type: Sequelize.DATE
                },
                createdAt: {
                    type: Sequelize.DATE
                },
            }),
        ]);
    },

    down: async(queryInterface, Sequelize) => {
        await Promise.all([
            queryInterface.dropTable('users'),
        ]);
    }
};