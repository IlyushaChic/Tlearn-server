const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const UserCardProgress = sequelize.define("tlearn_carduserprogress", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  time_created: { type: DataTypes.DATE },
  penalty_step: { type: DataTypes.BOOLEAN },
  card_id: { type: DataTypes.BIGINT  },
  state_id: { type: DataTypes.BIGINT },
  user_id: { type: DataTypes.BIGINT },
}, {
  timestamps: false,
  freezeTableName: true,
});


 
module.exports = { UserCardProgress };