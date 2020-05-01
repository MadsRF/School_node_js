const router = require("express").Router();

const User = require("../models/User.js");

router.post("/login", (req, res) => {

    return res.status(501).send( {response: "login"} );
});


router.post("/signup", (req, res) => {
    const { username, password } = req.body;

    if (username && password) {
        // password validation
        if (password.length < 8) {
            return res.status(400).send({ response: "Password must be 8 char" });
        } else {
            try {
                User.query().select("username").where("username", username).then(foundUser => {
                    if (foundUser.length > 0 ) {
                        return res.status(400).send({ response: "User already exists" });     
                    } else {
                        // add new user
                        User.query().insert({
                            username,
                            password
                        }).then(createdUser => {
                            return res.send({ response: `the user ${createdUser.username} was created` });
                        });
                    };        
                });
            } catch (error) {
                return res.status(500).send({ response: "something went wrong with the DB" });
            }
        }
    } else {
        return res.status(501).send({ response: req.body });
    }
});


router.get("/logout", (req, res) => {
    
    return res.status(501).send({response: "logout"});
});



module.exports = router;