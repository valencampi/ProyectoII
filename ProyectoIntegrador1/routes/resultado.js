const express = require('express');
const router = express.Router();
const controller = require('../controllers/resultadoController')

router.get('/', controller.index);

module.exports = router;