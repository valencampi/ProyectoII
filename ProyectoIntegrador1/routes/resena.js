const express = require('express');
const router = express.Router();

const controller = require('../controllers/resenaController.js')


router.get('/', controller.index);

router.post('/resena/:idPeli', controller.resena);

/*Resena.associate = function (models) {
    resena.belongsTo(models.Usuario, {
     ps: 'usuario',
     foreingKey: 'usuario_id'
    })
} */

/*==usersControllers.js==
getReviews: function (req, res){
db.Resena.findAll({
 where:[
{usuario_id: req.params.id}],
 include: [
  {association: 'usuario'}
 ],
})
.then(resultado => {
 return res.send(resultado);
})
}
*/


module.exports = router;