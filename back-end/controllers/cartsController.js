const express = require("express");
const carts = express.Router();
const { getProducts, getPreviousCarts } = require("../queries/carts");


carts.get("/:customer_id/active", async (req, res) =>{
    const { customer_id } = req.params;
    try{
        const productsInOrder = await getProducts(customer_id);
        res.status(200).json(productsInOrder)
    }catch(err){
        return err
    }
});

carts.get("/:customer_id/inactive", async (req, res) => {
    const { customer_id } = req.params;
    try{
        const previousOrders = await getPreviousCarts(customer_id);
        res.status(200).json(previousOrders);
    }catch(err){
        return err;
    };
});

module.exports = carts;