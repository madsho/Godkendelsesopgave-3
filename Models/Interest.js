class interest{
    constructor (interestId, gender, freetime, favSport){
    this.interestId = interestId
    this.gender = gender
    this.freetime = freetime
    this. favSport = favSport
    }
}

var interestmads = new interest (1.1, "female", "movies" , "Football", )
var interestfif = new interest (2.1, "male", "movies", "Golf") 


exports.myInterest = [interestmads,interestfif];

//interest for the two persons:
exports.myInterest1 = Object.values(interestmads)
exports.myInterest2 = Object.values(interestfif)