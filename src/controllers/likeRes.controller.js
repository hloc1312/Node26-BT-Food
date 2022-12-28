const { responseSuccess } = require("../helpers/response");
const likeResService = require("../services/likeRes.service");

const getLike = () => {
  return async (req, res, next) => {
    try {
      const likes = await likeResService.getLike();
      res.status(200).json(responseSuccess(likes));
    } catch (error) {
      // res.status(400).json({ error: error.message });
      next(error);
    }
  };
};

const createLike = () => {
  return async (req, res) => {
    try {
      const like = req.body;
      const createLike = await likeResService.createLike(like);
      res.status(200).json(responseSuccess("OK"));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
};

const getLikeByUser = () => {
  return async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await likeResService.getLikeByUser(userId);
      res.status(200).json(responseSuccess(user));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  createLike,
  getLike,
  getLikeByUser,
};
