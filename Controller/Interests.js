const express = require("express");
let router = express.Router();
const interests = require("../Models/Interest.js");


//Api endpoints
router.get("/", (req, res) =>{
    res.json(interests.myInterest);
})
router.post("/",(req,res)=> {
    res.json({"message" : "Interest has been created"})
});
router.put("/", (req,res) => {
    interests.myInterest = interests.newInterest
    res.json({"message": "Interests updated"})
});
router.delete("/", (req,res) => {
    interests.myInterest = [];
    interests.newInterest = [];
    res.json({"message": "Interests deleted"})
});


module.exports = router 