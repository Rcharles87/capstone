const express = require("express");
const products = express.Router();
const {getAllProducts, getRestaurantProducts} = require("../queries/products.js");

products.get("/", async(req,res)=>{
    try {
        const allProducts = await getAllProducts()
        res.status(200).json(allProducts);
    } catch (error) {
        return error;
    };
});

products.get("/:restaurant_id", async(req,res)=>{
    const { restaurant_id } = req.params;
    try {
        const restaurantProducts = await getRestaurantProducts(restaurant_id)
        res.status(200).json(restaurantProducts);
    } catch (error) {
        return error;
    };
});


module.exports = products;