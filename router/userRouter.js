const express = require("express");
const {
  userGetController,
  userPostController,
} = require("../controller/userController");
const {
  loginGetController,
  login,
  loginGetControllerById,
} = require("../controller/loginController");

// const { TokenCheckerMiddleware } = require("../middleware");

const userRouter = express.Router();

userRouter
  .get("/signup", userGetController)
  .post("/signup", userPostController)
  .get("/login/:email", loginGetController)
  .post("/login", login)
  .get("/login", loginGetControllerById);

module.exports = userRouter;
