class creditCard {
    constructor (Cardnumber, cvc, exp){
        this.Cardnumber = Cardnumber
        this.cvc = cvc
        this.exp = exp
    } 
}

var credsof = new creditCard ("1234 5678 9012 3456", "234", "10/24")

exports.Creditcard= Object.values(credsof) 