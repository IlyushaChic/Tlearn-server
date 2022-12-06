const { Card } = require("../../models/dictionaryModals/card-model");
const {
  CardCollection,
} = require("../../models/dictionaryModals/cardCollection-model");
const {
  CardTranslation,
} = require("../../models/dictionaryModals/cardTranslation-model");

const {
  UserCardProgress,
} = require("../../models/usersModels/cardUserProgress-model");
const { UserState } = require("../../models/usersModels/stateUser-model");
const { Users } = require("../../models/usersModels/users-model");

class UserService {


  async fakeDataGenerate(payload) {  
      // связанное со словарями
    let fakeCardss = [];
    let fakeCardssTranslations = [];

    const nElements = 10;
    for (let i = 0; i < nElements; i++) {
      let elem = await Card.create({
        word: `testWord${i}`,
        transcription: "werwer",
        type: 1,
        collection_id: 1,
      });
      fakeCardss.push(elem);
      let elemtransl = await CardTranslation.create({
        word: `тест_${i}`,
        card_id: i + 1,
      });
      fakeCardssTranslations.push(elemtransl);
    }

    const fakeCardCollection = await CardCollection.create({
      name: "первый тестовый словарик",
    });

    // связанное с пользователями
    const fakeUserCardProgress = await UserCardProgress.create({
      time_created: Date.now(),
      penalty_step: false,
      card_id: 1,
      state_id: 1,
      user_id: 1,
    });
    const fakeUserState = await UserState.create({
      name: "название периода что-ли",
      period: 1,
    });
    const fakeUsers = await Users.create({
      email: "qwerty@tinkoff.ru",
      first_name: "Олег",
      last_name: "Тинькофф",
      active_collection_id: 1,
    });

    return {
      fakeCard: [...fakeCardss],
      fakeCardCollection: fakeCardCollection,
      fakeCardTranslation: [...fakeCardssTranslations],
      fakeUserCardProgress: fakeUserCardProgress,
      fakeUserState: fakeUserState,
      fakeUsers: fakeUsers,
    };
  }
}
module.exports = new UserService();
