module.exports= function(squelize, DataTypes) {
    const usuario = squelize.define(
        
        'Usuarios',
        { 
          nombre: DataTypes.STRING,
          email: DataTypes.STRING,
          password: DataTypes.STRING,
          edad: DataTypes.DECIMAL,
          fecha_de_nacimiento: DataTypes.DECIMAL, //aca node que va
        },

        {
            TableName:'usuario', 
            timestamps: false,
        }
    );
    return usuario;
}