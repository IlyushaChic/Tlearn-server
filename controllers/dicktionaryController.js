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
}

module.exports = new DicktionaryController();
