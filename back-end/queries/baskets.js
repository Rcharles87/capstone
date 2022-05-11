const db = require("../db/dbConfig.js");

const getCurrentBasket = async (customer_id) => {
    try{
        const currentBasket = await db.one("SELECT * FROM baskets WHERE customer_id=$1 AND is_active=true", id);
           return currentBasket;

    } catch (err){
        return err;
    };

};

const getPreviousBaskets = async (customer_id) => {
    try{
        const previousBasket = await db.any("SELECT * FROM baskets WHERE customer_id=$1 AND is_active=false", id);
        return previousBasket;
    } catch (err){
        return err;
    };
};
/// baskets -(customerID)-> customers -(id)-> orderDetails -()->
const updateCurrentBasket = async (customer_id) => {
    try{
        const updatedBasket = await db.one("UPDATE baskets")
    } catch (err){
        return err;
    };
};


module.exports = { getCurrentBasket, getPreviousBaskets};