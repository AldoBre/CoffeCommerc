'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'level_user', {
        type: Sequelize.INTEGER
    })
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users','level_user');
  }
};
