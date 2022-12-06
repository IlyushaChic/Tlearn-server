const sequelize = require("../../db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("tlearn_user", {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING },
  first_name: { type: DataTypes.STRING },
  last_name: { type: DataTypes.STRING },
  active_collection_id: { type: DataTypes.BIGINT },
}, {
  timestamps: false,
  freezeTableName: true,
});



module.exports = { Users }; 