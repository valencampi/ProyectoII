
const DB = require('../database/models');
const OP = DB.Sequelize.Op;
// let bcryptjs = require ('bcryptjs');

module.exports = {
    index: function (req, res) {
        res.send('  ')
    },
   detalle:  function(req, res) {
       //return res.send("el id de usuario es " + req.params.id)
       DB.Usuarios.findByPk(req.params.id, {
           include: [ "resenas"]
       })
       .then (function (usuario){
          // return res.send(usuario)
        res.render('detalle', {
            usuario: usuario , 
            // resena: resultado ,
        })
    
       })
      
    }
    
}


