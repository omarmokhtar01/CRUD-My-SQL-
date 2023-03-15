require("dotenv").config();
const express = require("express");
app = express(),
  bodyParser = require("body-parser"),
  mountRoute = require("./router"),
  sequelize = require("./config/db"),
  userModel = require("./model/userModel");

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(async (req, res, next) => {
  let user = await userModel.findByPk(1)
    .then((user) => req.user = user);
  next();
});

// Mount Routes
mountRoute(app);

// Relationship
productModel.belongsTo(userModel, { constraints: true, onDelete: "CASCADE" });


sequelize
  .sync()
  .then((result) => {
    return userModel.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return userModel.create({ name: "omar", email: "test@test.com" });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
