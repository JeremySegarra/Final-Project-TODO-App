// const express = require("express");
// const { requireAuth } = require("../models/auth");
// const app = express.Router();

// const messageModel = require("../models/messages");
// const CREATED_STATUS = 201;

// app.get("/friends/:id", (req, res, next) => {
//   console.log("Im inside the api, ", req.params.id);
//   messageModel
//     .getFriends(req.params.id)
//     .then((friends) => {
//       res
//         .status(CREATED_STATUS)
//         .send({ success: true, errors: [], data: friends });
//     })
//     .catch((err) => {
//       res.json({ success: false, errors: [err] });
//       next();
//     });
// });

// module.exports = app;
