const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function (req, res){
      DB.Resenas.findAll(
        {
            where: {
                id_Pelicula: req.query.id
            },
          include: {
            association: "usuarios"
          },
        }
    )
    .then(data =>{
         res.render('peliculas',{
          idPeli: req.query.id,
          resenas: data
        })
    })
   
    },

 }