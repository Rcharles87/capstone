// const db = require("../db/config.js");
const { validateActiveCart, validateMultipleRestaurants } = require("../queries/validation.js");

const validationAddToCart = async (req, res, next) => {
    console.log("Middlewareis working")
    const { body } = req;
    try{
        const activeCart = await validateActiveCart(body.userID) //ask if the useR has an active cart or not?
        const checkRestaurant = await validateMultipleRestaurants(body, activeCart) //check if the user is adding something from a different restaurant
    //    console.log(checkRestaurant)
    }catch(err){
        return err;
    }
    next();
}

module.exports = validationAddToCart;