const { Router } = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users');
const { validarCampos } = require('../middlewares/validar-campos');
const Role = require('../models/role');

const router = Router();


router.get('/', usersController.usuariosGet);
router.put('/:id', usersController.usuariosPut);
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(async (rol = '') => {
        const existeRol = await Role.findOne({rol});
        if (!existeRol) {
            throw new Error(`El rol ${rol} no está registrado en la BD`);
        }
    }),
    validarCampos
] ,usersController.usuariosPost);
router.patch('/', usersController.usuariosPatch);



module.exports = router;