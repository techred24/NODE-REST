const jtw = require('jsonwebtoken');
const { request, response } = require('express');

const validarJWT = ( req, res, next ) => {
    // console.log(req.header('x-token'));
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }
    try {
        const { uid } = jtw.verify(token, process.env.SECRETORPRIVATEKEY);
        req.uid = uid;
        next();
    } catch(error) {
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}

module.exports = {
    validarJWT
}