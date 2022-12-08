const dicktionaryController = require("../controllers/dicktionaryController");
const Router = require("express").Router;
const dictionaryRouter = new Router();


dictionaryRouter.post("/add", dicktionaryController.addDictionary);
dictionaryRouter.delete("/remove", dicktionaryController.removeDictionary);//удалять по названию таблицы
dictionaryRouter.patch("/update", dicktionaryController.updateDictionary);//обновление  по названию таблицы ,изменить можно только название таблицы

module.exports = dictionaryRouter;
