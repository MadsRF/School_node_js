const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users', async (req, res) => {
    const allUsersWithElectives = await User.query().select('username').withGraphFetched('electives');
    return res.send({ response: allUsersWithElectives });
});

/*
router.get('/setsessionvalue', (req, res) => {
    req.session.user_id = true;
    return res.send({ response: "OK" });
});

router.get('/getsessionvalue', (req, res) => {
    return res.send({ response: req.session.user_id });
});
*/

module.exports = router;
