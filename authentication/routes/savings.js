const express = require("express");
const { savingsFunction } = require("../controllers/savings");
const {check} = require('express-validator')
const router = express.Router();
const jwt = require('jsonwebtoken')


router.post('/savings', authenticateToken, savingsFunction);

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