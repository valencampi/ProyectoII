const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrarResenaController.js') 

router.get('/:id', controller.index);
router.post('/:id', controller.borrar);

module.exports = router;