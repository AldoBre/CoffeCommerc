const jwt = require('jsonwebtoken');
const configuration = require('../utils/configuration')


module.exports =  function refreshUserToken (request, response, next){
    const authHeader = request.headers.authorization;

    //retirando o bearer 
    const token = authHeader.split(' ')[1];

    //conferindo se realmente tem o token
    if(!authHeader){
        return response.status(401).json({error: 'É necessário informar o token'});
    }

    try{ 
        //decodificando o toke e verificando se o token é valido
        const decodedToken = jwt.verify(token, configuration().jwt.secret)

        //mostra no console a data de expiração
        console.log('Data de expiração do token:', new Date(decodedToken.exp * 1000))

        //calcula o tempo de expiração do token em milisegundos
        const expiresIn = decodedToken.exp - Math.floor(Date.now() / 1000);
        console.log('Tempo para expiração do token:', expiresIn + 's');

        // verfica se o tempo para expiração é menor que 60s
        if (expiresIn <= configuration().timeExpirationToken) {
            //se for, vamos gerar um novo token com o jwt.sign, onde ele recbe 3 parametros
            //payload (userId: decodedToken.userId) pega as informações que deseja codificar no token nesse caso o id
            //Secret - (authUser.jwt.secret)É uma string que garante que o token nao seja altrado por alguem que nao tenha a chave secreta
            //Options - (expiresIn: authUser.jwt.expiresIn) Contém informações adicionais sobre o tokem, como a duração dele
            const newToken = jwt.sign({ userId: decodedToken.userId, userName: decodedToken.userName, levelUser: decodedToken.levelUser }, configuration().jwt.secret, { expiresIn: configuration().jwt.expiresIn });
            response.setHeader("Authorization", `Bearer ${newToken}`);

            console.log(decodedToken.userId, decodedToken.userName,decodedToken.levelUser )
            console.log(newToken)
        }

        return next()   
    }catch(error){
        response.status(401).json({ error: 'Token de acesso inválido.' })
    }
}