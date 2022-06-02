const db = require("../db/dbConfig.js");

const getAllProducts = async () =>{
    try {
        const allProducts = await db.any("SELECT * FROM products");
        return allProducts
    } catch (error) {
        return error
    };
};

const getRestaurantProducts = async (restaurant_id) => {
    try {
        const restaurantProducts = await db.any("SELECT * FROM products WHERE restaurant_id=$1", restaurant_id);
        return restaurantProducts;
    } catch (error) {
        return error;
    };
};

const deleteProduct = async (id) => {
    try{
        
    }catch(err){
        return err;
    }
}

module.exports = { getAllProducts, getRestaurantProducts}