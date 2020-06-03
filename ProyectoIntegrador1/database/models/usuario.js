module.exports= function(sequelize, dataTypes) {
    let alias = "Usuarios";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nombre: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATE
        },
    //    id_genero: {
    //         type: dataTypes.INTEGER
    //     },
    }

    let config = {
        tableName:"usuarios", 
        timestamps: false
     }

    let Usuario = sequelize.define(alias, cols, config);
    
     Usuario.associate = function(models){
        Usuario.hasMany(models.Resenas, {
            as: "resenas",
            foreignKey: "id_usuario",
        });
    }

     return Usuario;
 }