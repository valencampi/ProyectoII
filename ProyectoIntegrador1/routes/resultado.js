const express = require('express');
const router = express.Router();

const controller = require('../controllers/resultadoController')

router.get('/', controller.index);
router.get('/resultado', controller.resultado);

module.exports = router;
