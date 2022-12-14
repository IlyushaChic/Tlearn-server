const usersService = require("../service/usersService/usersService");

class UserController {
  async getFakeData(req, res, next) {
    try {
      const fakeData = await usersService.fakeDataGenerate();
      return res.json(fakeData);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      const TlearnUser = await usersService.getAllUsers();
      return res.json(TlearnUser);
    } catch (error) {
      next(error);
    }
  }

  async getUserOne(req, res, next) {
    try {
      const { id } = req.params;
      const userByID = await usersService.getUserById(id);
      return res.json(userByID);
    } catch (error) {
      next(error);
    }
  }
  async getUserOneData (req, res, next) {
    try {
      const { id } = req.params;
      const userByIDData = await usersService.getUserDataById(id);
    return res.json(userByIDData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
