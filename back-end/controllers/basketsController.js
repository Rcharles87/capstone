const express = require("express");
const baskets = express.Router();
const { getCurrentBasket, getPreviousBaskets } = require("../queries/baskets");

baskets.get("/", async (req, res) => {
    const { show } = req.query;
    const { customer_id } = req.params; //get customerID from her
    console.log(customer_id)
    try{
        if(show){
            switch(show){
                case 'previous':
                    const previousBasket = getPreviousBaskets(customer_id);
                    if(previousBasket.customer_id){
                        res.status(200).json(previousBasket)
                    }else{
                        res.status(500).json({error: "Cannot find basket"})
                    }
                    break;
                case 'current':
                    const currentBasket = getCurrentBasket(customer_id);
                    if(currentBasket.customer_id){
                        res.status(200).json(currentBasket)
                    }else{
                        res.status(500).json({error: "Cannot retrieve basket"})
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

module.exports = baskets;