
const { Company } = require('../models')
const moment = require('moment');
const yup = require('yup');



const companySchema = yup.object().shape({
    name:yup.string().required('o titulo é obrigatório'),
    price:yup.number().positive().required('O preço é obrogatório'),
})

module.exports = class CompanyController {

    async getAllCompanys(request, response) {
        const companys = await Company.findAll()
    
        const formattedCompany = companys.map(companys => {
            return {
              ...companys.toJSON(),
              createdAt: moment(companys.createdAt).format('DD/MM/YYYY')
            };
          });
          
          response.json({ companys: formattedCompanys });
    }

    async findOneCompanys(request, response) {
        const company = await Company.findByPk(
            Number(request.params.id)
        )
    
        if (!company) {
            response.statusCode = 200
            response.json({ 
                error: "Empresa não encontrada!"
            })
            return
        }
        
        response.json(company.toJSON)
    }

    async createProducts(request, response) {
        const {name, price, description, img_url} = request.body

        const result = await productSchema.validate(request.body, { strict: true })
        console.log('validation result', result)

        const product = await Product.create({
            name,
            price,
            description,
            img_url,
        })
    
        response.json(product)
    }

    async updateProducts(request, response) {
        const name = request.body.name
        const price = request.body.price
        const img_url = request.body.img_url

        const result = await productSchema.validate(request.body, { strict: true })
        console.log('validation result', result)
        
        const updatedProducts = await Product.update({
            name: request.body.name,
            price: request.body.price,
            img_url: request.body.img_url
        }, {
            where: {
                id: Number(request.params.id)
            }
        })
    
        response.json(updatedProducts)
    }

    async patchProducts(request, response) {
        const {name, price, description, img_url} = request.body

         const result = await productSchema.validate(request.body, { strict: true })
         console.log('validation result', result)

         const updatedProduct = await Product.update(request.body, {
            where: {
                id: Number(request.params.id)
            }
        })
    
        response.json(updatedProduct)
    }

    async deleteProducts(request, response) {
        const product = await Product.findByPk(
            Number(request.params.id)
        )
    
        if (!product) {
            response.statusCode = 404
            response.json({ 
                error: "Produto não encontrado!"
            })
            return
        }
    
        await Product.destroy({
            where: {
                id: Number(request.params.id)
            }
        })
    
        response.statusCode = 204
        response.end()
    }

}