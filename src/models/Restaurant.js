const { DataTypes } = require("sequelize");
// const sequelize = require(".");

module.exports = (sequelize) => {
  return sequelize.define(
    "Restaurant",
    {
      resId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "res_id",
      },
      resName: {
        type: DataTypes.STRING,
        field: "res_name",
      },
      image: {
        type: DataTypes.STRING,
        field: "image",
      },
      desc: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
      },
    },
    {
      tableName: "restaurants",
      timestamps: false,
    }
  );
};

// const Restaurant = sequelize.define(
//   "Restaurant",
//   {
//     resId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       field: "res_id",
//     },
//     resName: {
//       type: DataTypes.STRING,
//       field: "res_name",
//     },
//     image: {
//       type: DataTypes.STRING,
//       field: "image",
//     },
//     desc: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     tableName: "restaurants",
//     timestamps: false,
//   }
// );

// module.exports = Restaurant;
