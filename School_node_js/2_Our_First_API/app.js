// Finds modul in node_modules
const express = require("express")
const request = require("request");

// Calling express as a function
let app = express()

// app.get("/") = route we want to look at /get
// (req, res) is what we are requesting from the api or responding to 
// this type of function is called a "call back function" gets called of the disgresion of the server 
// non blocking IO is what node is about

app.get("/", (req, res) => {
    const response = {
        message: ["hi there", 123, "there is numbers"],
        number: 123456789
    }
    res.send(response)
})
/*
app.get("/aboutMe", (req, res) => {
    const response = {
        firstname: "mads",
        lastname: "frederiksen",
        adress: "scandigade",
        number: "123456789",
        age: 28,
        cpr: 220591-0000,
        city: "copenhagen"
    }
    res.send(response)

})
*/

const dayOfTheWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

app.get("/time", (req, res) => {
    const date = new Date();

    let time = date.toTimeString()
    let day = date.toDateString()
    let month = date.getMonth()+1

    
    const response = {
        Time: time,
        Date: day,
        Month: month, 
        weekDay: dayOfTheWeek[date.getDay()]
    }
    //like a return statement
    res.send(response)
})


// create a get route on /users
// :id and :message is our path variables
app.get("/users/:id", (req, res) => {
    console.log(req.params)
    
    let paramid = parseInt(req.params.id)

    let users = [{name: "mads", id: 1}, {name: "kasper", id: 2}]
    
    //find out to compare id with request 
    const response = users.find(({id}) => id === paramid) 
        return res.send(response)
    
    
})

// how to do a query string 
app.get("/search", (req, res) => {
    console.log(req.query)
    return res.send(req.query)
})


app.get("/google", (req, res) => {
    const request = require('request')
    request('http://www.google.com', function (error, response, body) {
      console.error('error:', error) // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body) // Print the HTML for the Google homepage.
      return res.send(body)
    })
})

app.get("/documentation", (req, res) => {
    //console.log(__dirname)
    return res.sendFile(__dirname + "/public/documentation.html")
})


app.get("/documentationtwo", (req, res) =>{
    return res.sendFile(__dirname + "/public/documentationtwo.html")
})




// The port the app is listing for. 
// use ports above 1023 because they are reserved for other applications.  
app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error)
    }
    console.log("Server is running on port", 3000)
})
