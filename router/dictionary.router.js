const dicktionaryController = require('../controllers/dicktionaryController');

const Router = require('express').Router;
const dictionaryRouter = new Router();


dictionaryRouter.get('',(req,res)=>{
  res.send('dictionaryRouter')});


  dictionaryRouter.post('/add',dicktionaryController.addDictionary);
  dictionaryRouter.delete('/remove',dicktionaryController.removeDictionary);
  dictionaryRouter.post('/update',dicktionaryController.updateDictionary);
  





module.exports = dictionaryRouter