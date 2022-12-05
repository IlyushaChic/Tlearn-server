const userController = require('../controllers/userController');

const Router = require('express').Router;
const userRouter = new Router();


userRouter.get('',userController.getUsers);

userRouter.get(`/id`,userController.getUserOne);

// userRouter.post('/login', userController.login);
// userRouter.post('/logout', userController.logout);
// rouuserRouterter.post('/activate', userController.activate);
// userRouter.get('/refresh', userController.refresh);
// userRouter.get('/users',authMiddleware,  userController.getUsers);



module.exports = userRouter