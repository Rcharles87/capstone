const express = require("express");
const restaurants = express.Router();
const { getAllRestaurants, getOneRestaurant } = require("../queries/restaurants.js")

restaurants.get("/", async (req, res) => {
    try{
      const allRestaurants = await getAllRestaurants();
      res.status(200).json(allRestaurants)
    }catch(err){
      return err;
    }
});

restaurants.get("/:restaurant_id", async (req, res) => {
  const {restaurant_id} = req.params;
  try {
    const oneRestaurant = await getOneRestaurant(restaurant_id);
    res.status(200).json(oneRestaurant)
  } catch (err) {
    return err;
  }
});


module.exports = restaurants;