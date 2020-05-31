module.exports= function(sequelize, dataTypes) {
    let alias = "Usuarios";

    let cols = {
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        edad: {
            type: dataTypes.DATE
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATE
        },
    }

    let config = {
        tableName:"usuario", 
        timestamps: false
     }

     let Usuario = sequelize.define(alias, cols, config);
    
     Usuario.associate = function(models){
        Usuario.hasMany(models.Resenas, {
            as: "resenas",
            foreignKey: "id_usuario"
        });
    }

     return Usuario;
 }