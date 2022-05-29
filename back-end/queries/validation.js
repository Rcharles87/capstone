const db = require("../db/dbConfig.js");
const {createNewCart} = require("../queries/carts.js");

const validateActiveCart = async (customer_id) => {
    try{
        const customerCartArray = await db.any("SELECT * FROM carts WHERE id=$1 and is_active=TRUE", customer_id);
        // console.log(customerCartArray, "Inside query")
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

const validateMultipleRestaurants = async (body, activeCart) => {
    // console.log("inside the second validation function", body, activeCart)
    console.log("active",activeCart[0].id)
    try{
        const activeCart_id = activeCart[0].id
        const activeOrderDetailsArr = await db.any("SELECT * FROM order_details WHERE carts_id=$1", activeCart_id)   
        // [
        //     { carts_id: 2, products_id: 3, quantity: 6 },
        //     { carts_id: 2, products_id: 16, quantity: 1 },
        //     { carts_id: 2, products_id: 8, quantity: 1 },
        //     { carts_id: 2, products_id: 7, quantity: 1 },
        //     { carts_id: 2, products_id: 19, quantity: 1 },
        //     { carts_id: 2, products_id: 4, quantity: 1 },
        //     { carts_id: 2, products_id: 15, quantity: 1 },
        //     { carts_id: 2, products_id: 1, quantity: 1 },
        //     { carts_id: 2, products_id: 18, quantity: 1 },
        //     { carts_id: 2, products_id: 13, quantity: 1 },
        //     { carts_id: 2, products_id: 2, quantity: 1 }
        //   ]
        const productsArr = [];
        // console.log("AYOO ",activeOrderDetailsArr)
        for(let productDetail of activeOrderDetailsArr){
            const productInfo = await db.one("SELECT * FROM products WHERE id=$1", productDetail.products_id);
            productsArr.push(productInfo)
        }
        // console.log("CONSOLE",productsArr)
        // [
        //     {
        //       id: 3,
        //       name: 'Lactose free',
        //       description: 'Wild Rice with a side of steamed vegetables',
        //       portion: '10oz',
        //       calories: 170,
        //       quantity_in_stock: 10,
        //       restaurant_id: 1
        //     },
        //     {
        //       id: 7,
        //       name: 'Non-dairy',
        //       description: 'Vibrant Greens with Quinoa',
        //       portion: '12oz',
        //       calories: 280,
        //       quantity_in_stock: 3,
        //       restaurant_id: 2
        //     },
        //     {
        //       id: 19,
        //       name: 'Non-dairy',
        //       description: 'Vibrant Greens with Quinoa',
        //       portion: '12oz',
        //       calories: 280,
        //       quantity_in_stock: 36,
        //       restaurant_id: 8
        //     },
        //   ]

        
    }catch(err){
        return err;
    }
}

module.exports ={
    validateActiveCart,
    validateMultipleRestaurants
}