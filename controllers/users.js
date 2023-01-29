const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: "get API",
            query
    })
};
const usuariosPost = (req, res = response) => {
    res.status(201).json({
        msg: "post API",
        body: req.body
    });
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