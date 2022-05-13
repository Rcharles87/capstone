const db = require("../db/dbConfig.js");

const getProducts = async (customer_id) => {
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
        const previousCart = await db.any("SELECT * FROM carts WHERE customer_id=$1 AND is_active=false", id);
        return previousCart;
    } catch (err){
        return err;
    };
};



const updateCurrentCart = async (customer_id) => {
    try{
        const updatedCart = await db.one("UPDATE carts")
    } catch (err){
        return err;
    };
};




module.exports = { getProducts, getPreviousCarts};