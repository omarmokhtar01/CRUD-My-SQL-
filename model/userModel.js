const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = User;
