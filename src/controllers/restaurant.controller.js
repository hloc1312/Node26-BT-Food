const { responseSuccess } = require("../helpers/response");
const restaurantService = require("../services/restaurant.service");

const createRestaurant = () => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const createRestaurant = await restaurantService.createRestaurant(data);
      res.status(200).json(responseSuccess(createRestaurant));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  createRestaurant,
};
