const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async (req = request, res = response) => {
    const { correo, password } = req.body;
    try {
        // Verify if email exists
        const usuario = await Usuario.findOne({ correo });
        // if (!usuario) return res.status(400).json({ msg: 'Usuario / Password no son correctos' })
        // // If user is active
        // if (!usuario.estado) return res.status(400).json({ msg: 'Usuario no activo'});
        // // Verify password
        // const validPassword = bcryptjs.compareSync(password, usuario.password);
        // if (!validPassword) return res.status(400).json({ msg: 'Usuario / Password no son correctos'});
        // Generate JWT
        const token = await generarJWT(usuario.id);
        res.json({
            usuario,
            token
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

module.exports = {
    login
}