const { AppError } = require("../helpers/error");
const { Restaurant, User } = require("../models");

const createRestaurant = async (data) => {
  try {
    const user = await User.findByPk(data.userId);
    if (!user) {
      throw new AppError(400, "User not found");
    }
    const createRes = await Restaurant.create(data);
    return createRes;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createRestaurant,
};
