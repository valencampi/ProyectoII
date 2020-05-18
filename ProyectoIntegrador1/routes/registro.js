const express = require('express');
const router = express.Router();

const controller = require('../controllers/registroController.js')

router.get('/', controller.index);

router.post('/registrado', controller.registrado)

module.exports = router;