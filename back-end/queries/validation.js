const db = require("../db/dbConfig.js");
const {createNewCart} = require("../queries/carts.js");

const validateActiveCart = async (customer_id) => {
    try{
        const customerCartArray = await db.any("SELECT * FROM carts WHERE id=$1 and is_active=TRUE", customer_id);
        console.log(customerCartArray, "Inside query")
        // [ { id: 2, is_active: true, customer_id: 2 } ] Inside query
        if(customerCartArray.length < 1){ //if the length is 0
            //create a cart for that customer
            const createACustomerCart = await createNewCart(customer_id);
            return createACustomerCart; //return the newly created cart
        }else{
            return customerCartArray; //return the active cart that was already there
        }
    }catch(err){
        return err;
    }
}

module.exports ={
    validateActiveCart
}