const express = require("express");
const { requireAuth } = require("../models/auth");
const app = express.Router();

const messageModel = require("../models/messages");
const CREATED_STATUS = 201;

app
  .post("/", requireAuth, (req, res) => {
    messageModel
      .create(req.body, req.user)
      .then((message) => {
        console.log("Im in the create controller", message);
        res.send({ success: true, errors: [], data: message });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  })

  .post("/send", (req, res, next) => {
    console.log("Im inside the messages Controller");
    messageModel
      .sendMessage(req.body, req.user)
      .then((message) => {
        res.send({ success: true, errors: [], data: message });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  })

  .delete("/delete-message", (req, res, next) => {
    console.log("Im inside the messages Controller in delete");
    messageModel
      .deleteMessage(req.user, req.body)
      .then((message) => {
        res.send({ success: true, errors: [], data: message });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  });

module.exports = app;
