const axios = require('axios');

    find = async function(str){
        // console.log("h");
        if(str == undefined || typeof str != 'string') throw "Name is invalid!";
        var res;
        var lastName = [];
        var firstName = [];
        var name;
        var details = [];
        var count = 0;
        res = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json').then(function(response){
            for(let i=0; i<response.data.length; i++){
                firstName[i] = response.data[i]["firstName"];
                lastName[i] = response.data[i]["lastName"];
                name = firstName[i] + " " + lastName[i];
                name = name.toLowerCase();
                if(name.includes(str) && count<20){
                    details[count] = response.data[i];
                    count++;
                }
            }
            // nameArr.sort();
            // console.log("about to return");
            return details;
        });
        // console.log("res is "+res)
        return res;
    }
searchByID = async function(id){
    if(id == undefined || typeof id != 'number' || id <= 0 || id > 500) throw "ID is invalid!";
    // console.log(id);
    // console.log(typeof id);
    var a = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json').then(function (response){
        for(let i=0; i<response.data.length; i++){
            if(response.data[i]["id"] == id){
                return response.data[i];
            }
        }
    });
    // console.log(a);
    return a;
}
module.exports = {
    find,
    searchByID
}