const jwt = require('jsonwebtoken');

const secret = "millavesecreta";
const payload = {
    nombre: 'Juan',
    id: 123456,
    perfil: 'administrador'
}

const token = jwt.sign(payload,secret,{expiresIn:'1m'});
console.log(token);

//decodificar token 
const decode = jwt.verify(token,secret);
console.log(decode);

