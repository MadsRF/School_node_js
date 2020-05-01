const express = require("express");
const app = express();

app.use(express.json());

const authRoute = require("./routes/auth.js");
app.use(authRoute);

// Called a "named import" same as saying const smth = require("objection").Model;
const { Model } = require("objection");

// Capital Knex is the libray
const Knex = require("knex");
// gets json from knexfile
const knexfile = require("./knexfile.js");
// Lowercase knex is the connection
const knex = Knex(knexfile.development);

// connects knex to objection
Model.knex(knex);


const PORT = 9000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    else{
        console.log("server is running on: ", PORT);
    };
});