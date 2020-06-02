const DB = require('../database/models');
const OP = DB.Sequelize.Op;


confirmuser: function (req, res){
  moduloLogin.validar(req.body.email, req.body.password)
  .then (resultado =>{
    if(resultado == undefined){
      res.redirect('/users/reviews //review es el formulario de logueo');
      } else{ 
        res.redirect('/users/reviews' + resultado.id)
      }
    })
}
 
getReviews: function (req,res) {
  db.Resena.findAll ({
   where:[
   {usuario-id: req.params.id}
 ],
 include: ["usuario"]
 })
 .then(resultado => {
   res.render('reviews', {resultado:resultado})
 })
 };

 
module.exports = {
    index: function (req, res){
      res.render('misResenas')
     },
}