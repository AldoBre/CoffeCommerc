const jwt = require('jsonwebtoken');
const configuration = require('../utils/configuration')

module.exports = function verifyUserToken(request, response, next){
    // recuperando o header Authorization enviado na requisição e verifica se existe

    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({error: 'É necessário informar o token'});
    }


    // dividimos o token em duas partes utilizando o " " e verificamos se tem 2 partes, se nao existir retorna erro
    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return response.status(401).json({error: 'Erro no formato do token'});
    }

    //aqui verificamos se existe a palavra bearer foi utilizada no header de autorização (schreme)
    // depois vemos se o token JWT foi enviado junto com o header (token)

    const [scheme, token] = parts;

    //esse if esta verificando se o valor da variavel scheme contém a palavra bearer no inicio ignorando maiusculas e minusculas
    if(!/^Bearer$/.test(scheme)){
        return response.status(401).json({error: 'Token mal formatado'});
    }
    //por fim verificamos se o token é valido utilizando o jwt.verify e se foi usado a chave secreta correta
    // que foi definida no auth.js
    jwt.verify(token, configuration().jwt.secret, (error, decoded) =>{
        if(error){
            return response.status(401).json({error: 'Token inválido'});
        }
        const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
        console.log('Tempo para expiração do token:', expiresIn + 's');

        if (expiresIn <= configuration().timeExpirationToken) {
            const newToken = jwt.sign({ userId: decoded.userId, userName: decoded.userName, levelUser: decoded.levelUser }, configuration().jwt.secret, { expiresIn: configuration().jwt.expiresIn });
            response.setHeader("Authorization", `Bearer ${newToken}`);

            console.log(newToken)
        }

        //decoded é oqe está sendo decodificado, que contem as informações do usuário, como o ID
        request.userId = decoded.id;

        if (expiresIn <= 0) {
            return response.status(498).json({ error: 'Token expirado' });
          }

        return next()
    })

}