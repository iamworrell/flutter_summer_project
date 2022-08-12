//Creating Signup Controller
const Test = require("../models/test");
const {validationResult} = require('express-validator');
const test = require("../models/test")
var jwt = require('jsonwebtoken')
var expressJwt = require('express-jwt')

exports.testFunction = (req, res) => {
    console.log('test')
    const test = new Test(req.body)
    test.save((err, test) => {
        if(err) {
            return res.status(400).json({
                error: "Unable to add Test"
            })
        }
    return res.json({
        message: "123",
        test
    })
})
}