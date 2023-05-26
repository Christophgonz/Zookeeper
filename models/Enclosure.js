const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Enclosure extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    available_food: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "diet",
        key: "id",
      },
    },
    habitat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "habitat",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "enclosure",
  }
);

module.exports = Enclosure;
