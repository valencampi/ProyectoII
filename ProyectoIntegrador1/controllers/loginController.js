const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const moduloLogin = require ('../ModuloLogin.js')




module.exports = {
    index: function (req, res){
      res.render('login')
     },
}


 //  loggeado: (req, res) => {   
    //   DB.usuarios.(req.body)
    //   .then(function(index){
    //     return res.redirect('/')
    //   })
    //   .catch(function(error){
    //     return res.send(error);
    // }) 
    // },