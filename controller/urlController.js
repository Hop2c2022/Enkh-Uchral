const mongoose = require("mongoose");
const URL = require("../database/model/url");
const { urlGetQuery } = require("../query/urlQuery");

exports.dataavh = async (req, res) => {
  const result = await URL.find();
  res.send({ data: result });
};
exports.urlPostController = async (req, res) => {
  try {
    await urlGetQuery(req);
    res.status(201).send("Successfully");
  } catch (err) {
    res.send(err.message);
  }
};
