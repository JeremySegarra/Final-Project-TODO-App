const express = require("express");

const app = express.Router();
const userModel = require("../models/users");
//this middleware gets the whole list of users
app
  .get("/", (req, res) => {
    res.send(userModel.list);
  })
  .get("/:id", (req, res) => {
    const user = userModel.get(req.params.id);
    res.send(user);
  });

module.exports = app;
