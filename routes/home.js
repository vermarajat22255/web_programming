const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", async(req, res) => {
    try {
        res.render("posts/index");
    } catch (e) {
        res.status(404).json({ message: "home not found" });
    }
});



module.exports = router;