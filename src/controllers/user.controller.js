const { responseSuccess } = require("../helpers/response");
const userService = require("../services/user.service");
const createUser = () => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const createUser = await userService.createUser(data);
      res.status(200).json(responseSuccess(createUser));
    } catch (error) {
      next(error);
    }
  };
};

const userOrder = () => {
  return async (req, res, next) => {
    try {
      // const { userId } = req.params;
      const payload = req.body;
      const oreder = await userService.userOrder(payload);
      res.status(200).json(responseSuccess(oreder));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  createUser,
  userOrder,
};
