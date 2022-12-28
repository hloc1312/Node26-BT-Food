const { DataTypes } = require("sequelize");
const sequelize = require(".");
const Food = require("./Food");

const FoodType = sequelize.define(
  "FoodType",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "type_id",
    },
    typeName: {
      type: DataTypes.STRING,
      field: "type_name",
    },
  },
  {
    tableName: "food_type",
    timestamps: false,
  }
);

Food.hasMany(FoodType, { foreignKey: "type_id" });
FoodType.belongsTo(Food, { foreignKey: "type_id" });

module.exports = FoodType;
