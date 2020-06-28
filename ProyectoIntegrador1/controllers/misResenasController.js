const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {
    index: function (req, res){
       res.render('misResenas')
     },
     
    mostrarEditar: function(req, res) {
      db.Resena.findOne({
        where:[
          {id: req.params.id}
    
        ]
      })
    },
     

     confirmuser: function (req, res){
      moduloLogin.validar(req.body.email, req.body.password)
      .then (results =>{
        if(results != null){
          res.redirect('/listado/' + results.id)
        
        } else{
            res.send('Contraseña incorrecta, vuelva para atras');
        }
        })
    },
     
     
}