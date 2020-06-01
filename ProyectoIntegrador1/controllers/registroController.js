const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');

module.exports = {
    index: function (req, res){
        res.render('registro')
       },
    
    registrado: (req, res) =>{    
        req.body.password = bcrypt.hashSync(req.body.password, 10) 
        DB.Usuarios.create(req.body)
        .then(function(index){
            return res.redirect('/')
        })
        .catch(function(error){
            return res.send(error);
        }) 
        
    },

};