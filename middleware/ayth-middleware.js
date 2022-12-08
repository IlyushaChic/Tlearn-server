const ApiError = require("../exceptions/api-error");
const tokenService = require("../service/authService/token-service");

module.exports = function (req, res, next) {
  try {
    const authorizationHeader = req.cookies
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError());
    }
    const accessToken = authorizationHeader.refreshToken
    if (!accessToken) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = tokenService.validateRefreshToken(accessToken);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.UnauthorizedError());
  }
};
