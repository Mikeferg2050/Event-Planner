const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sounds extends Model {}

Sounds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mp3: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,

    timestamps: false,
    underscored: true,
    modelName: 'sound'
  }
);

module.exports = Sounds;
