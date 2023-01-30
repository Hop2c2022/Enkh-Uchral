const mongoose = require("mongoose");

const URL = new mongoose.Schema({
  username: { type: String, required: true },
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
  },
});

const UrlModel = mongoose.model("URL", URL);

module.exports = UrlModel;
