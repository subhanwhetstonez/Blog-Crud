const express = require("express");
const Router = express.Router();
const uservice = require("../controller/blog-controller.js");

Router.use(function (req, res, next) {
  console.log(`${req.url} @ ${Date.now()}`);
  next();
});

//Router.route("/create").get(service.certain);

Router.route("/")
  .get(uservice.blogDisplay.bind(uservice))
  .post(uservice.putinBlog.bind(uservice));

Router.route("/:id")
  .get(uservice.oneBlog.bind(uservice))
  .post(uservice.updateBlog.bind(uservice))
  .delete(uservice.deleteBlog.bind(uservice));

module.exports = Router;
