const authController = require('../controllers/authController');
const Router = require('express').Router;
const authRouter = new Router();


authRouter.post('/login',authController.login);
authRouter.post('/activate',authController.activate);
authRouter.get('/logout', authController.logout);
authRouter.get('/refresh', authController.refresh);


module.exports = authRouter 