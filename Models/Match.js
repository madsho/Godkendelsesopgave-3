class Match{
    constructor (matchId){
        this.matchId = matchId
    }
}
const interests = require("./Interest");


// looking for matches in interests and if one is matching is shows the matching 
const matchInterests = interests.myInterest1.filter(element => interests.myInterest2.includes(element));


//if-statement that shows if there is a match between two ^^
if (matchInterests.length !== 0){
    var matchID = "Match!"
} else {
    var matchID = "No Match!"
}

exports.myMatch = [matchID]