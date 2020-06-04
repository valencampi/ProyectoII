const express = require('express');
const router = express.Router();

const controller = require('../controllers/detalleController.js')


router.get ('/', controller.index)
router.get ('/:id', controller.detalle)

module.exports = router