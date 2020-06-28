const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function(req, res) {
        res.render ('buscadorUsuarios')
    },


    buscadorUsuarios: function (req, res){
    DB.Usuarios.findAll({
        where: {
            [OP.or]:{
                 email: {[OP.like]: '%'+ req.query.searchUsuario + '%'},
                 nombre: {[OP.like]: '%'+ req.query.searchUsuario + '%'}
            }}
       })
    .then (function (resultado) {
            res.render('resultadoUsuarios', {
                usuarios: resultado
            })  
        })
 }  

};