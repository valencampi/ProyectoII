const express = require('express');
const router = express.Router();
const controller = require('../controllers/buscadorUsuariosController.js')

router.get('/', controller.index);
router.get('/resultados', controller.buscadorUsuarios);

module.exports = router;