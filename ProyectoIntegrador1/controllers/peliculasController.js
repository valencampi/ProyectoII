module.exports = {
    index: function (req, res){
      res.render('peliculas',{
        idPeli: req.query.id
      })
     }
 }