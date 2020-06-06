const express = require('express');
const router = express.Router();
const controller = require('../controllers/editarResenaController.js') 

router.get('/:id', controller.index);
router.get('/:id', controller.editar);
router.get('/:id', controller.update);
router.get('/:id', controller.asociacion);

module.exports = router;