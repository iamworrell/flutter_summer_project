const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.DATABASE).then(() => {
        console.log("DB CONNECTED")
    }).catch(() =>{
        console.log("UNABLE TO CONNECT TO DB")
    });
    
};

module.exports = connectDB;