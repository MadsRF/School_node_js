const express = require("express");
const app = express();
const fs = require("fs");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('videos'));

// SSR - Server Side Rendering
// 1. Read the html files as strings [success criteria you can outside/afterwards console log the string]
// 2. concatonate and serve the strings (At once!)
const navbarPage = fs.readFileSync("./public/navbar/navbar.html", "utf8");
const footerPage = fs.readFileSync("./public/footer/footer.html", "utf8")


const frontPage = fs.readFileSync("./public/frontpage/frontpage.html", "utf8")
const playerPage = fs.readFileSync("./public/player/player.html", "utf8")
const uploadPage = fs.readFileSync("./public/upload/upload.html", "utf8")

app.get("/", (req, res) => {
    return res.send(navbarPage + frontPage + footerPage);
});

app.get("/player/:videoId", (req, res) => {
    return res.send(navbarPage + playerPage + footerPage);
});

app.get("/upload", (req, res) => {
    return res.send(navbarPage + uploadPage + footerPage);
});


// import routes 
const videosRoute = require("./routes/videos");
//console.log(videosRoute);

//set up routes with our server
app.use(videosRoute);


const port = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(port, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("This server is running on port", server.address().port);
});