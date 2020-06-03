const DB = require('../database/models');
const OP = DB.Sequelize.Op;
// let bcryptjs = require ('bcryptjs');

module.exports = {
    index: function(req, res) {
        res.render ('buscadorUsuarios')
    },


    buscadorUsuarios: function (req, res){
    DB.Usuarios.findAll({
        where: {
            [OP.or]:{
                 email: {[OP.like]: '%'+ req.body.searchUsuarios + '%'},
                 nombre: {[OP.like]: '%'+ req.body.searchUsuarios + '%'}
            }}
       })
    .then (function (resultado) {
        res.send(resultado)
        //     res.render('resultadoUsuarios', {
        //         usuarios: resultado
        //     })  
        // })
    } )  }  

};
