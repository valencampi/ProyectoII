module.exports= function(sequelize, DataTypes) {
    const resena = sequelize.define(
        
        'Resenas',
        { 
          id_Pelicula: DataTypes.DECIMAL,
          id_usuario: DataTypes.DECIMAL,
          texto: DataTypes.STRING,
          puntaje: DataTypes.DECIMAL,
          fecha_de_creacion: DataTypes.DATE
        },

        {
            TableName:'reseñas', 
            timestamps: false,
        }
    );
    return resena;
}