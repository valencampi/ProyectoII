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

     editar:  function(req, res){
         moduloLogin.validar(req.body.email, req.body.password)
            .then(resultado => {
                if (resultado != undefined) {
                    DB.Resenas.update({
                        texto: req.body.texto,
                        puntaje: req.body.puntaje
                    },{
                        where: {
                            id: req.params.id,
                        }
                    })
                    .then(()=>{
                        res.redirect('/listado/'+resultado.id)
                    })
                }
             })
     }
     
}
