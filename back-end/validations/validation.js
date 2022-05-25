const db = require("../db/dbConfig.js");

const validateActiveCart = async (info) => {
    try{
        const isActiveCart = await db.any("SELECT * FROM carts WHERE id=$1 and is_active=TRUE", info.userID);
        console.log(isActiveCart)
    }catch(err){
        return err;
    }
}

module.exports ={
    validateActiveCart
}