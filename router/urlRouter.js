const express = require("express");
const { dataavh, urlPostController } = require("../controller/urlController");

const urlRouter = express.Router();

urlRouter.get("/url", dataavh).post("/url", urlPostController);

module.exports = urlRouter;
