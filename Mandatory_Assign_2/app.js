const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json());


// You need to copy the config.template.json file and fill out your own secret
const session = require('express-session');
const config = require('./config/config.json');
app.use(session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: true
}));


const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(limiter);

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8 // limit each IP to 8 requests per windowMs
});

app.use('/signup', authLimiter);
app.use('/login', authLimiter);


/* Setup Knex with Objection */

const { Model } = require('objection');
const Knex = require('knex');
const knexfile = require('./knexfile.js');

const knex = Knex(knexfile.development);

Model.knex(knex);


function checkAuth(req, res, next) {
    if (!req.session.user_id) {
      res.status(401).sendFile(__dirname + "/public/noAuth.html");
    } else {
      next();
    }
};

app.get("/", (req, res) => {
    console.log("login");
    return res.sendFile(__dirname + "/public/login.html");
});

app.get("/home", checkAuth, (req, res) => {
    console.log("home");
    return res.sendFile(__dirname + "/public/home.html");
});

app.get("/contact", checkAuth, (req, res) => {
    console.log("contact");
    return res.sendFile(__dirname + "/public/contact.html");
});

app.get("/news", checkAuth, (req, res) => {
    console.log("news");
    return res.sendFile(__dirname + "/public/news.html");
});

app.get("/email", checkAuth, (req, res) => {
    console.log("email");
    return res.sendFile(__dirname + "/public/email.html");
});


const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const emailRoute = require('./routes/email.js');

app.use(authRoute);
app.use(usersRoute);
app.use(emailRoute);

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on the port", PORT);
})