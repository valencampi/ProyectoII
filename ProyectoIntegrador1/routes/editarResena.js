// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/editarResenaController.js') 

// router.get('/:id', controller.index);
// router.get('/:id', controller.editar);
// router.get('/:id', controller.update);
// router.get('/:id', controller.asociacion);

// module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controllers/editController.js') 

router.get('/:id', controller.index);
router.post('/:id', controller.editar);


module.exports = router;