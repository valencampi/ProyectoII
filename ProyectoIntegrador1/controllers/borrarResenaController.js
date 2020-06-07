const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {
    index: function (req, res){
        DB.Resenas.findOne( {
            where: [
                {id: req.params.id},
            ]
        })
       .then(function(resena){
          //return res.send(resena)
           res.render("borrarResena", {resena})
        })
        .catch(function(error){
            return res.send(error);
        }) 
    },

    asociacion: function (req, res){
        DB.Resenas.findAll(
          {
              where: {
                  id: req.query.id
              },
            include: {
              association: "usuarios"
            },
          }
      )
    },

    borrar: function(req, res){
        DB.Resenas.findByPk(req.params.id)

        .then(function(resenas){
            res.render('borrarResena', {resenas: resenas});
        })
        .catch(function(error){
           return res.send(error);
       }) 
    },

    borrar: function(req,res){
        moduloLogin.validar(req.body.email, req.body.password)
        .then(function(eliminar){
            if(eliminar != null){
                 DB.Resenas.destroy({
                    where: {
                        id: req.params.id
                    }
                });
                  res.redirect('/');
            }else{
                res.send("error")
            }
        })
    },

}
