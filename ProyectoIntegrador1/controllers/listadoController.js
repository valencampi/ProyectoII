const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {
    index: function (req, res){
      DB.Usuarios.findByPk(req.params.id, {
        include: [
          {association: 'resenas'}
      ]
      })
        .then(usuario => {
         // return res.send(usuario)
          res.render('listado', {usuario})
        })
      },

      
     /* mostrarEditar: function (req, res){
       DB.Resena.findOne({
         where:[
           {id: req.params.id}
         ]
       })
       .then(resultado => {
         res.render('editarResena',{resultado: resultado})
       })
     } */
}
