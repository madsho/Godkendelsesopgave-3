const express = require("express");
let router = express.Router();
const Users = require("../Models/Users.js");
const Match = require("../Models/Match");
const { readSync } = require("fs");

//both users
router.get("/", (req, res) =>{
    res.json(Users.myUser)
});
router.post("/",(req,res)=> {
    res.json({"message" : "User has been created"})
});
router.put("/", (req,res) => {
    Users.myUser = Users.newUsers
    Match.myMatch = Match.newMatch
    res.json({"message": "Users updated"})
});
router.delete("/", (req,res) => {
    Users.myUser = [];
    Users.newUsers
    res.json({"message": "Deleted Users"})
});

//payment users
router.get("/Payment", (req, res) =>{
    res.json(Users.myPaymentuser);
});
router.put("/Payment", (req,res) => {
    Users.myPaymentuser = Users.newUser2
    res.json({"message" : "Payment user has been updated"})
});
router.post("/Payment",(req,res)=> {
    res.json({"message" : "Payment user has been created"})
});
router.delete("/Payment", (req,res) => {
    Users.myPaymentuser = [];
    res.json({"message": "Deleted User"})
});

//free users
router.get("/Free", (req, res) =>{
    res.json(Users.MyFreeUser);
});
router.put("/Free", (req,res) => {
    Users.MyFreeUser = Users.newUser1
    res.json ({"message" : "User updated"})
});
router.post("/Free",(req,res)=> {
    res.json({"message" : "Free user has been created"})
});
router.delete("/Free", (req,res) => {
    Users.MyFreeUser = [];
    res.json({"message": "Deleted User"})
});


module.exports = router 