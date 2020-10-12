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
        this.creditCard = creditCard
    }
}

//ny freeuser
var mads = new freeUser (1, "mads.holmvang@hotmail.com", "bob1234", "Mads", "Holmvang", 20, "Male", [], )

//ny payment user
var bob = new paymentUser(2, "bob1@live.dk", "mads1234", "Bob", "Bobster", 19, "Male,", [], [])