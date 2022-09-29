const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const authentication = require("./Middleware/Authentication");
const userController = require("./Controllers/user.routes");
const { connection } = require("./Config/config");

let PORT=8080|| process.env.PORT
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/", userController);
// app.use("/project", authentication, projectController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
  console.log("Server Started")
});
