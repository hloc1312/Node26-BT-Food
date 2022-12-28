const responseSuccess = (payload, ...rest) => {
  return {
    status: "Success",
    data: payload,
    ...rest,
  };
};

module.exports = { responseSuccess };
