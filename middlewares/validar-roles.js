const { request, response } = require("express")


const esAdminRol = (req = request, res = response, next) => {
    if (!req.usuario) return res.status(500).json({msg: 'Se quiere verificar el role sin validar el token primero'})
    const { rol, nombre } = req.usuario;
    if ( rol !== 'ADMIN_ROLE') return res.status(401).json({msg: `${nombre} no es administrador - No puede hacer esto`});
    
    next();
}

const tieneRol = (...roles) => {
    // We're returning the reference to this function which will be executed as a middleware in routes
    return (req, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin validar el token primero'
            });
        }
        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                smg: `El servicio requiere uno de estos roles ${roles}`
            });
        }
        next();
    }
}

module.exports = {
    esAdminRol,
    tieneRol
}