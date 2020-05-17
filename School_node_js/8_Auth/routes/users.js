const router = require("express").Router();

const User = require("../models/User.js");
const Elective = require("../models/Elective.js");


router.get("/users", async (req, res) => {
    const allUsersWithElectives = await User.query().select("username").withGraphFetched("electives"); 
    return res.send({ response: allUsersWithElectives })     

});

router.get("/setsessionvalue", (req, res) => {
    req.session.payingAttention = true;
    return res.send({response: "OK"});
});

router.get("/getsessionvalue", (req, res) => {
    return res.send({ response: req.session.payingAttention });
});

// Create a get request and pass data dynamically to it. Then either console log or send the dynamic data in the response.
//todo: dynamically pass data to this endpoint

router.get("/setanyvalue", (req, res) => {
    req.session.newValue = req.body.value; 
    return res.send({response: "ok"});
});

router.get("/getanyvalue", (req, res) => { 
    console.log(req.session.value)
    return res.send({ response: req.session.newValue });
});



module.exports = router;