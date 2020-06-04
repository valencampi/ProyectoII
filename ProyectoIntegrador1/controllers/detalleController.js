
const DB = require('../database/models');
const OP = DB.Sequelize.Op;
// let bcryptjs = require ('bcryptjs');

module.exports = {
    index: function (req, res) {
        res.send('  ')
    },
   detalle:  function(req, res) {
       DB.Usuarios.findByPk(req.params.id)
       .then (function (usuario){
           DB.Resenas.findAll({
            where: {
                [OP.or]:{
                     id_usuario: {[OP.like]: '%'+ req.params.id+ '%'},
                }}})
        .then(function(resultado){
            res.render('detalle', {
                usuario: usuario , 
                resena: resultado ,
            })
        })
       })
      
    }
    
}


