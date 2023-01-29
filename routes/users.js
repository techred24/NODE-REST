const { Router } = require('express');
const usersController = require('../controllers/users')


const router = Router();


router.get('/', usersController.usuariosGet);
router.put('/:id', usersController.usuariosPut);
router.post('/', usersController.usuariosPost);
router.patch('/', usersController.usuariosPatch);



module.exports = router;