const SignupSchema = require("../database/model/user");
const mongoose = require("mongoose");
const { TokenGenerator } = require("../helper/helper");
const bcrypt = require("bcrypt");

exports.loginGetController = async (req, res) => {
  const { email } = req.params;
  const result = await SignupSchema.findOne({ email: email });
  res.send({ data: result });
};

exports.loginGetControllerById = async (req, res) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await SignupSchema.findById({ _id: objId });
  res.send({ data: result });
};

exports.login = async (req, res) => {
  const { password, email } = req.body;
  const user = await SignupSchema.findOne({ email: email });
  console.log(user);
  if (user !== null) {
    const cpm = await bcrypt.compare(password, user.password);
    if (cpm) {
      const token = await TokenGenerator({ uid: user._id, expires: 300 });
      res.send({ token: token });
      return;
    } else {
      res.send("Invalid password or email");
      return;
    }
  }
  if (!user) res.send(" You don't have any user account, please sign up ");
};
