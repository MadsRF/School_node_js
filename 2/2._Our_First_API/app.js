/* const express = require("express");
const app = express();
 */
const app = require("express")();
const request = require("request");

            // callback function 
app.get("/", (req, res) => {
    const response = {
        message: "hi there"
    }
    res.send(response);
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];

app.get("/time", (req, res) => {
    const date = new Date();
    res.send({ 
        unformatedTime: date,
        time: date.toString(),
        day: date.getDay(),
        weekDay: days[date.getDay()]
    });
});

app.get("/users/:id", (req, res) => {
    console.log(req.params);
    res.send({ });
});

app.get("/test", (req, res) => {
    if (true) {
        return res.send({message: "Response inside of the if"});
    } else {
        return res.send({message: "Response inside of the else"});
    }
    return res.send({message: "Response outside of both"});
});

app.get("/search", (req, res) => {
    console.log(req.query);
    return res.send(req.query);
});


app.get("/google", (req, res) => {
    request('http://www.google.com',  (error, response, body) => {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return res.send(body); 
    });
});

app.get("/documentationone", (req, res) => {
    // console.log(__dirname);
    // return res.redirect("/documentationtwo");
    return res.sendFile(__dirname + "/public/documentationone.html");
});

app.get("/documentationtwo", (req, res) => {
    return res.sendFile(__dirname + "/public/documentationtwo.html");
});


app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", 3000);
});
