const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    var message = "Please enter the text inside the search field, it won't work without it.";
    // res.status(400);
    res.status(404).render("posts/error", {errorMessage: message});
});

module.exports = router;