const jtw = require('jsonwebtoken');
const { request, response } = require('express');
const Usuario = require('../models/usuario');

const validarJWT = async ( req, res, next ) => {
    // console.log(req.header('x-token'));
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        })
    }
    try {
        const { uid } = jtw.verify(token, process.env.SECRETORPRIVATEKEY);
        const usuario =  req.usuario = await Usuario.findById(uid);
        if(!usuario) return res.status(401).json({msg: 'Token no válido - usuario no existe DB'})
        if(!usuario.estado) return res.status(401).json({msg: 'Token no válido - usuario con estado: false'})
        req.usuario = usuario;
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