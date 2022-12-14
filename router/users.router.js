const userController = require('../controllers/userController');
const Router = require('express').Router;
const userRouter = new Router();
const authMiddleware=require('../middleware/ayth-middleware')


// userRouter.get('/fakedata',userController.getFakeData)
userRouter.get('',userController.getUsers);
userRouter.get('/:id',userController.getUserOne);
userRouter.get('/:id/data',userController.getUserOneData);


module.exports = userRouter
