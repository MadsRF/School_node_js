const express = require("express");
const app = express();

// parse application/x-www-
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("videos"));



app.get("/", (req, res) => { 
    return res.sendFile(__dirname + "/public/frontpage/frontpage.html");
}); 


app.get("/player/:videoId", (req, res) => { 
    return res.sendFile(__dirname + "/public/player/player.html");
}); 




//huge json that contains the port and all the other stuff
console.log(process.env.PORT);
const PORT = process.env.PORT ? process.env.PORT : 5555;

const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});