class interest{
    constructor (interestId, gender, freetime, favSport){
    this.interestId = interestId
    this.gender = gender
    this.freetime = freetime
    this. favSport = favSport
    }
}
// interests for persons
var interestmads = new interest (1.1, "female", "movies" , "Football", )
var interestfif = new interest (2.1, "male", "movies", "Golf") 

//new interests for persons
var interestmads2 = new interest (1.1, "female", "Formel-1" , "Football", )
var interestfif2 = new interest (2.1, "male", "Golf", "Golf") 

exports.myInterest = [interestmads,interestfif];

//interest for the two persons:
exports.myInterest1 = Object.values(interestmads)
exports.myInterest2 = Object.values(interestfif)

exports.newInterest1 = Object.values(interestmads2)
exports.newInterest2 = Object.values(interestfif2)