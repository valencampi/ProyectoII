const express = require('express');
const router = express.Router();

const controller = require('../controllers/listadoController.js')

router.get('/', controller.index);

module.exports = router;