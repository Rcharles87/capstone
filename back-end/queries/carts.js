const db = require("../db/dbConfig.js");

const getCurrentCart = async (customer_id) => {
    try{
        //use customerID get customers active cart and save in a variable called "cart"
        const cart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
        
        //use cart.id to get all order_details associated with carts_id and save in a variable "orderDetailsArr"
        const orderDetailsArr = await db.any('SELECT * FROM order_details WHERE carts_id=$1', cart.id);
     
        const productsArr = [];
        //loop through "orderDetailsArr" create a query for each element and match products_id to id in the Products table
        for(let orderDetail of orderDetailsArr){
            let productName =  await db.one('SELECT name FROM products WHERE id=$1', orderDetail.products_id);
            productsArr.push(productName.name);
        }
        //choose needed info & return into an array of objects
        return orderDetailsArr.map((el,index)=> {
            return {
                quantity:el.quantity,
                name:productsArr[index]
            }
        });
    } catch (err){
        return err;
    };
};


const getPreviousCarts = async (customer_id) => {
    try{
            //use customer_ID get a customer’s inactive cart and save in a variable called “previousCarts”
        const previousCarts = await db.any("SELECT * FROM carts WHERE customer_id=$1 AND is_active=false", customer_id);
        const previousOrderDetailsArr = [];
        const previousOrdersDetailsArr2 = [];
            // use previousCart.id to get all order details associated with previous cart.id and save as a variable previousOrderDetailsArr 
        for(let previousCart of previousCarts){
            // console.log("previous cart:", previousCart);
            let orderDetail = await db.one("SELECT * FROM order_details WHERE carts_id=$1", previousCart.id);
            console.log("order:", orderDetail);
            previousOrderDetailsArr.push(orderDetail);
            console.log("previous order:", previousOrderDetailsArr);
        };
        for(let previousOrderDetail of previousOrderDetailsArr){
            console.log(previousOrderDetail)
        }
            return previousCarts;
    } catch (err){
        return err;
    };
};



//update the active cart 
//get product_id from order details?

const updateCurrentCart = async (customer_id, updateInfo) => {

    try{
        const updatedCart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
    
        const updatedOrderDetails = await db.one('UPDATE order_details SET quantity=$1 WHERE carts_id=$2 RETURNING *',
        [updateInfo.quantity, updatedCart.customer_id]);
        
        let updatedProduct = await db.one("SELECT name FROM products WHERE id=$1", updatedOrderDetails.products_id);
        
        return {
            quantity: updateInfo.quantity,
            name: updatedProduct.name
        };


    } catch (err){
        return err;
    };
};




module.exports = { getCurrentCart, getPreviousCarts, updateCurrentCart };