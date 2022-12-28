const { DataTypes, Sequelize } = require("sequelize");
// // const sequelize = require(".");
// // const Restaurant = require("./Restaurant");
// // const User = require("./User");

module.exports = (sequelize) => {
  return sequelize.define(
    "LikeRes",
    {
      userId: {
        type: DataTypes.INTEGER,

        field: "user_id",
      },
      resId: {
        type: DataTypes.INTEGER,

        field: "res_id",
      },
      dateLike: {
        type: DataTypes.DATE,
        field: "date_like",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      tableName: "restaurant_likes",
      timestamps: false,
    }
  );
};

// const LikeRes = sequelize.define(
//   "LikeRes",
//   {
//     // userId: {
//     //   type: DataTypes.INTEGER,
//     //   primaryKey: true,
//     //   field: "user_id",
//     // },
//     // resId: {
//     //   type: DataTypes.INTEGER,
//     //   primaryKey: true,
//     //   field: "res_id",
//     // },
//     userId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: User,
//         key: "user_id",
//       },
//       field: "user_id",
//     },
//     resId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Restaurant,
//         key: "res_id",
//       },
//       field: "res_id",
//     },
//     dateLike: {
//       type: DataTypes.DATE,
//       field: "date_like",
//     },
//   },
//   {
//     tableName: "like_res",
//     timestamps: false,
//   }
// );

// User.belongsToMany(Restaurant, { through: "like_res", foreignKey: "user_id" });
// Restaurant.belongsToMany(User, { through: "like_res", foreignKey: "res_id" });
// // User.belongsToMany(Restaurant, { through: LikeRes });
// // Restaurant.belongsToMany(User, { through: LikeRes });

// module.exports = LikeRes;
