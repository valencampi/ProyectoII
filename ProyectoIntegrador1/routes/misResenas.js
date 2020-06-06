const express = require('express');
const router = express.Router();

const controller = require('../controllers/misResenasController.js')

router.get('/', controller.index);

router.post('/listado', controller.confirmuser);

module.exports = router;