const express = require ("express"); // bruger node express 
const cors = require ("cors") // bruger cors til at køre på en webbrowser
const app = express() 
app.use(cors())

// Routes til endpoints
const users = require ("./Controller/Users");
const interests = require ("./Controller/Interests");
const match = require ("./Controller/Match")


const PORT = process.env.PORT || 3000 //Porten er på 3000 




//localhost:3000/ viser hvilke routes man kan tage
app.get('/',(req, res) => res.send ('The endpoints are /Users (/Payment and /Free), /Interests and Match')) 


//CRUD Api-endpoints for users, interests and match
    //Users
    app.use ("/Users", users);
    
    // interests

    app.use ("/Interests", interests);

    //Match
    app.use ("/Match", match)



//JSON Web token
const jwt = require('jsonwebtoken')
const fs = require ('fs');

const Credit = require("./Models/CreditCard");
// JSON webtoken:
app.get('/secret', isAuthorized, (req, res) => {
    res.json({ "message" : Credit })
})

app.get("/jwt", (req, res) => {
    let privateKey = fs.readFileSync ("./Private.pem", "utf8");
    let token = jwt.sign({"body": "stuff"}, privateKey, {algorithm: "HS256"});
    res.send(token);
})

function isAuthorized(req, res, next){
    if (typeof req.headers.authorization !== "undifinded") {
        let token = req.headers.authorization.split(" ")[1];
        let privateKey = fs.readFileSync("./Private.pem", "utf8");

        jwt.verify(token, privateKey, {algorithm: "HS256"}, (err, decoded) => {
            if (err){
                res.status(500).json({ error: "Not Authorized"})
            }

            console.log(decoded);

            return next ();
        })
    
    } else {
        res.status(500).json({error: "Not authorized"})
    }
}

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
