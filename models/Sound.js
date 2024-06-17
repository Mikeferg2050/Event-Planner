const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sounds extends Model {}
// sounds with incrementing id, allowing us to generate buttons with unique sound effects and color alterations
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
