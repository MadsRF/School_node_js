// Finds modul in node_modules
var express = require("express")

// Calling express as a function
var app = express()

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


// The port the app is listing for. 
// use ports above 1023 because they are reserved for other applications.  
app.listen(3000, error => {
    if (error) {
        console.log("Error running the server", error)
    }
    console.log("Server is running on port", 3000)
})
