const express = require("express");
const { createProduct } = require("../controller/productService");
const router = express.Router();

router.route("/").post(createProduct);
// router.route("/:id").get(getOne).delete(deleteOne).put(updateOne);
// router.get("/:name", getByName);
// router.get("getAll", getAll);
module.exports = router;
