const express = require("express");
const app = express();

app.use(express.json());

const session = require("express-session");


const config = require("./config/config.json");

app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    
}));

const rateLimit = require("express-rate-limit");

// against ddos attack
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter)

// for login and signup request by same user
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 100 requests per windowMs
});

app.use("/signup", authLimiter);
app.use("/login", authLimiter);


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


// setup the routes with the app
// global middelware sits between backend and frontend. works on all routes
// the order of next is important as is goes from top to bottom

// app.use((req, res, next) => {
//     console.log("time of request", new Date());
//     next();
// });

const authRoute = require("./routes/auth.js");
const usersRoute = require("./routes/users.js");

app.use(authRoute);
app.use(usersRoute);


const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    else{
        console.log("server is running on: ", PORT);
    };
});