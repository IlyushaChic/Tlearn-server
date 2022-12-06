const Router =require('express')
const router = new Router()
const authRouter =require('./authorization.router')
const userRouter =require('./users.router')
const dictionaryRouter =require('./dictionary.router')


router.use('/auth',authRouter) //! готово
router.use('/dictionary',dictionaryRouter)

router.use('/users',userRouter)// фейковые данные тут лежат 


//router.get('/users',authMiddleware,  userController.getUsers); 
//! добавить в сервисы и юзеры после того как все напишу и потом проверить 

module.exports=router

