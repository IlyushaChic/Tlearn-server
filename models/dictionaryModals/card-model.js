const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const Card = sequelize.define("tlearn_card", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  word: { type: DataTypes.STRING,},
  transcription: { type: DataTypes.STRING},
  type: { type: DataTypes.INTEGER },
  collection_id: { type: DataTypes.BIGINT },
}, {
  timestamps: false, 
  freezeTableName: true,
});
 


module.exports = { Card };