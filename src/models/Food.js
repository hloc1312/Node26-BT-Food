const { DataTypes } = require("sequelize");

// const Order = sequelize.define(
//   "Order",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER,

//       field: "user_id",
//     },
//     totalPrice: {
//       type: DataTypes.FLOAT,

//       field: "total_price",
//     },
//     discount: {
//       type: DataTypes.INTEGER,
//     },
//     status: {
//       type: DataTypes.INTEGER,
//     },
//   },
//   { tableName: "orders", timestamps: false }
// );

// module.exports = Order;

module.exports = (sequelize) => {
  return sequelize.define(
    "Food",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      resId: {
        type: DataTypes.INTEGER,

        field: "restaurant_id",
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
    },
    { tableName: "foods", timestamps: false }
  );
};
