const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("posts/index");
});

module.exports = router;