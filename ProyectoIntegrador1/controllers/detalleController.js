const DB = require('../database/models');
const OP = DB.Sequelize.Op;
// const bcrypt = require('bcryptjs');
const fetch = require('node-fetch')

module.exports = {
    index: function (req, res){
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US")
            .then(function(respond) {
                return respond.json()
            })
          .then(function(data) {
             var arrayGeneros = data.genres
             res.render('', {arrayGeneros})
        })
       },

   detalle:  function(req, res) {
       //return res.send("el id de usuario es " + req.params.id)
       DB.Usuarios.findByPk(req.params.id, {
           include: [ "resenas"]
       })
       .then (function (usuario){
          // return res.send(usuario)
        res.render('detalle', {
            usuario: usuario , 
            // resena: resultado ,
        })
    
       })
      
    }
    
}


