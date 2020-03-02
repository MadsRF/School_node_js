const express = require("express");
const app = express();
const PORT = 8000;


app.get(("/"), (req, res) => {
    console.log("index");

    return res.sendFile(__dirname + "/public/index.html");
});



const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});
