const express = require("express");
const restaurants = express.Router();
const { getAllRestaurants } = require("../queries/restaurants.js")

restaurants.get("/", async (req, res) => {
    try{
      const allRestaurants = await getAllRestaurants();
      res.status(200).json(allRestaurants)
    }catch(err){
      return err;
    }
});


module.exports = restaurants;