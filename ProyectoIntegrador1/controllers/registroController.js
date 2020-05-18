const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function (req, res){
        res.render('registro')
       },
    
    registrado: (req, res) => {
        DB.Usuarios.create(req.body)
        .then(function(index){
            return res.redirect('/')
        })
        .catch(function(error){
            return res.send(error);
        })
        
    },
};