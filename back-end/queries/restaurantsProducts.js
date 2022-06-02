const db = require("../db/dbConfig.js");

const getAllProducts = async (restaurant_id) => {
    // console.log(restaurant_id)
    try{
        const allProducts = await db.any("SELECT * FROM products WHERE restaurant_id=$1", restaurant_id);
        return allProducts;
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {
    getAllProducts
}