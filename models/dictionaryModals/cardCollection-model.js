const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const CardCollection = sequelize.define("tlearn_cardcollection", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING }}, {
    timestamps: false,
    freezeTableName: true,
  });



module.exports = { CardCollection }; 