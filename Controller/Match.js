const express = require("express");
let router = express.Router();
const match = require("../Models/Match");


router.get("/", (req, res) =>{
    res.json(match.myMatch);
})
router.post("/",(req,res)=> {
    res.json({"message" : "Match has been created"})
});
router.put("/", (req,res) => {
    match.myMatch = match.newMatch
    res.json({"message": "Match updated"})
});
router.delete("/", (req,res) => {
    match.myMatch = [];
    Users.newMatch = [];
    res.json({"message": "match deleted"})
});





module.exports = router 