module.exports= function(sequelize, DataTypes) {
    const usuario = sequelize.define(
        
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

    // let usuarios = sequelize.define("usuarios",cols,config);
    
    // usuarios.associate = function(models){
    //     usuarios.hasMany(models.resenas,{
    //         as: 'resenas',
    //         foreignKey: 'id_usuario'
    //     });
    // }

    return usuario;
}