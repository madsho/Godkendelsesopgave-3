const express = require("express");
let router = express.Router();
const Users = require("../Models/Users.js");

router.get("/", (req, res) =>{
    res.json(Users.myUser);
})


module.exports = router 