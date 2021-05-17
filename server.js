console.log("hello world!")

require("dotenv").config();

const PORT = process.env.PORT;

const peopleRouter = require("./controllers/Place");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("./db/connection");
const router = require("./controllers/Place");

const app = express();

//middleware
app.use(cors()); 
app.use(express.json()); 
app.use(morgan("tiny")); 


app.get("/", (req, res) => res.send("Hit me!"));
app.use("/places", peopleRouter); //send all "/places" requries this



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));