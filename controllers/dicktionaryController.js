const ApiError = require("../exceptions/api-error");
const dictionaryService = require("../service/dictionaryService/dictionaryService");

class DicktionaryController {
  async addDictionary(req, res, next) {
    try {
      const { header } = req.body;
      const { dictionarys } = req.files;
      await dictionaryService.addDictionary(header, dictionarys);
      return res.json(header);
    } catch (error) {
      next(error);
    }
  }

  async removeDictionary(req, res, next) {
    try {
      const { header } = req.body;
      const removeHeader = await dictionaryService.removeDictionary(header);
      return res.json(removeHeader);
    } catch (error) {
      next(error);
    }
  }
  async updateDictionary(req, res, next) {
    try {
      const { oldHeader,newHeader } = req.body;
      const updateHeader=  await dictionaryService.updateHeaderDictionary( oldHeader,newHeader)
      return res.json(updateHeader)
    } catch (error) {
      next(error);
    }
  }

  async getDictionary(req, res, next){
    try {

      
      const dictionary =  await dictionaryService.getDictionary()
      return res.json(dictionary)

    } catch (error) {
      next(error);
    }

  }


  async getDictionaryDataById(req, res, next){
    try {

        const {id}= req.params
      const dictionary =  await dictionaryService.getDictionaryDataById(id)
      return res.json(dictionary)

    } catch (error) {
      next(error);
    }

  }
}

module.exports = new DicktionaryController();
