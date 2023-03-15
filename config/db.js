const Sequelize = require("sequelize");

const sequelize = new Sequelize("crud", "root", process.env.PASS_DB, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
