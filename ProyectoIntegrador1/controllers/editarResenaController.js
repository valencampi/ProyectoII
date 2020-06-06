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
         .then(resena => {
             //return res.send(resena)
              res.render('editarResena', {resena})
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

     editar: function(req, res){
         DB.Resenas.findByPk(req.params.id)

         .then(function(resenas){
             res.render('editarResena', {resenas: resenas});
         })
         .catch(function(error){
            return res.send(error);
        }) 
     },

     update: function(req, res){
         moduloLogin.validar(req.body.email, req.body.password)
         .then(function(resultado){
             if(resultado != null){
                 DB.Resenas.update({
                     texto: req.body.texto,
                     puntaje: req.body.puntaje,
                     id: req.params.id,
                     fecha_de_actualizacion: DB.sequelize.literal("CURRENT_DATE")
                 }, {
                    
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