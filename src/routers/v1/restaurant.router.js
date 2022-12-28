const express = require("express");
const restaurantController = require("../../controllers/restaurant.controller");
const restaurantRouter = express.Router();

restaurantRouter.post("", restaurantController.createRestaurant());

module.exports = {
  restaurantRouter,
};
