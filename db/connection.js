require("dotenv").config()

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

const config = { 
    useUnifiedTopology: true, 
    useNewUrlParser: true };

    mongoose.connect(uri, config);

    module.exports = mongoose;