module.exports= function(squelize, DataTypes) {
    const usuario = squelize.define(
        
        'Usuarios',
        { 
          nombre: DataTypes.STRING,
          email: DataTypes.STRING,
          pasword: DataTypes.STRING,
          edad: DataTypes.DECIMAl,
          Fecha_de_nacimiento: DataTypes.DECIAML, //aca node que va
        },

        {
            TableName:'usuario', 
            timestamps: false,
        }
    );
    return usuario;
}