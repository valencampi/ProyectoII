const express = require('express');
const router = express.Router();

const controller = require('../controllers/generosController')

router.get('/', controller.index);
router.get('/generos', controller.generos);

module.exports = router;
