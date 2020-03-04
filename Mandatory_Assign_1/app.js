const express = require("express");
const app = express();
const PORT = 8000;
const publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));


app.get(("/"), (req, res) => {
    console.log("index");
    return res.sendFile(__dirname + "/public/index.html");
});

app.get(("/script.js"), (req, res) => {
    console.log("script.js");
    return res.sendFile(__dirname + "/public/script.js");
});

app.get(("/css.css"), (req, res) => {
    console.log("css");
    return res.sendFile(__dirname + "/public/css.css");
});

app.get(("/json_page"), (req, res) => {
    console.log("json_page");
    return res.sendFile(__dirname + "/public/json_page.html");
});





const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});
