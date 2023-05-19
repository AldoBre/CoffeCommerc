module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
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
            type: Sequelize.STRING
        },
        birth_date: {
            type: Sequelize.DATE
        },
        password:{
            type: Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        level_user:{
            type: Sequelize.INTEGER
        },
        deletedAt:{
            type:Sequelize.DATE
        },
    },{
        paranoid: true
    })

    return user
}