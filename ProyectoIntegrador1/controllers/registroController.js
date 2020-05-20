const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function (req, res){
        res.render('registro')
       },
    
    registrado: (req, res) =>{
      res.send (req.body);
      
        DB.Usuarios.create(req.body)
        .then(function(index){
            return res.redirect('/Usuarios');
        })
        .catch(function(error){
            return res.send(error);
        }) 
        
    },
};