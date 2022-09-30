const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const authentication = require("./Middleware/Authentication");
const userController = require("./Controllers/user.routes");
const { connection } = require("./Config/config");
const passport = require("./Config/google_auth");
const jwt=require("jsonwebtoken");

let PORT=8080 || process.env.PORT
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async function (req, res) {
    const email=req.user.email;
    const userId=req.user._id;
    let token = jwt.sign({email,userId}, process.env.TOKEN_KEY);
    // console.log(token);
    // res.redirect("/");
    res.send({"message":"login Success","email":email,"token":token})
    // res.redirect('/');
  }
);

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
