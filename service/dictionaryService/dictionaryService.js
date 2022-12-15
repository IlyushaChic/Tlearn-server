const csv = require("csv-parser");
const fs = require("fs");
const { Card } = require("../../models/dictionaryModals/card-model");
const {
  CardCollection,
} = require("../../models/dictionaryModals/cardCollection-model");
const {
  CardTranslation,
} = require("../../models/dictionaryModals/cardTranslation-model");

const uuid = require("uuid");
const path = require("path");

class DictionaryService {
  async addDictionary(header, dictionarys) {
    const NOUN = "NOUN";
    const PRONOUN = "PRONOUN";
    const VERB = "VERB";
    const ADJECTIVE = "ADJECTIVE";
    const ADVERB = "ADVERB";
    const PREPOSITION = "PREPOSITION";
    const CONJUNCTION = "CONJUNCTION";
    const INTERJECTION = "INTERJECTION";

    const results1 = [];

    const wordType = (word) => {
      switch (word) {
        case NOUN:
          word = 0;
          return word;
        case PRONOUN:
          word = 1;
          return word;
        case VERB:
          word = 2;
          return word;
        case ADJECTIVE:
          word = 3;
          return word;
        case ADVERB:
          word = 4;
          return word;
        case PREPOSITION:
          word = 5;
          return word;
        case CONJUNCTION:
          word = 6;
          return word;
        case INTERJECTION:
          word = 7;
          return word;
        default:
          return word;
      }
    };

    const testCollection = await CardCollection.create({ name: `${header}` });
    const path1 = path.resolve(__dirname, ".", "", dictionarys.name);
    await dictionarys.mv(path1);
    fs.createReadStream(`${path1}`)
      .pipe(csv())
      .on("data", (dat) => {
        results1.push(dat);
      })
      .on("end", () => {
        results1.map((elem) => {
          Card.create({
            word: elem.Word,
            transcription: elem.Transcription,
            type: wordType(elem.Type),
            collection_id: testCollection.id,
          }).then((card) => {
            CardTranslation.create({
              word: elem.Translation,
              card_id: card.id,
            });
          });
        });
      });
    setTimeout(() => {
      fs.unlink(path1, () => {});
    }, 0);
    return;
  }

  async removeDictionary(header) {
    const collection = await CardCollection.findOne({
      where: { name: header },
    });
    const cards = await Card.findAll({
      where: { collection_id: collection.id },
    });
    cards.map((elem) => {
      CardTranslation.findOne({ where: { card_id: elem.id } }).then((result) =>
        result.destroy()
      );
    });
    cards.map((elem) => elem.destroy());
    await collection.destroy();
    return collection.name;
  }

  async updateHeaderDictionary(oldHeader, newHeader) {
    CardCollection.update({ name: newHeader }, { where: { name: oldHeader } });
    return "success";
  }

  async getDictionary() {
    const body = CardCollection.findAll();
    return body;
  }



  async getDictionaryDataById(header) {

    const bodyById = await CardCollection.findOne({ where: {id: header,}
    
    })
  const cards= await Card.findAll({where:{collection_id:bodyById.id }})
  let nElems=0
  cards.map(elem=>nElems++)
  const data ={
      id:bodyById.id,
      collectionName:bodyById.name,
      nElems:nElems}
  
  return data;
  }
}

module.exports = new DictionaryService();
