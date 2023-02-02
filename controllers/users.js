const { response, request } = require('express');
const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: "get API",
            query
    })
};
const usuariosPost = async (req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    try {
        await usuario.save();
        res.status(201).json({
            usuario
        });
    } catch (error) {
        res.status(500).json(error.message || error);
    }
};
const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.status(400).json({
        msg: "put API",
        id
    });
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