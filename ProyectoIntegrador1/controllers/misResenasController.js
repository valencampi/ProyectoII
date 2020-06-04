const DB = require('../database/models');
const OP = DB.Sequelize.Op;





 
module.exports = {
    index: function (req, res){
      res.render('misResenas')
     },
     
     mostrarEditar: function(req, res) {
      db.Resena.findOne({
        where:[
          {id: req.params.id}
    
        ]
      })
      .then(resultado =>{
        res.render('EditarReseña', { resultado });
    
      })
    },

    /*getReviews: function (req,res) {
      db.Resena.findAll ({
       where:[
       {usuario-id: req.params.id}
      ],
     include: ["usuario"]
      })
     .then(resultado => {
       res.render('reviews', {resultado:resultado})
     })
     },*/

       

     confirmuser: function (req, res){
      moduloLogin.validar(req.body.email, req.body.password)
      .then (resultado =>{
        if(resultado == undefined){
          res.redirect('/users/reviews //review es el formulario de logueo');
          } else{ 
            res.redirect('/users/reviews' + resultado.id)
          }
        })
    }
     
    
    /*validar: function (email, pass){
      return db.Usuario.findOne({
     where:{ email:email,},
     })
     .then(results =>{
        if(results != null){
          let chequeo = bcrypt.compareSync(pass,results.password);
          if(chequeo){ 
          return results;
          } else{
              return undefined;
                 }
        }else { return undefined }
      })*/
   
     
}

