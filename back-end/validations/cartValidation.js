// const db = require("../db/config.js");
const { validateActiveCart, validateMultipleRestaurants, validateInStock } = require("../queries/validation.js");

const validationAddToCart = async (req, res, next) => {
    console.log("Middlewareis working")
    const { body } = req;
    try{
        const activeCart = await validateActiveCart(body.userID) //ask if the user has an active cart or not?
        const isSameRestaurant = await validateMultipleRestaurants(body, activeCart) //check if the user is adding something from a different restaurant
       
       
    }catch(err){
        return err;
    }
    next();
}

module.exports = validationAddToCart;

