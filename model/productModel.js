const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const product = sequelize.define("products", {
  product_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false },
  myDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});
module.exports = product;
