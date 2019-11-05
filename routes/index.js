const searchRoutes = require("./search");
const homeRoutes = require('./home');
const errorRoutes = require('./error');
const path = require('path');

const constructorMethod = app => {
    console.log("inside index");

    app.use("/search", searchRoutes);
    app.use("/details", searchRoutes);
    app.use("/", homeRoutes);
    app.use("/error", errorRoutes);
    app.use("*", (req, res) => {
        res.status(404).redirect("/error");
    });
};

module.exports = constructorMethod;