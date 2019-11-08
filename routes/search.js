const express = require("express");
const router = express.Router();
const dataSearch = require("../data/search");
const axios = require('axios')
// const search = data.search

router.post("/", async(req, res) => {
        let key = req.body.search;
        // console.log(key);
        if(key == ""){
            res.status(400).redirect("/error");
        }
        else{
            key = key.trim();
            key = key.toLowerCase();
            var id = [];
            var firstName = [];
            var lastName = [];
            var nameList = [];
            const info = await dataSearch.find(key);
            // console.log(info);
            for(let i=0; i<info.length; i++){
                id[i] = info[i]["id"];
                firstName[i] = info[i]["firstName"];
                lastName[i] = info[i]["lastName"];
                nameList[i] = id[i] + " " + firstName[i] + " " + lastName[i];
            }
            res.render("posts/search", {id: id, firstName: firstName, lastName:lastName, people: nameList, searchKey: key});
        }
});

router.get("/:id", async(req, res) => {
    var key = req.params.id;
    // console.log("key is ", key);
    key = parseInt(key.trim());
    // console.log("key is ", key);
    const info = await dataSearch.searchByID(key);
    // console.log(info);
    var id = info["id"];
    var firstName = info["firstName"]
    var lastName = info["lastName"];
    var add = info["address"];
    var zip = info["zip"];
    var ph = info["phone"];
    var ssn = info["ssn"];
    res.render("posts/find", {id: id, firstName: firstName, lastName: lastName, address: add, zip: zip, phone: ph, ssn: ssn})
});

module.exports = router;