const express = require('express');
const router = express.Router();
const controller = require('../controllers/editController.js') 

router.get('/:id', controller.index);
router.post('/:id', controller.editar);

module.exports = router;