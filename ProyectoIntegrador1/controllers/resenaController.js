const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {
    index: function (req, res){
        res.render('peliculas')
       },  

    //crear una resena
    resena: (req, res) =>{
        moduloLogin.validar(req.body.email, req.body.password)
    .then(results=> {
        if(results != null){
        DB.Resenas.create({
            texto: req.body.texto,
            puntaje: req.body.puntaje,
            id_usuario: results.id,
            id_Pelicula: req.params.idPeli

        });
        return res.redirect('/peliculas?id='+req.params.idPeli)
        }else{
            res.send('Contraseña incorrecta, vuelva para atras');
        } 
      })
    },         
};