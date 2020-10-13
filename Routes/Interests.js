const express = require("express");
let router = express.Router();
const interests = require("../Models/Interest.js");

router.get("/", (req, res) =>{
    res.json(interests.myInterest);
})


module.exports = router 