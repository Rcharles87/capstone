// const db = require("../db/config.js");
const { validateActiveCart } = require("../queries/validation.js");

const validationAddToCart = async (req, res, next) => {
    const { body } = req;
    try{
        const hasActiveCart = await validateActiveCart(body.userID) //ask if the use has an active cart or not?
        
        console.log(hasActiveCart, "middle ware")
    }catch(err){
        return err
    }
    next();
}

module.exports = validationAddToCart;