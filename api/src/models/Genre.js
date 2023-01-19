const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Genre', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey: true,
      },
      genre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
  },{timestamps:false})}