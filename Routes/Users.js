const express = require("express");
let router = express.Router();
const Users = require("../Models/Users.js");

//both users
router.get("/", (req, res) =>{
    res.json(Users.myUser);
})

//payment users
router.get("/Payment", (req, res) =>{
    res.json(Users.myPaymentuser);
})

//free users
router.get("/Free", (req, res) =>{
    res.json(Users.MyFreeUser);
})
module.exports = router 