const express = require("express");
let router = express.Router();

// info about match and users are imported from the models files 
const Users = require("../Models/Users.js");
const Match = require("../Models/Match");
const { readSync } = require("fs");




//Api endpints for both users
router.get("/", (req, res) =>{
    res.json(Users.myUser) // Shows info about the two users
});
router.post("/",(req,res)=> {
    res.json({"message" : "User has been created"}) // shows the message that a user had been created 
});
router.put("/", (req,res) => {
    Users.myUser = Users.newUsers //the original user is updated with the new user 
    Match.myMatch = Match.newMatch // The match is updated. In this example the match is changed as the interest of the to users are changed 
    res.json({"message": "Users updated"})
});
router.delete("/", (req,res) => {
    Users.myUser = []; //The two users are deleted or in other words changed to an empty array 
    Users.newUsers
    res.json({"message": "Deleted Users"})
});

//payment users
router.get("/Payment", (req, res) =>{
    res.json(Users.myPaymentuser);// Shows info about the paymnet users
});
router.post("/Payment",(req,res)=> {
    res.json({"message" : "Payment user has been created"})// shows the message that a paymnet user had been created 
});
router.put("/Payment", (req,res) => {
    Users.myPaymentuser = Users.newUser2//the original user is updated with the new user 
    res.json({"message" : "Payment user has been updated"})
});
router.delete("/Payment", (req,res) => {
    Users.myPaymentuser = []; //The user are deleted or in other words changed to an empty array 
    res.json({"message": "Deleted User"})
});



//free users
router.get("/Free", (req, res) =>{
    res.json(Users.MyFreeUser); // Shows info about the paymnet users
});
router.post("/Free",(req,res)=> {
    res.json({"message" : "Free user has been created"}) // shows the message that a free user had been created 
});
router.put("/Free", (req,res) => {
    Users.MyFreeUser = Users.newUser1 //the original user is updated with the new user 
    res.json ({"message" : "User updated"})
});

router.delete("/Free", (req,res) => {
    Users.MyFreeUser = [];
    res.json({"message": "Deleted User"})//The user are deleted or in other words changed to an empty array 
});


module.exports = router 