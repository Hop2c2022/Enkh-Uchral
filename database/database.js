const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGODB_ATLAS_URI || "";

const connectionString = process.env.MONGODB_ATLAS_URI;
exports.ConnectDatabse = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("successfully connected to database");
    return "Mongoose connected";
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
