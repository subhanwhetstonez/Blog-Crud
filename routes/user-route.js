const express = require("express");
const Router = express.Router();
const uservice = require("../controller/user-controller.js");

Router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

//Router.route("/create").get(service.certain);

Router.route("/")
  .get(uservice.userDisplay.bind(uservice))
  .post(uservice.inputeUser.bind(uservice));

Router.route("/:id")
  .get(uservice.oneUser.bind(uservice))
  .post(uservice.updateUser.bind(uservice))
  .delete(uservice.deleteUser.bind(uservice));

module.exports = Router;
