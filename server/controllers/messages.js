const express = require("express");
const { requireAuth } = require("../models/auth");
const app = express.Router();

const messageModel = require("../models/messages");
const CREATED_STATUS = 201;

app.get("/friends/:id", (req, res, next) => {
  messageModel
    .getFriends(req.params.id)
    .then((friends) => {
      res.status(CREATED_STATUS).send(friends);
    })
    .catch((err) => {
      res.status(500).json(err);
      next();
    });
});

module.exports = app;
