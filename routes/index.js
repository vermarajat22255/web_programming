const homeRoutes = require('./home');

const constructorMethod = app => {
    console.log("inside index");
    app.use("/", homeRoutes);
    app.use("*", (req, res) => {
        res.status(404).redirect("/error");
    });
    app.use("/error", (req, res) => {
        res.status(404).render("posts/error");
    });
};

module.exports = constructorMethod;