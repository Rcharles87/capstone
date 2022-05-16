const express = require("express");
const carts = express.Router();
const { getCurrentCart, getPreviousCarts, updateCurrentCart } = require("../queries/carts");


carts.get("/:customer_id/active", async (req, res) =>{
    const { customer_id } = req.params;
    try{
        const productsInOrder = await getCurrentCart(customer_id);
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

carts.put("/:customer_id/active", async (req,res) =>{
    const { customer_id } = req.params;
    const { body } = req;
    try{
        const updatedCart = await updateCurrentCart(customer_id, body);
        if(updatedCart.name){
            res.status(200).json(updatedCart);
        } else {
            res.status(500).json({error: "Controller can not update cart"});
        };
    }catch(err){
        return err;
    };
});


module.exports = carts;