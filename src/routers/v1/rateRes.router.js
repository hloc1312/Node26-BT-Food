const express = require("express");
const rateRouter = express.Router();
const rateController = require("../../controllers/rateRes.controller");

rateRouter.post("/restaurant/:resId", rateController.createRate());
rateRouter.get("/user/:userId", rateController.getRateByUser());
module.exports = rateRouter;
