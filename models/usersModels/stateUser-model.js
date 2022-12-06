const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const UserState = sequelize.define("tlearn_state", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING},
  period: { type: DataTypes.INTEGER },
}, {
  timestamps: false,
  freezeTableName: true,
});



module.exports = { UserState }; 