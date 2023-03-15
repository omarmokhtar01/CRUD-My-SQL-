const userRoute = require("./userRoute");
const productRoute = require("./productRoute");

const mountRoute = (app) => {
  app.use("/user", userRoute);
  app.use("/product", productRoute);
};
module.exports = mountRoute;
