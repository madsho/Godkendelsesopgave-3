class Match{
    constructor (matchId){
        this.matchId = matchId
    }
}
const interests = require("./Interest");


// looking for matches in interests and if one is matching is shows the matching 
const matchInterests = interests.myInterest1.filter(element => interests.myInterest2.includes(element));

if (matchInterests.length !== 0){
    console.log("Match!")
} else {
    console.log("No match!")
}

var match1 = new Match (1)

exports.myMatch = [match1]