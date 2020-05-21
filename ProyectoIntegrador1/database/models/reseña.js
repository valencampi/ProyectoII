module.exports= function(squelize, DataTypes) {
    const usuario = squelize.define(
        
        'Reseñas',
        { 
          
          email: DataTypes.STRING,
          pasword: DataTypes.STRING,
          texto: DataTypes.STRING,
          puntaje: DataTypes.DECIMAL,
          fecha_de_creacion: DataTypes.DAYTIME
        },

        {
            TableName:'reseñas', 
            timestamps: false,
        }
    );
    return reseña;