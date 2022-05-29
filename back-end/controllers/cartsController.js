const express = require("express");
const carts = express.Router();
const { getCurrentCart, getPreviousCarts, updateCurrentCart, deleteProductFromCart } = require("../queries/carts");
const validationAddToCart = require("../validations/cartValidation")

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

carts.post("/addToCart", validationAddToCart,  async (req, res) => {
    const { body } = req;// send it in the body //we need body.productID, body.userID, 
    console.log(body);
    try{
        const updatedCart = await updateCurrentCart(body);
        console.log(updatedCart);
        res.status(200).json({status: "success", payload: updatedCart})
    }catch(err){
        return err;
    }
    
    //does user have a cart? use body.restaurantID, body.cartID,  (ID of an active cart)
        //if they do use it. 
            //if they dont --> create one
    //verification steps **Note validatgion for meals from other restuarants (respond with an error, remove)
    //validation: contd if they is any instock //if the person adds more than what is currently in stock
    //update the cart to include what act of adding the prod into the cart, association of product to the cart
    
    //if it is in stock then you should add it to the cart and update
})

carts.delete("/:products_id", async (req, res) => {
    const { product_id } = req.params;
    console.log("product_id~~", product_id)
    try {
        const deletedProduct = await deleteProductFromCart(product_id);
            if(deletedProduct.product_id){
                res.status(200).json(deletedProduct)
            }
    } catch (error) {
        
    };
});

module.exports = carts;