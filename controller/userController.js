const UserSchema = require("../database/model/user");
const mongoose = require("mongoose");
const { UserPostQuery } = require("../query/userQuery");

exports.userGetController = async (req, res) => {
  const result = await UserSchema.find();
  res.send({ data: result });
};

exports.userGetControllerById = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UserSchema.findById({ _id: objId });
  res.send({ data: result });
};

exports.urlPostController = async (req, res) => {
  const { id } = req.params;
}

exports.userPostController = async (req, res) => {
  try {
    await UserPostQuery(req);
    res.status(201).send(" Successfully created new user ");
  } catch (err) {
    res.send(err.message);
  }
};
