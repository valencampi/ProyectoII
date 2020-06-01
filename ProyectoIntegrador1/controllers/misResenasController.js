const DB = require('../database/models');
const OP = DB.Sequelize.Op;

module.exports = {
    index: function (req, res){
      res.render('misResenas')
     },
}