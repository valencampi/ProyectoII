const express = require('express');
const router = express.Router();

const controller = require('../controllers/peliculasController')

router.get('/', controller.index);
router.get('/peliculas', controller.peliculas);

module.exports = router;
