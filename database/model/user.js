const mongoose = require("mongoose");

const Signup = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    minlength: [8, "Email length must be at least 8 characters"],
    maxlength: [20, " Email length must be 8 to 20 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password length must be at least 8 characters"],
  },
});

const SignupModel = mongoose.model("Signup", Signup);

module.exports = SignupModel;
