const dicktionaryController = require("../controllers/dicktionaryController");
const Router = require("express").Router;
const dictionaryRouter = new Router();
const authMiddleware=require('../middleware/ayth-middleware')

dictionaryRouter.post("/add", dicktionaryController.addDictionary);

dictionaryRouter.post("/remove", authMiddleware,dicktionaryController.removeDictionary);//удалять по названию таблицы
dictionaryRouter.patch("/update", authMiddleware,dicktionaryController.updateDictionary);//обновление  по названию таблицы ,изменить можно только название таблицы
dictionaryRouter.get('/get',authMiddleware,dicktionaryController.getDictionary)
dictionaryRouter.get('/get/:id',authMiddleware,dicktionaryController.getDictionaryDataById)

module.exports = dictionaryRouter;
