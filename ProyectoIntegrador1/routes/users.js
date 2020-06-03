var express = require('express');
var router = express.Router();
var usersController = require('../controllers/misResenasController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/reviews', usersController.confirmuser);
//router.get('/reviews/:id', usersController.getReviews); //listado de mis resñas 
router.get('/reviews/editar/:id', usersController.mostrarEditar);



module.exports = router;
