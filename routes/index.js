// const indexRoutes = require("../views/posts");
const homeRoutes = require('./home');
const searchRoutes = require("./search");
const path = require("path");
const errorRoutes = require("./error")

const constructorMethod = app => {
  app.use("/", homeRoutes);
  app.use("/search", searchRoutes);
  app.use("/details", searchRoutes);
  app.use("/error", errorRoutes);
  app.use("*", (req, res) => {
    res.status(404).redirect("/error");
  });
};

module.exports = constructorMethod;