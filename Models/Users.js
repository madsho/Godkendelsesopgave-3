class user { //Super class
    constructor (userid, email, password, firstName, lastName, age, gender, interests, image){
       this.userid = userid
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender 
        this.interests = interests
        this.image = image
    }

}

//free user 
class freeUser extends user{
    constructor (userid, email, password, firstName, lastName, age, gender, interests, image){
        super (userid, email, password, firstName, lastName, age, gender, interests, image)
    }
}


//payment user der har tilsluttet et credit kort
class paymentUser extends user{
    constructor (userid, email, password, firstName, lastName, age, gender, interests, image, creditCard){
        super (userid, email, password, firstName, lastName, age, gender, interests, image)
        this.Creditcard = creditCard
    }
}




// creditcard, interets and image info from other models files 
const Credit = require("./CreditCard");
const interest = require("./Interest")
const image = require("./Image")
//ny freeuser
var mads = new freeUser (1, "mads.holmvang@hotmail.com", "bob1234", "Mads", "Holmvang", 20, "Male", interest.myInterest1, image.madsPic)

//ny payment user
var sofie = new paymentUser(2, "sof1@live.dk", "sof1234", "Sofie", "Laustsen", 19, "female,", interest.myInterest2, image.sofPic, Credit)



//New users for updating API
var mads2 = new freeUser (1, "mads.holmvang@hotmail.com", "bob1234", "Mads", "Holmvang", 20, "Male", interest.newInterest1, image.madsPic )

//ny payment user
var sofie2 = new paymentUser(2, "sof1@live.dk", "sof1234", "Sofie", "Laustsen", 19, "female,", interest.newInterest2, image.sofPic, Credit)

//exports of original users
exports.myUser = [mads, sofie];
exports.myPaymentuser = [sofie]
exports.MyFreeUser = [mads]

//export of new and updated User:
exports.newUsers = [mads2, sofie2];
exports.newUser1 = [mads2];
exports.newUser2 = [sofie2];