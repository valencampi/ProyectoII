const express = require('express');
const router = express.Router();

const controller = require('../controllers/pelicularPorGeneroController')

router.get('/', controller.index);
router.get('/pelicularPorGenero', controller.pelicularPorGenero);

module.exports = router;
