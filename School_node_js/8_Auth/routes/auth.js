const router = require('express').Router();

const User = require("../models/User.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;


router.post('/login', (req, res) => {
    // get the data req.body 
    // validate the data 
    // check if user exists and get their password
    // bcrypt compare
    // send a response based on the comparison


    
    bcrypt.compare("password", "$2b$12$ZKzwfF5Nk1PFidMbMbi91ep884T6HzpG92ZqD.2nhtKis12MFx9.C")
    .then(result => console.log(result));
    
    return res.status(501).send({ response: "Not implemented yet" });
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;

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
                            //new way where value becomes key
                            username,
                            //old way with key and value
                            password: hashedPassword
                        }).then(createdUser => {
                            return res.send({ response: `The user ${createdUser.username} was created` });
                        });
                    });
                };

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
    return res.status(501).send({ response: "Not implemented yet" });
});

module.exports = router;