const express = require("express");
const { requireAuth } = require("../models/auth");

const app = express.Router();
const friendsModel = require("../models/friends");
//this middleware gets the whole list of friends/pending requests
const CREATED_STATUS = 201;

app
  .get("/:id", (req, res, next) => {
    friendsModel
      .getFriends(req.params.id)
      .then((friends) => {
        res
          .status(CREATED_STATUS)
          .send({ success: true, errors: [], data: friends });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
        next();
      });
  })
  .post("/add_friend/:id", (req, res, next) => {
    console.log("trying to add friend here is req.body:", req.body);
    friendsModel
      .addFriend(req.params.id, req.body)
      .then((friends) => {
        res.send({ success: true, errors: [], data: friends });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  })
  .patch("/deny_request/:id", (req, res, next) => {
    friendsModel
      .denyRequest(req.params.id, req.body)
      .then((pendingList) => {
        res.send({ success: true, errors: [], data: pendingList });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  })

  .put("/filter", (req, res, next) => {
    //Was unsure if I needed to change the list so i made it a put request
    console.log("Im inside the filter middleware");
    console.log("req.body", req.body);
    friendsModel
      .getFilteredList(req.body, req.user)
      .then((filteredUsers) => {
        res.send({ success: true, errors: [], data: filteredUsers });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  })

  .post("/friend_request/:id", (req, res, next) => {
    console.log("Im inside the addfriend middleware");

    friendsModel
      .friendRequest(req.params.id, req.body)
      .then((user) => {
        res.send({ success: true, errors: [], data: user });
      })
      .catch((err) => {
        res.send({ success: false, errors: [err] });
      });
  });

module.exports = app;
