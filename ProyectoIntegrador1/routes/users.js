var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/reviews', usersController.confirmusers);
router.get('/reviews/:id', usersController.getReviews); //listado de mis resñas 

module.exports = router;
