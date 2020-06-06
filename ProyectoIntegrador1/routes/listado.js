const express = require('express');
const router = express.Router();

const controller = require('../controllers/listadoController.js')

router.get('/:id', controller.index);

module.exports = router;