const { responseSuccess } = require("../helpers/response");
const rateService = require("../services/rateRes.service");

const createRate = () => {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const { resId } = req.params;
      const rate = await rateService.createRate(resId, data);
      res.status(200).json({ data: "Ok" });
    } catch (error) {
      next(error);
    }
  };
};

const getRateByUser = () => {
  return async (req, res, next) => {
    try {
      const { userId } = req.params;
      const user = await rateService.getRateByUser(userId);
      res.status(200).json(responseSuccess(user));
    } catch (error) {
      next(error);
    }
  };
};

module.exports = {
  createRate,
  getRateByUser,
};
