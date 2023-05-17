'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'cpf', {
        type: Sequelize.STRING
    })
    await queryInterface.addColumn('users', 'phone_number', {
        type: Sequelize.DECIMAL
    })
    await queryInterface.addColumn('users', 'birth_date', {
        type: Sequelize.DATE
    })
    await queryInterface.addColumn('users', 'password', {
        type: Sequelize.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','cpf');
    await queryInterface.removeColumn('users','phone_number');
    await queryInterface.removeColumn('users','birth_date');
    await queryInterface.removeColumn('users','password');
  }
};
