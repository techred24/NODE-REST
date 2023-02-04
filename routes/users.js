const { Router } = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users')


const router = Router();


router.get('/', usersController.usuariosGet);
router.put('/:id', usersController.usuariosPut);
router.post('/', [
    check('correo', 'El correo no es válido').isEmail()
] ,usersController.usuariosPost);
router.patch('/', usersController.usuariosPatch);



module.exports = router;