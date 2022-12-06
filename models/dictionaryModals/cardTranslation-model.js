const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const CardTranslation = sequelize.define("tlearn_translation", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  word: { type: DataTypes.STRING },
  card_id: { type: DataTypes.BIGINT },
}, {
  timestamps: false,
  freezeTableName: true,
});



module.exports = { CardTranslation }; 