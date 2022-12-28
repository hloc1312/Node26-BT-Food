const { AppError } = require("../helpers/error");
const { User, Restaurant, RateRes } = require("../models");

const createRate = async (resId, data) => {
  try {
    const user = await User.findByPk(data.userId);
    if (!user) {
      throw new AppError(400, "User not found");
    }

    const restaurant = await Restaurant.findByPk(resId);
    if (!restaurant) {
      throw new AppError(400, "Restaurant not found");
    }
    // const createRate = await RateRes.create(data);
    await restaurant.addUserRate(data.userId, {
      through: { amount: data.amount },
    });
    // console.log(restaurant.__proto__);
    return null;
  } catch (error) {
    // console.log("Error", error);
    throw error;
  }
};

const getRateByUser = async (userId) => {
  try {
    const user = User.findByPk(userId, {
      include: "restaurantRate",
    });
    if (!user) {
      throw new AppError(400, "User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRate,
  getRateByUser,
};
