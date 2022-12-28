const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("BT_food", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection sequelize");
  } catch (error) {
    console.log("error sequelize", error);
  }
})();

// Khởi tạo model
const User = require("./User")(sequelize);
const Restaurant = require("./Restaurant")(sequelize);
const LikeRes = require("./LikeRes")(sequelize);
const RateRes = require("./RateRes")(sequelize);
const Order = require("./Order")(sequelize);
const OrderDetail = require("./OrderDetail")(sequelize);
const Food = require("./Food")(sequelize);

// Relationship

// User 1 - n Restaurant
User.hasMany(Restaurant, { as: "restaurants", foreignKey: "userId" });
Restaurant.belongsTo(User, { as: "owner", foreignKey: "userId" });

// User - Like - Restaurant
// User 1 - n RestaurantLikes
User.belongsToMany(Restaurant, {
  through: LikeRes,
  as: "restaurantLike",
  foreignKey: "userId",
});

// Restaurant 1 - n RestaurantLikes

Restaurant.belongsToMany(User, {
  through: LikeRes,
  as: "userLike",
  foreignKey: "resId",
});

// User - Rate - Restaurant
User.belongsToMany(Restaurant, {
  through: RateRes,
  as: "restaurantRate",
  foreignKey: "userId",
});
Restaurant.belongsToMany(User, {
  through: RateRes,
  as: "userRate",
  foreignKey: "resId",
});

//  User 1 - n Order
User.hasMany(Order, { as: "order", foreignKey: "userId" });
Order.belongsTo(User, { as: "userOrder", foreignKey: "userId" });

//  Order 1 - n OrderDetail
Order.hasMany(OrderDetail, { as: "orderDetail", foreignKey: "orderId" });
OrderDetail.belongsTo(Order, { as: "orderWithDetail", foreignKey: "orderId" });

//  Restaurant 1 - n OrderDetail
Restaurant.hasMany(Food, { as: "food", foreignKey: "resId" });
Food.belongsTo(Restaurant, { as: "restaurantFood", foreignKey: "resId" });

// Food 1 - 1 Orderdetail
Food.hasOne(OrderDetail, {
  foreignKey: "foodId",
  as: "orderDetailFood",
});
OrderDetail.belongsTo(Food, {
  foreignKey: "foodId",
});

module.exports = {
  sequelize,
  User,
  Restaurant,
  RateRes,
  Order,
  OrderDetail,
  Food,
};
