
module.exports = (sequelize, Sequelize) =>{
    const userAudit = sequelize.define('user_audit',{
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        cpf:{
            type: Sequelize.STRING
        },
        phone_number:{
            type: Sequelize.DECIMAL
        },
        birth_date: {
            type: Sequelize.DATE
        },
        password:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        userAlterId:{
            type: Sequelize.INTEGER
        },
        operation:{
            type: Sequelize.STRING
        },   
    })

    return userAudit
}