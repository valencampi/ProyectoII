const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');
const node = require('node-fetch')

module.exports = {
    index: function (req, res){
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=6e11caa7480bb2cb18a5bff7908d4f53&language=en-US")
            .then(function(respond) {
                return respond.json()
            })
          .then(function(data) {
             var arrayGeneros = data.genres
             res.render('registro', {arrayGeneros})
        })
       },
    
    registrado: (req, res) =>{    
        req.body.password = bcrypt.hashSync(req.body.password, 10) 
        // return res.send(req.body)
        DB.Usuarios.create(req.body)
        .then(function(index){
            return res.redirect('/')
        })
        .catch(function(error){
            return res.send(error);
        }) 
        
    },

};