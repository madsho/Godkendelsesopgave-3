class user { //Super class
    constructor (userid, email, password, firstName, lastName, age, gender, interests){
       this.userid = userid
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender 
        this.interests = interests
    }

}

//free user 
class freeUser extends user{
    constructor (userid, email, password, firstName, lastName, age, gender, interests){
        super (userid, email, password, firstName, lastName, age, gender, interests)
    }
}


//payment user der har tilsluttet et credit kort
class paymentUser extends user{
    constructor (userid, email, password, firstName, lastName, age, gender, interests, creditCard){
        super (userid, email, password, firstName, lastName, age, gender, interests)
        this.Creditcard = creditCard
    }
}

const Credit = require("./CreditCard");
const interest = require("./Interest")
//ny freeuser
var mads = new freeUser (1, "mads.holmvang@hotmail.com", "bob1234", "Mads", "Holmvang", 20, "Male", interest.myInterest1 )

//ny payment user
var sofie = new paymentUser(2, "sof1@live.dk", "sof1234", "Sofie", "Laustsen", 19, "female,", interest.myInterest2, Credit)



exports.myUser = [mads, sofie];
exports.myPaymentuser = [sofie]
exports.MyFreeUser = [mads]


//New users for updating API
var mads2 = new freeUser (1, "mads.holmvang@hotmail.com", "bob1234", "Mads", "Holmvang", 20, "Male", interest.newInterest1 )

//ny payment user
var sofie2 = new paymentUser(2, "sof1@live.dk", "sof1234", "Sofie", "Laustsen", 19, "female,", interest.newInterest2, Credit)

exports.newUsers = [mads2, sofie2];
exports.newUser1 = [mads2];
exports.newUser2 = [sofie2];