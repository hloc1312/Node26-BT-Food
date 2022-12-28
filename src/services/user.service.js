const { AppError } = require("../helpers/error");
const { User } = require("../models");

const createUser = async (data) => {
  try {
    const user = await User.findOne({ where: { email: data.email } });

    if (user) {
      throw new AppError(400, "Email exist");
    }

    const createUser = await User.create(data);

    return createUser;
  } catch (error) {
    throw error;
  }
};

const userOrder = async (data) => {
  try {
    const user = await User.findByPk(data.userId);
    if (!user) {
      throw new AppError(400, "User not found");
    }
    console.log(user.__proto__);
    // const order = await user.addOrder(1);
    console.log(
      await user.createOrder({
        totalPrice: data.totalPrice,
        discount: data.discount,
        status: data.status,
      })
    );
    // return order;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createUser,
  userOrder,
};
