const express = require("express");
let router = express.Router();
const interests = require("../Models/Interest.js");
const match = require("../Models/Match");


//Api endpoints
router.get("/", (req, res) =>{
    res.json(interests.myInterest); // shows the interests of the two persons
})
router.post("/",(req,res)=> {
    res.json({"message" : "Interest has been created"}) //show that a new interest is created 
});
router.put("/", (req,res) => {
    interests.myInterest = interests.newInterest // The interest are updated 
    match.myMatch = match.newMatch // the match is updated as the interest change 
    res.json({"message": "Interests and matches has been updated"})
});
router.delete("/", (req,res) => {
    interests.myInterest = []; // the interest are deleted 
    interests.newInterest = []; // the interest are deleted 
    res.json({"message": "Interests deleted"})
});


module.exports = router 