class user { //Super class
    constructor (email, password, firstName, lastName, dob, gender, location){
        this.email = email
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
        this.gender = gender 
        this.location = location
    }

}

//free user 
class freeUser extends user{
    constructor (email, password, firstName, lastName, dob, gender, location){
        super (email, password, firstName, lastName, dob, gender, location)
    }
}

//payment user der har tilsluttet et credit kort
class paymentUser extends user{
    constructor (email, password, firstName, lastName, dob, gender, location, creditCard){
        super (email, password, firstName, lastName, dob, gender, location)
        this.creditCard = creditCard
    }
}