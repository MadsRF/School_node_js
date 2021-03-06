const router = require('express').Router();

const User = require("../models/User.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;

    // 1. Get the data from the request
    // 2. Validate the data 
    // 3. Check if user exists and get their password
    // 4. Bcrypt compare
    // 5. Send a response based on the comparison

router.post('/login', (req, res) => {
    // get request from body
    const { username, password } = req.body;
    //console.log(req.body);

    // ask if this is a username with a password
    if (username && password) {
       
        // goes through db to see if username exists 
        User.query().select('username').where('username', username).then(foundUsername => {
            try {
                if (foundUsername[0].username == username) {          
                    //console.log(foundUsername[0].username);
                    
                    User.query().select("password").where('username', foundUsername[0].username).then(foundPassword => {
                        //console.log(foundPassword[0].password);
                        
                        bcrypt.compare(password, foundPassword[0].password).then(result => {
                            //console.log(result) 
                            if (result == true) {
                                req.session.user_id = true;
                                return res.redirect("/home");
                            } else {
                                return res.status(400).redirect("/home");
                            };
                        });                        
                    });      
                } else {
                    return res.status(400).redirect("/home");
                }; 
            } catch (error) {
                return res.status(400).redirect("/home");
            };
        });
    };
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    console.log("signup", req.body);

    if (username && password) {
        // password validation
        if (password.length < 8) {
            return res.status(400).send({ response: "Password must be 8 characters or longer" });
        } else {
            try {
                User.query().select('username').where('username', username).then(foundUser => {
                    if (foundUser.length > 0) {
                        return res.status(400).send({ response: "User already exists" });
                    } else {
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            User.query().insert({
                                username,
                                password: hashedPassword
                            }).then(createdUser => {
                                return res.redirect("/");      
                            });
                        });
                    }
                });
            } catch (error) {
                return res.status(500).send({ response: "Something went wrong with the DB" });
            }
        }
    } else {
        return res.status(400).send({ response: "username or password missing" });
    }
});

router.get('/logout', (req, res) => { 
    console.log("logout", req.body);
    delete req.session.user_id;
    res.redirect('/');
});

module.exports = router;