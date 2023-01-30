const URL = require("../database/model/url");
const mongoose = require("mongoose");

exports.urlGetQuery = async (req) => {
  const { username, longUrl } = req.body;
  const result = await new URL({
    username: username,
    longUrl: longUrl,
  }).save();
  return result;
};
