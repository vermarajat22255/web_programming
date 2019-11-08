const searchRoutes = require("./search");

let constructorMethod = app => {
    app.use("/", searchRoutes);
};

module.exports = {
    people: require("./search"),
    constructorMethod
};