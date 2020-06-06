const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

let borrarResenaController = {
    borrarResena: function (req, res){
       DB.Resenas.findByPk(req.params.id)
       .then(function(resena){
          //return res.send(resena)
           res.render("borrarResena", {resena: resena})
        })
    },

    borrar: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(eliminar){
                 DB.Resenas.destroy({
                    where: {
                        id: req.params.id
                    }
                })
            })
    },

}

module.exports = borrarResenaController;