module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.DECIMAL
      },
      email: {
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companys');
  }
};