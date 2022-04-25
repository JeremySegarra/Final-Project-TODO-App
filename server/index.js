require("dotenv").config();

const express = require("express");
const proxy = require("express-http-proxy");

const userModel = require("./models/users");
const usersController = require("./controllers/users");
const messagesController = require("./controllers/messages");
const friendsController = require("./controllers/friends");

const { requireAuth } = require("./models/auth");

const app = express();
const port = process.env.PORT || 3000;

// app.use("/", express.static(__dirname + "/public/"));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  // console.log("auth in middleware: ", auth);
  if (auth) {
    const token = auth.split(" ")[1];
    userModel
      .verifyToken(token)
      .then((user) => {
        req.user = user;
        // console.log("user in middleware: ", user);
        next();
      })
      .catch(next);
  } else {
    next();
  }
});
app.get("/api/", (req, res) => {
  res.send("You are on the homepage");
});
app.use("/api/users", usersController);
app.use("/api/friends", friendsController);
app.use("/api/messages", messagesController);

//allows me to not have to build out the entire server every time I want to make a change

if (process.env.DEV === "true") {
  app.all("/*", proxy("http://localhost:3000"));
} else {
  app.use("/", express.static(__dirname + "/public/"));
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
