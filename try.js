const express = require("express");
const dotenv = require("dotenv");
const { ConnectDatabse } = require("./database/database");
const userRouter = require("./router/userRouter");
const cors = require("cors");
dotenv.config();

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRouter);

// app.get("/", (request, response) => {
//   response.send("Hello express server");
// });
const StartServer = async () => {
  await ConnectDatabse();
  app.listen(port, () => {
    `Server is running at localhost:${port}`;
  });
};

StartServer();
