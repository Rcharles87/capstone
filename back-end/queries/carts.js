const db = require("../db/dbConfig.js");

const getCurrentCart = async (customer_id) => {
    try{
        const currentCart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", id);
           return currentCart;

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
/// carts -(customerID)-> customers -(id)-> orderDetails -()->
const updateCurrentCart = async (customer_id) => {
    try{
        const updatedCart = await db.one("UPDATE carts")
    } catch (err){
        return err;
    };
};




module.exports = { getCurrentCart, getPreviousCarts};