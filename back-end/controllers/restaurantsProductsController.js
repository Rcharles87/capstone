const express = require("express");
const restaurantsProducts = express.Router({mergeParams: true});
const {
    getAllProducts
} = require("../queries/restaurantsProducts.js");

restaurantsProducts.get("/", async (req, res) => {
    const { restaurant_id } = req.params;
    try{
        const allProducts = await getAllProducts(restaurant_id);
        res.status(200).json(allProducts);
    }catch(err){
        return err;
    }
})

module.exports = restaurantsProducts;