module.exports= function(sequelize, DataTypes) {
    const resena = sequelize.define(
        
        'Reseñas',
        { 
          
          email: DataTypes.STRING,
          pasword: DataTypes.STRING,
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