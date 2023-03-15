const express = require("express");
const {
  postHome,
  getOne,
  deleteOne,
  updateOne,
  getAll,
  getByName,
} = require("../controller/userService");
const router = express.Router();

router.route("/").get(getHome).post(postHome);
router.route("/:id").get(getOne).delete(deleteOne).put(updateOne);
router.get("/:name", getByName);
router.get("getAll", getAll);
module.exports = router;
