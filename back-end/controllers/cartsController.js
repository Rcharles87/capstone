const express = require("express");
const carts = express.Router();
const { getCurrentCart, getPreviousCarts, updateCurrentCart, deleteProductFromCart, submitCheckedOutCart } = require("../queries/carts");
const validationAddToCart = require("../validations/cartValidation")



carts.get("/:customer_id/active", async (req, res) =>{
    const { customer_id } = req.params;
    // console.log("this route is being accessed",customer_id)
    // console.log("get Current cart")
    try{
        const productsInOrder = await getCurrentCart(customer_id);
        // console.log("line 14 products in order",productsInOrder)
        // [ { orderNumber: 21, items: [], restaurant: undefined } ]
        if(productsInOrder){
            res.status(200).json(productsInOrder)
        }else{
            res.status(410).json({error: "Please add items to cart"})
        }
    }catch(err){
        console.log(err)
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

// carts.put("/:customer_id/active", async (req,res) =>{
//     const { customer_id } = req.params;
//     const { body } = req;
//     try{
//         const updatedCart = await updateCurrentCart(body);
//         if(updatedCart.name){
//             res.status(200).json(updatedCart);
//         } else {
//             res.status(500).json({error: "Controller can not update cart"});
//         };
//     }catch(err){
//         return err;
//     };
// });

carts.post("/addToCart", async (req, res) => {
    const { body } = req;// send it in the body //we need body.productID, body.userID, 
    try{
        const updatedCart = await updateCurrentCart(body);
        res.status(200).json({status: "success", payload: updatedCart})
    }catch(err){
        console.log(err);
    }
    //does user have a cart? use body.restaurantID, body.cartID,  (ID of an active cart)
        //if they do use it. 
            //if they dont --> create one
    //verification steps **Note validatgion for meals from other restuarants (respond with an error, remove)
    //validation: contd if they is any instock //if the person adds more than what is currently in stock
    //update the cart to include what act of adding the prod into the cart, association of product to the cart
})


carts.put("/submit", async(req, res) => {
    const { userID } = req.body
    try{
        const newActiveCart = await submitCheckedOutCart(userID);
        console.log("line carts.js",newActiveCart);
        if(newActiveCart.id){
            res.status(200).json(newActiveCart);
        } else {
            res.status(500).json({Error: "Cart is still active, query did not change active status"});
        };
    }catch(err){
        return err;
    };
})

module.exports = carts;