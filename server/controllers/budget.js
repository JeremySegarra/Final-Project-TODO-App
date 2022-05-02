const express = require("express");
const { requireAuth } = require("../models/auth");

const app = express.Router();
const userBudget = require("../models/budget");
//this middleware gets the whole list of users
const CREATED_STATUS = 201;

app
  .post("/create", requireAuth, (req, res) => {
    console.log("This is the budget controller", req.body);
    userBudget
      .create(req.body, req.user)
      .then((budget) => {
        res.send({ success: true, errors: [], data: budget });
      })
      .catch((err) => {
        res.send({ success: true, errors: [err] });
      });
  })
  .put("/add-funds", requireAuth, (req, res) => {
    console.log("This is the add-funds controller this is the body", req.body);
    userBudget
      .addFunds(req.body, req.user)
      .then((balance) => {
        console.log("This is the balance", balance.budget);
        res.send({ success: true, errors: [], data: balance.budget });
      })
      .catch((err) => {
        res.send({ success: true, errors: [err] });
      });
  })
  .put("/remove-funds", requireAuth, (req, res) => {
    console.log("This is the add-funds controller this is the body", req.body);
    userBudget
      .removeFunds(req.body, req.user)
      .then((balance) => {
        console.log("This is the balance", balance.budget);
        res.send({ success: true, errors: [], data: balance.budget });
      })
      .catch((err) => {
        res.send({ success: true, errors: [err] });
      });
  })
  .post("/add-item", requireAuth, (req, res) => {
    console.log("This is the add-item controller this is the body", req.body);
    userBudget
      .addItem(req.body, req.user)
      .then((item) => {
        console.log("This is the item", item);
        res.send({ success: true, errors: [], data: item });
      })
      .catch((err) => {
        res.send({ success: true, errors: [err] });
      });
  })
  .delete("/delete-item", requireAuth, (req, res) => {
    userBudget
      .removeItem(req.body, req.user)
      .then((item) => {
        console.log("This is the item", item);
        res.send({ success: true, errors: [], data: item });
      })
      .catch((err) => {
        res.send({ success: true, errors: [err] });
      });
  });

module.exports = app;
