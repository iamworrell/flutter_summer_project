const express = require("express");
const { signup } = require("../controllers/user");
const { signin, signout } = require("../controllers/user");
const {check} = require('express-validator');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/signup', [
    check("name", "Name should be atleast 3 characters long").isLength({min: 3}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characers long").isLength({min: 6})
],signup)

router.post('/signin', signin)

router.get("/signout", authenticateToken, signout)

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router