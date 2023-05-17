module.exports = (sequelize, Sequelize) =>{
    const product = sequelize.define('products',{
        name:{
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.FLOAT
        },
        img_url:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        }
    })

    return product
}