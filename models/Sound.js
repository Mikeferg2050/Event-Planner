const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sound extends Model {}

Sound.init(
  {
    title: {
      type: DataTypes.STRING
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

module.exports = Sound;
