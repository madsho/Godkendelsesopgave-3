const express = require("express");
let router = express.Router();
const match = require("../Models/Match");

router.get("/", (req, res) =>{
    res.json(match.myMatch);
})
module.exports = router 