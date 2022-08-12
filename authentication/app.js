const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;

const app = express();


//MongoDB Connection
connectDB();

// Use Parsing Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Import Routes
const userRoutes = require("./routes/user")

// Using Routes
app.use('/api', userRoutes) //Main Route



//Starting a Server
app.listen(port, () => {
    console.log(`App is Running at ${port}`)
})