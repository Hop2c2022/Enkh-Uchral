const UserSchema = require("../database/model/user");
const bcrypt = require("bcrypt");

exports.UserPostQuery = async (req) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(1);
  const hash = bcrypt.hashSync(password, salt);
  const result = await new UserSchema({
    email: email,
    password: hash,
  }).save();
  return result;
};
