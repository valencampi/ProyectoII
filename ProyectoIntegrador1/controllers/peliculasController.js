const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function (req, res){
      DB.Resenas.findAll(
        {
            where: {
                id_Pelicula: req.query.id
            }
        }
    )
    .then(data =>{
        res.render('peliculas',{
          idPeli: req.query.id,
          resenas: data
        })
    })
   
    },

    usuario: function (req, res){
      DB.usuarios.findByPK(req.params.id, {
        include: [{association: "usuario"}, {association: "resena"}]
      })
    }
   
 }

 

 