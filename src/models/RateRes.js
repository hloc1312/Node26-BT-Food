const { DataTypes, Sequelize } = require("sequelize");
// const sequelize = require(".");
// const Restaurant = require("./Restaurant");
// const User = require("./User");

module.exports = (sequelize) => {
  return sequelize.define(
    "RateRes",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "user_id",
      },
      resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "res_id",
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      dateRate: {
        type: DataTypes.DATE,
        field: "date_rate",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "rate_res",
      timestamps: false,
    }
  );
};
// const RateRes = sequelize.define(
//   "RateRes",
//   {
//     userId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       field: "user_id",
//     },
//     resId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       field: "res_id",
//     },
//     amount: {
//       type: DataTypes.INTEGER,
//     },
//     dateRate: {
//       type: DataTypes.DATE,
//       field: "date_rate",
//     },
//   },
//   {
//     tableName: "rate_res",
//     timestamps: false,
//   }
// );
// User.belongsToMany(Restaurant, { through: RateRes });
// Restaurant.belongsToMany(User, { through: RateRes });
// module.exports = RateRes;
