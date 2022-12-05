const Router =require('express')
const router = new Router()
const authRouter =require('./authorization.router')
const userRouter =require('./users.router')
const dictionaryRouter =require('./dictionary.router')


router.use('/auth',authRouter) 
router.use('/users',userRouter)
router.use('/dictionary',dictionaryRouter)

//router.get('/users',authMiddleware,  userController.getUsers); 
//! добавить в сервисы и юзеры

module.exports=router

