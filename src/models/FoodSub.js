const { DataTypes } = require("sequelize");
const sequelize = require(".");
const Food = require("./Food");

const FoodSub = sequelize.define(
  "FoodSub",
  {
    subId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "sub_id",
    },
    subName: {
      type: DataTypes.STRING,
      field: "sub_name",
    },
    subPrice: {
      type: DataTypes.FLOAT,
      field: "sub_price",
    },
    foodId: {
      type: DataTypes.INTEGER,
      field: "food_id",
    },
  },
  {
    tableName: "sub_food",
    timestamps: false,
  }
);

Food.hasMany(FoodSub, { foreignKey: "food_id" });
FoodSub.belongsTo(Food, { foreignKey: "food_id" });

module.exports = FoodSub;
