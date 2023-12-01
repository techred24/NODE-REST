const jwt = require('jsonwebtoken');

const generarJWT = async (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' },
        (error, token) => {
            if (error) reject('No se pudo generar el token');
            resolve(token);
        })
    });
    // return jwt.sign({uid}, process.env.SECRETORPRIVATEKEY, { expiresIn: '4h' });
}

module.exports = {
    generarJWT
}