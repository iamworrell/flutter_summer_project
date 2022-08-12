//Creating Savings Controller
const { Savings } = require("../models/savings");
const { User } = require("../models/user");
const {validationResult} = require('express-validator');
const savings = require("../models/savings");
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');




exports.savingsFunction = async (req, res) => {
    const user = req.user
    const userIdValue = user._id
    const savingsfield = req.body.savings
    const foundUser = await User.findById(userIdValue)

    
    
    const save = {
        savings: savingsfield,
        //userId: userIdValue,
        user: foundUser

    }

    

    //Savings.create(save)

    // const randomObject = {
    //     test: 123,
    //     address: 'test'
    // }

    // test({
    //     test: 123,
    //     address: 'test'
    // })

    // test(randomObject)



    const savings = new Savings(save)
    savings.save((err, savings) => {
        if(err) {
            return res.status(400).json({
                err,
                error: "Unable to add Test"
            })
        }
    return res.json({
        message: "123",
        savings
    })
})
}