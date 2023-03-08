const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');

const usuariosGet = async (req = request, res = response) => {
    const { limite = 5, desde = 0 } = req.query;
    const usuarios = await Usuario.find()
                            .skip(Number(desde))
                            .limit(Number(limite))
    res.json(usuarios)
};
const usuariosPost = async (req, res = response) => {

    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    });
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);
    try {
        // Guardar en BD
        await usuario.save();
        res.status(201).json({
            usuario
        });
    } catch (error) {
        res.status(500).json(error.message || error);
    }
};
const usuariosPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if (password) {
        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.status(400).json(usuario);
};
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API"
    });
};
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API"
    });
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}