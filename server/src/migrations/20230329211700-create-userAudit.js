const { Schema } = require("yup")

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user_audits', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            email: {
                type: Sequelize.STRING
            },
            cpf: {
                type: Sequelize.STRING
            },
            phone_number: {
                type: Sequelize.DECIMAL
            },
            birth_date: {
                type: Sequelize.DATE
            },
            password: {
                type: Sequelize.STRING
            },


            userAlterId: {
                type: Sequelize.INTEGER,
                references:{
                    model:{
                        tableName: 'users',
                    },
                    key: 'id'
                },
                allowNull: false
            },


            operation: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    }
}