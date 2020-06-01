const express = require('express');
const router = express.Router();

const controller = require('../controllers/misResenasController.js')

router.get('/', controller.index);

module.exports = router;