module.exports = (sequelize, Sequelize) => {
    const company = sequelize.define('company', {
        corporate_name: {
            type: Sequelize.STRING
        },
        cnpj:{
            type: Sequelize.STRING
        },
        phone_number:{
            type: Sequelize.STRING
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

    return company
}