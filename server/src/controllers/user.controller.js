const { User, UserAudit } = require('../models')
const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken');
const yup = require('yup');
const { sign } = require("jsonwebtoken")
const configuration = require('../utils/configuration')
const bcrypt = require('bcrypt')

const userService = new UserService()

const userSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    age: yup.number().positive().integer().required('A idade é obrigatória'),
    cpf: yup.string().min(11, 'O CPF deve ter pelo menos 11 caracteres').required('O CPF é obrigatório'),
    phone_number: yup.string().min(2, 'O Telefone deve conter 11 digitos').required('O número de telefone é obrigatório'),
    birth_date: yup.string().required('A data de nascimento é obrigatória'),
    password: yup.string().min(8,'A senha deve conter no minimo 8 dígitos').required('A senha é obrigatória'),
    email: yup.string().email('O email deve ser válido').required('O email é obrigatório')
})

module.exports = class UserController {

    async  loginToken(request, response) {
        const token = request.body.token;
      
        try {
          if (!token) {
            throw new Error('Token não encontrado');
          }
      
          const decoded = jwt.verify(token, configuration().jwt.secret);
          return response.status(200).json(decoded);
        } catch (error) {
          return response.status(401).json({ error: 'Token inválido' });
        }
      }
    
    async loginUser(request, response){
        const {email, password} = request.body

        const user = await User.findOne({ where: { email } })

        if (!user) {
            return response.status(400).json({ error: 'Usuário não encontrado.' })
        }

        const match = await bcrypt.compare(password, user.password)

        if (!match) {
            return response.status(401).json({ error: 'Senha incorreta.' })
        }

        const { secret, expiresIn } = configuration().jwt

        const token = sign({ userId: String(user.id), userName: user.name, levelUser: user.level_user }, secret,{
            expiresIn
        })

        return response.json({ ...user, token})
    }

    async getAll(request, response) {
        const users = await User.findAll()

        response.json({
            users
        })
    }

    async findOne(request, response) {
        const user = await User.findByPk(
            Number(request.params.id)
        )

        if (!user) {
            response.statusCode = 404
            response.json({
                error: "Usuário não encontrado!"
            })
            return
        }

        response.json(user)
    }

    async create(request, response) {

        const { name, age, cpf, email, birth_date, password, phone_number, level_user } = request.body
        const isNameValid = userService.isNameValid(name)

        if (!isNameValid) {
            response.statusCode = 400
            response.json({
                errors: ["Nome de usuário inválido! O nome de usuário precisa ser um nome composto."]
            })
            return
        }

        try {
            const result = await userSchema.validate(request.body, { strict: true })

            const user = await User.create({
                name,
                age,
                cpf,
                phone_number,
                birth_date,
                password: await userService.hashPassword(password),
                email,
                level_user: 2
            })

            const userAudit = await UserAudit.create({
                name,
                age,
                cpf,
                phone_number,
                birth_date,
                password: await userService.hashPassword(password),
                email,
                userAlterId: 2,
                operation: "created"
            })


            
            response.json(user)
            
            return
        } catch (error) {
            console.log('on error', error)
            response.status(400).json({ errors: error.errors || [error.message] })
            return
        }

    }

    async update(request, response) {

        const { name, email, cpf, phone_number, birth_date, password, age } = request.body

        const isNameValid = userService.isNameValid(name)
        const isEmailValid = userService.isEmailValid(email)
        const isBirthValid = userService.isBirthValid(birth_date)

        if (!isNameValid) {
            response.statusCode = 400
            response.json({
                error: "Nome de usuário inválido! O nome de usuário precisa ser um nome composto."
            })
            return
        }

        if (!isBirthValid) {
            response.statusCode = 400
            response.json({
                error: "Formato de data inválida! O formato deve ser AAAA/MM/DD!!!"
            })
        }

        if (isNaN(age)) {
            response.statusCode = 400
            response.json({
                error: "Valor da idade precisa ser um número!"
            })
            return
        }

        const saltRounds = 10
        const userToUpdate = password ? {
            ...request.body,
            password: await userService.hashPassword(password)
        } : request.body

        try{
            const result = await userSchema.validate(request.body, { strict: true })
            const updatedUser = await User.update(request.body, {
                where: {
                    id: Number(request.params.id),
                }
            })

            const updateAuditUser = await UserAudit.update({
                originalId: Number(request.params.id),
                name,
                age,
                cpf,
                phone_number,
                birth_date,
                password: await userService.hashPassword(password),
                email,
                userAlterId: 2,
                operation: "update"
            },{
                where: {
                    id: Number(request.params.id),
                }
            })


    
            response.json(updatedUser)
        }catch(error) {
                console.log('on error', error)
                response.status(400).json({ error: error.message })
                return
        }

    }

    async patch(request, response) {

        const { name, email, cpf, phone_number, birth_date, password, age} = request.body
     

        const isNameValid = name
            ? userService.isNameValid(name)
            : true

        const isEmailValid = email
            ? userService.isNameValid(email)
            : true

            if (!isNameValid) {
                response.statusCode = 400
                response.json({
                    errors: ["Nome de usuário inválido! O nome de usuário precisa ser um nome composto."]
                })
                return
            }

        try{
            const result = await userSchema.validate(request.body, { strict: true })
            const updatedUser = await User.update(request.body, {
                where: {
                    id: Number(request.params.id)
                }
            })
           
    
            response.json(updatedUser)
        } catch (error) {
            console.log('on error', error)
            response.status(400).json({ errors: error.errors || [error.message] })
            return
        }
    }

    async delete(request, response) {
        const user = await User.findByPk(
            Number(request.params.id)
        )

        if (!user) {
            response.statusCode = 404
            response.json({
                error: "Usuário não encontrado!"
            })
            return
        }

        await user.destroy({
            paranoid: false
        })

        response.statusCode = 204
        response.end()
    }
}