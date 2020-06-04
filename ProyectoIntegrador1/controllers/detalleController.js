
const DB = require('../database/models');
const OP = DB.Sequelize.Op;
// let bcryptjs = require ('bcryptjs');

module.exports = {
    index: function (req, res) {
        res.send('tumadre')
    },
   detalle:  function(req, res) {
       DB.Usuarios.findByPk(5)
       .then(function(usuario){
           res.send(usuario)
       })
    }
    
}