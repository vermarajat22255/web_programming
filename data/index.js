const peopleRoutes = require("./people");

let constructorMethod = app => {
    app.use("/", peopleRoutes);
};

module.exports = {
    constructorMethod,
    people: require("./people"),
};