const express = require("express");
const carts = express.Router();
const { getProducts } = require("../queries/carts");


carts.get("/:customer_id/active", async (req, res) =>{
    const { customer_id } = req.params; // customer id
    // console.log('is the url sending req?',customer_id);

    //use customerID get customers active cart and save in a variable called "cart"
    //use cart.id to get all order_details associated with carts_id and save in a variable "orderDetailsArr"
    //loop through "orderDetailsArr" create a query for each element and match products_id to id in the Products table
    try{
        const productsInOrder = await getProducts(customer_id);
        console.log(productsInOrder);
        if(productsInOrder[0]){
            res.status(200).json({})
        }
        // console.log('is the server sending back info?',ans)
    }catch(err){
        return err
    }
    //choose needed info & return into an array of objects
})

carts.get('/:customer_id/inactive', async (req, res) => {

})

module.exports = carts;