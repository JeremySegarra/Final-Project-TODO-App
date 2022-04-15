const express = require("express");
const { requireAuth } = require("../models/auth");

const app = express.Router();
const userModel = require("../models/users");
//this middleware gets the whole list of users
const CREATED_STATUS = 201;

app
  .get("/", (req, res, next) => {
    userModel
      .getList()
      .then((users) => {
        console.log(users);
        res.send({ success: true, errors: [], data: users });
      })
      .catch((err) => {
        res.status(500).json(err);
        next();
      });
  })

  .get("/:id", (req, res, next) => {
    userModel
      .get(req.params.id)
      .then((user) => {
        res.send(user);
      })
      .catch(next);
  })

  .delete("/:id", (req, res) => {
    const user = userModel.remove(req.params.id);
    res.send({ success: true, errors: [], data: user });
  })

  .post("/signup", (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body;

    userModel
      .verifyUserCredentials(firstname, lastname, username, email, password)
      .then(() => {
        userModel
          .create(req.body)
          .then((newUser) => {
            res
              .status(CREATED_STATUS)
              .send({ success: true, errors: [], data: newUser });
          })
          .catch((err) => {
            res.send({ success: false, errors: [err] });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(err.statusCode).send(err);
      });
  })

  .patch("/:id", (req, res, next) => {
    userModel
      .update(req.params.id, req.body)
      .then((updatedUser) => {
        res.send({ success: true, errors: [], data: updatedUser });
      })
      .catch(next);
  })
  .post("/login", async (req, res, next) => {
    try {
      const user = await userModel.login(req.body.username, req.body.password);
      res.send({ success: true, errors: [], data: user });
    } catch (err) {
      res
        .status(err.statusCode)
        .send({ success: false, errors: [err.message] });
    }
  })
  .post("/seed", (req, res, next) => {
    userModel
      .seed()
      .then((users) => {
        res.send({ success: true, errors: [], data: users });
      })
      .catch(next);
  });

module.exports = app;
