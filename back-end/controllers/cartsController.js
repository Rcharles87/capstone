const express = require("express");
const carts = express.Router();
const { getCurrentCart, getPreviousCarts } = require("../queries/carts");
// /carts/:customerID?show=previous
carts.get("/:customerID", async (req, res) => {
    const { show } = req.query;
    const { customer_id } = req.params; //get customerID from her
    console.log(customer_id)
    try{
        if(show){
            switch(show){
                case 'previous':
                    const previousCart = getPreviousCarts(customer_id);
                    if(previousCart.customer_id){
                        res.status(200).json(previousCart)
                    }else{
                        res.status(500).json({error: "Cannot find cart"})
                    }
                    break;
                case 'current':
                    const currentCart = getCurrentCart(customer_id);
                    if(currentCart.customer_id){
                        res.status(200).json(currentCart)
                    }else{
                        res.status(500).json({error: "Cannot retrieve cart"})
                    }
                    break;
                default:
            }
        }
        else{
            res.status(404).json({error: "query not accepted"})
        }
    }catch(err){
        return err;
    }
})

module.exports = carts;