const userController = require('../controllers/userController');
const Router = require('express').Router;
const userRouter = new Router();


userRouter.get('/fakedata',userController.getFakeData)

userRouter.get('',userController.getUsers);
userRouter.get('/:id',userController.getUserOne);



module.exports = userRouter
