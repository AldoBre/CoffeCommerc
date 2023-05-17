const Sequelize = require('sequelize')
const User = require('./user.model')
const Product = require('./product.model')
const UserAudit = require('./userAudit.model')
const configuration = require('../utils/configuration')

const sequelize = new Sequelize(configuration().database)

const database = {
    Sequelize,
    sequelize,
    User: User(sequelize, Sequelize),
    Product: Product(sequelize, Sequelize),
    UserAudit: UserAudit(sequelize, Sequelize)
}

module.exports = database