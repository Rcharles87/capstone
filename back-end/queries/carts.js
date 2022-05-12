const db = require("../db/dbConfig.js");

const getProducts = async (customer_id) => {
    // console.log(customer_id)
    try{
        const cart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
        const orderDetailsArr = await db.any('SELECT * FROM order_details WHERE carts_id=$1', cart.id);
        // const information = {
        //     id: customer_id, 
        //     quantity: orderDetailsArr[0].quantity,
        // }
        for(let prod of orderDetailsArr){
            // console.log(prod)
            const productsArr =  await db.any('SELECT * FROM products WHERE id=$1', prod.products_id);
            // return productsArr
        }
    } catch (err){
        return err;
    };

};

const getOrderDetails = async (cart_id) => {
    console.log(cart_id);
    try{

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

const getProductsOfCustomer = async (customer_id) => {
    try{
        const activeCart = await db.any('')
    }catch(err){
        return err;
    }
}

const updateCurrentCart = async (customer_id) => {
    try{
        const updatedCart = await db.one("UPDATE carts")
    } catch (err){
        return err;
    };
};




module.exports = { getProducts, getPreviousCarts, getProductsOfCustomer};