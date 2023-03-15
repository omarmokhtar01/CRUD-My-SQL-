const productModel = require("../model/productModel");

// Post /product
// @desc to insert data to database
exports.createProduct = async (req, res, next) => {
  let product = await productModel.create({ name: req.body.name, userUserId: req.user.user_id });
  res.json({ data: product, userId: req.user.user_id })
};
