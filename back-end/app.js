//Dependencies
const express = require("express");
const cors = require("cors");

//Controllers go here -->
const basketsController = require("./controllers/basketsController.js");

// Configuration
const app = express();

//Middleware
app.use(cors());

//Parse incoming JSON
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Welcome");
});


//app.use goes here -->
app.use("/baskets", basketsController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

//Export
module.exports = app;