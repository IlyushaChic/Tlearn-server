const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Token = sequelize.define("tokenuserAdmin", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  tokenuser: { type: DataTypes.INTEGER, defaultValue: null },
  refreshToken: { type: DataTypes.STRING },
});


module.exports = { Token };