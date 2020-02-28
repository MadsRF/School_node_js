const express = require("express");
const app = express();
const PORT = 5000;

let cars = [{car: "toyota", id: 1}, {car: "mercedes", id: 2}];

app.get("/cars", (req, res) => {
    const response = cars;

    return res.send(response);
});

app.get("/cars/:id", (req, res) => {
    console.log(req.params);    
    
    const response = cars.find(({id}) => id === parseInt(req.params.id)); 

    return res.send(response);
});

const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});







