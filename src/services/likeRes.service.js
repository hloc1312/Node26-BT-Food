const { AppError } = require("../helpers/error");
const { User, Restaurant } = require("../models");

const getLike = async () => {
  try {
    const likes = await User.findAll({
      include: "restaurantLike",
    });

    return likes;
  } catch (error) {
    throw error;
  }
};

const createLike = async (data) => {
  try {
    const user = await User.findByPk(data.userId);

    if (!user) {
      throw new AppError(400, "User is not exist");
    }

    const restaurant = await Restaurant.findByPk(data.resId);

    if (!restaurant) {
      throw new AppError(400, "Restaurant is not exist");
    }
    // const createLike = await LikeRes.create(data);
    // return createLike;
    console.log(user.__proto__);

    const hasLike = await restaurant.hasUserLike(data.userId);
    if (hasLike) {
      await restaurant.removeUserLike(data.userId);
    } else {
      await restaurant.addUserLike(data.userId);
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const getLikeByUser = async (userId) => {
  try {
    const user = await User.findOne({
      where: { userId: userId },
      include: {
        association: "restaurantLike",
        through: {
          attributes: [],
        },
      },
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
  getLike,
  createLike,
  getLikeByUser,
};
