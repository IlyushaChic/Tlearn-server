const Router =require('express')
const router = new Router()
const authRouter =require('./authorization.router')
const userRouter =require('./users.router')
const dictionaryRouter =require('./dictionary.router')
const authMiddleware=require('../middleware/ayth-middleware')


router.use('/auth',authRouter)

router.use('/dictionary',authMiddleware,dictionaryRouter)
router.use('/users',authMiddleware,userRouter)


module.exports=router