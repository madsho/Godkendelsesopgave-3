const express = require ("express"); // bruger node express 
const cors = require ("cors") // bruger cors til at køre på en webbrowser
const app = express() 
app.use(cors())


const users = require ("./Routes/Users");
const interests = require ("./Routes/Interests");
const match = require ("./Routes/Match")



const PORT = process.env.PORT || 3000 //Porten er på 3000 

/*
const jwt = require('jsonwebtoken');
const fs = require('fs')
*/

//localhost:3000/ viser "Hello World"
app.get('/',(req, res) => res.send ('The endpoints are /Users, /Interests and /Match')) 


/*CRUD Api-endpoints for users, interests and match*/
//Users
    app.use ("/Users", users);

    // interests

    app.use ("/Interests", interests);

    //Match
    app.use ("/Match", match)

/*
const { appendFile } = require("fs");

//localhost:3000/User viser beskeden nedenfor
app.get('/User', (req,res) => {
    res.json ({"message" : "THIS IS THE USER ENDPOINT"})
})


//localhost:3000/jwt viser den valide token key på dette endpoint. ______ JWT - token hvor for implementereing af login funktion
app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8'); // opretter private key ved hjælp af private.pem
    let token = jwt.sign({ "body": "stuff" }, "MySuperSecretPassPhrase", { algorithm: 'HS256'}); //
    res.send(token);
})*/


app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
