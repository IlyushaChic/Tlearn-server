const ApiError = require('../exceptions/api-error');

const Card =require('../models/dictionaryModals/card-model')
const CardCollection =require('../models/dictionaryModals/cardCollection-model')
const Translation =require('../models/dictionaryModals/cardTranslation-model')

const CUProgress= require('../models/usersModels/cardUserProgress-model')
const TUState= require('../models/usersModels/stateUser-model')
const TUser= require('../models/usersModels/users-model');


const usersService = require('../service/usersService/fakeData');





class UserController{

async getFakeData(req,res,next){

 
  try {

    
    const fakeData = await usersService.fakeDataGenerate()


    return res.json(fakeData);



    
  } catch (error) {
    console.log(error);
    
  }
}















async getUsers(req,res,next){
try {
  
} catch (error) {
  next(error)
}
}
async getUserOne(req,res,next){
try {
  
} catch (error) {
  next(error)
}
}






}


module.exports= new UserController()