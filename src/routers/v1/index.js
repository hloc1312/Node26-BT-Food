const express = require("express");
const v1 = express.Router();
const likeResRouter = require("./likeRes.router");
const rateRouter = require("./rateRes.router");
const { restaurantRouter } = require("./restaurant.router");
const userRouter = require("./user.router");

// path: api/v1
v1.use("/likeRes", likeResRouter);

// userRouter
v1.use("/users", userRouter);

// restaurant
v1.use("/restaurants", restaurantRouter);

// rate
v1.use("/rateRes", rateRouter);

module.exports = v1;
