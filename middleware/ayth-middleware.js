const ApiError = require("../exceptions/api-error");
const { generateTokens, validateAccessToken } = require("../service/authService/token-service");
const tokenService = require("../service/authService/token-service");

module.exports = function (req, res, next) {
  try {

    const token=req.headers.authorization
    const tooken= token.split(' ')[1]
    if (!tooken) {
      return next(ApiError.UnauthorizedError());
    }

    const validate=validateAccessToken(tooken)
    if (!validate) {
      return next(ApiError.UnauthorizedError());
    }
    

    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
