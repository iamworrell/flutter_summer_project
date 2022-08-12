const mongoose = require("mongoose");
const { userSchema } = require("./user");
const crypto = require("crypto");
const uuid = require('uuid');

const savingsSchema = new mongoose.Schema({
    savings: {
        type: Number,
        required: true,
    },
    user: {
        type: userSchema,
        required: false
    }
}, {timestamps: true})



// module.exports = mongoose.model("Savings", savingsSchema)

module.exports = {
    Savings: mongoose.model("Savings", savingsSchema),
    savingsSchema
}