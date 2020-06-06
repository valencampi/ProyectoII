/* const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')

module.exports = {

    getReviews: function (req,res) {
        db.Resena.findAll ({
         where:[
         {usuario-id: req.params.id}
        ],
       include: ["usuario"]
        })
       .then(resultado => {
         res.render('reviews', {resultado:resultado})
       })
       },

     mostrarEditar: function (req, res){
        db.Resena.findOne({
            where: [
                {id:req.params.id}
            ]
        })
        .then (resultado =>{
            res.render('editarResena',{resultado:resultado})
        })
    } 
    
    //confirmarEditar: function





} */