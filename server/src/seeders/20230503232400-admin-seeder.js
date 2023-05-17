const bcrypt = require('bcrypt');
const hashPassword = bcrypt.hashSync('123', 10);
const db = require('../models/index')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user = await db.User.create({
      name: "Admin",
      age: 20,
      cpf: "12345667910",
      birth_date: "2023-05-03",
      phone_number: "123456789",
      email: "admin@email.com",
      password: hashPassword,
      level_user: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    console.log('****** Seed executado com sucesso ******!');

    return user;
  },

  down: async (queryInterface, Sequelize) => {
    await db.User.destroy({ where: { name: "Admin" } });
  }
};
