const express = require('express');
const router = express.Router();

const controller = require('../controllers/resenaController.js')

router.get('/', controller.index);

router.post('/resena/:idPeli', controller.resena);

module.exports = router;