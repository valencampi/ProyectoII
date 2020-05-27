const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {
    index: function (req, res){
        
       },  

    //crear una resena
    resena: (req, res) =>{
        moduloLogin.validar(req.body.email, req.body.password)
    .then(resultado=> {
        DB.Resenas.create({
            texto: req.body.texto,
            puntaje: req.body.puntaje,
            id_usuario: resultado.id,
            id_Pelicula: req.params.idPeli

        })
        .then(function(index){
            return res.redirect('/peliculas?id='+req.params.idPeli)
        })
        .catch(function(error){
            return res.send(error);
        }) 

    })
    },         
};