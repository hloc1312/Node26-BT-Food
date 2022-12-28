const express = require("express");

const likeResRouter = express.Router();
const likeResController = require("../../controllers/likeRes.controller");

// get lIke
likeResRouter.get("", likeResController.getLike());

// create like
likeResRouter.post("", likeResController.createLike());

// get like by User
likeResRouter.get("/user/:userId", likeResController.getLikeByUser());

module.exports = likeResRouter;
