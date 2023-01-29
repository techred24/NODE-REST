const { response } = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg: "get API"
    })
};
const usuariosPost = (req, res = response) => {
    res.status(201).json({
        msg: "post API"
    });
};
const usuariosPut = (req, res = response) => {
    res.status(400).json({
        msg: "put API"
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