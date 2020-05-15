module.exports= function(squelize, DataTypes) {
    const usuario = squelize.define(
        
        'Usuario',
        { 
          nombre: DataType.STRING,
          email: DataType.STRING,
          pasword: DataType.STRING,
          edad: DataType.DECIMAl,
          Fecha_de_nacimiento: DataType.DECIAML, //aca node que va
        },

        {
            TableName:'usuario', 
            timestamps:false,
        }
    );
    return usuario;
}