const express = require("express");
const app = express();

// parse application/x-www-
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

let cars = [{ id: 1, brand: "toyota" }, { id: 2, brand: "mercedes" }];

// Finds all cars in list
app.get("/cars", (req, res) => {
    const response = cars;
    return res.send(response);
});
// Finds specific car by id
app.get("/cars/:id", (req, res) => {
    console.log(req.params);    
    const response = cars.find(({id}) => id === parseInt(req.params.id)); 
    return res.send(response);
});

// add 1 new car to list 
let currentId = 2;
app.post("/cars",  (req, res) => {
    const newCar = req.body;
    newCar.id = ++currentId;
    console.log(newCar);

    cars.push(newCar);

    return res.send({response: {} });
});

// update 1 car by id
app.put("/cars/:id", (req, res) => {
    // uses findindex because find only finds a copy of the object
    const foundIndex = cars.findIndex(car => car.id === Number(req.params.id));
    delete req.body.id;
    console.log(foundIndex);
    const updatedCar = { ...cars[foundIndex], ...req.body };
    console.log(updatedCar);
    cars[foundIndex] = updatedCar;

    return res.send({ responds: cars });
});
    

// delete 1 car by id 
app.delete('/cars/:id', (req, res) => {
    cars = cars.filter(car => car.id !== parseInt(req.params.id));
    return res.send(cars);
});        

/*
// delete 1 car by id 
app.delete('/cars/:id', (req, res) => {        
    console.log(req.params.id);
    let id = req.params.id;
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].id == id) {
            cars.splice(i, 1);
            return res.send(cars);   
        };
    };
});
*/



//huge json that contains the port and all the other stuff
console.log(process.env.PORT);
const PORT = process.env.PORT ? process.env.PORT : 3000;

const server = app.listen(PORT, (error) => {
    if (error){
        console.log("Error starting server");
    };
    console.log("this server is running", server.address().port);
});







