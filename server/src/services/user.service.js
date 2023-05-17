const bcrypt = require('bcrypt')

module.exports = class UserService {
    async hashPassword(plainTextPassword) {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)

        return hashedPassword
    }



    async comparePassword(plainTextPassword, hashedPassword) {
        const isPasswordCorrect = await bcrypt.compare(plainTextPassword, hashedPassword)

        return isPasswordCorrect
    }

    isNameValid(name) {
        if (!name) {
            return false
        }

        const separatedName = name.split(' ')
    
        if (!separatedName[1] || separatedName[1].length < 1) {
            return false
        }

        return true
    }

    isEmailValid(email){
        if(!email){
            return false
        }

        const innerEmail = email.includes('@')

        if(!innerEmail){
            console.log("EMAIL INVALIDO")
            return false
        }

        return true
    }

    isBirthValid(birth_date){
        if(!birth_date){
            return false
        }

        const innerBirthDate = birth_date.length === 10

        if(!innerBirthDate){
            return false
        }

        return true
    }
}