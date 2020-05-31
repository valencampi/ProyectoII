module.exports= function(sequelize, dataTypes) {
        let alias = "Resenas";

        let cols = {
            id:{
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            id_Pelicula: {
                type: dataTypes.INTEGER
            },  
            id_usuario: {
                type: dataTypes.INTEGER
            },
            texto: {
                type: dataTypes.STRING
            },
            puntaje: {
                type: dataTypes.DECIMAL
            },
            fecha_de_creacion: {
                type: dataTypes.DATE
            },
            fecha_de_actualizacion: {
                type: dataTypes.DATE
            },
         }

         let config = {
            tableName:"resenas", 
            timestamps: false
         }

    let Resena = sequelize.define(alias, cols, config);

    // Resena.associate = function(models){
    //     Resena.belongsTo(models.Usuarios, {
    //         as: "usuarios",
    //         foreignKey: "",
    //     });
    // }

    return Resena;
}