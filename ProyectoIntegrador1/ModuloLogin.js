let db = require('./database/models')
let bcryptjs = require ('bcryptjs');

let moduloLogin = {
    chequearUsuario: function (email) {
        return db.Usuarios.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.Usuarios.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.Usuarios.findOne({
            where:{
                email: email,
             // password: pass
            },
        })
        .then(results=>{
            if (results && bcryptjs.compareSync( pass,results.password)) {
            return results;
            } else {
            return null
            }
       })
    }
}


module.exports = moduloLogin;