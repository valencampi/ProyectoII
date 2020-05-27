module.exports= function(sequelize, DataTypes) {
    const resena = sequelize.define(

     'Resenas',
    {
          id_Pelicula: DataTypes.DECIMAL,
          id_usuario: DataTypes.DECIMAL,
          texto: DataTypes.STRING,
          puntaje: DataTypes.DECIMAL,
          fecha_de_creacion: DataTypes.DATE,
    },

    {
        TableName:'resena', 
        timestamps: false,
    }
);

    // let resenas = sequelize.define(alias,cols,config);
    
    // resenas.associate = function(models){
    //     resenas.belongsTo(models.usuarios, {
    //         as: 'usuario',
    //         foreignKey: 'id_usuario'
    //     });
    // }

    return resena;
}