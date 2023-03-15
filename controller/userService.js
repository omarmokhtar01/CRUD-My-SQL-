const userModel = require("../model/userModel");

// Put /:id
// @desc update user name
exports.updateOne = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  await userModel.update({ name }, { where: { user_id: id } });
  let user = await userModel.findByPk(id);
  res.json(user);
};

// Get /
// @desc get all data
exports.getAll = async (req, res) => {
  const user = userModel.findAll().then((r) => res.send(r));
  res.json({ data: user })
};

// Get /:name
// @desc to get one feild(back just name) from database
exports.getByName = async (req, res) => {
  const user = userModel
    .findAll({ where: { name: req.params.name } })
    .then((r) => res.send(r));
};

// Get /:id
// @desc to get one by id from database
exports.getOne = async (req, res) => {
  const user = userModel.findByPk(req.params.id).then((r) => res.send(r));
};

// Delete /:id
// @desc to delete one by id from database
exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  await userModel.destroy({ where: { user_id: id } });
  res.json({ message: "Done" });
};

// Post /
// @desc to insert data to database
exports.postHome = async (req, res) => {
  userModel.create({ email: req.body.email, name: req.body.name });
};
