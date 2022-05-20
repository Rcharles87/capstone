const db = require("../db/dbConfig.js");

const getAllProducts = async () =>{
    try {
        const allProducts = await db.any("SELECT * FROM products ");
        return allProducts
    } catch (error) {
        return error
    };
};




module.exports = { getAllProducts}