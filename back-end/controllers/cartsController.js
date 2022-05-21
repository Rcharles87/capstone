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

carts.post("/addToCart", async (req, res) => {
    const {body} = req;
    
    //we need cartID, productID, RestaurantID
    //does user have a cart? 
        //if they do use it. if they dont --> create one
    //verification steps **Note validatgion for meals from other restuarants (respond with an error, remove)
    //update the cart to include what
    //if they is any instock //if the person adds more than what is currently in stock
    //if it is in stock then you should add it to the cart and update
    
})

module.exports = carts;