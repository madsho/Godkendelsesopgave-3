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







app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
