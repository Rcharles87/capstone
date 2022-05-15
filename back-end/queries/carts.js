const db = require("../db/dbConfig.js");

const getCurrentCart = async (customer_id) => {
    try{
        //use customerID get customers active cart and save in a variable called "cart"
        // const cart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
        //use cart.id to get all order_details associated with carts_id and save in a variable "orderDetailsArr"
        
        const cartDetailsArr = await db.any('SELECT * FROM order_details WHERE carts_id=(SELECT id FROM carts WHERE customer_id=1 AND is_active=TRUE)', customer_id);
        
        const productsArr = [];
        //loop through "orderDetailsArr" create a query for each element and match products_id to id in the Products table
        for(let cartDetail of cartDetailsArr){
            let productName =  await db.one('SELECT name FROM products WHERE id=$1', cartDetail.products_id);
            productsArr.push(productName.name);
        }
        //choose needed info & return into an array of objects
        return cartDetailsArr.map((el,index)=> {
            return {
                quantity:el.quantity,
                name:productsArr[index]
            }
        });
    } catch (err){
        return err;
    };
};


const getPreviousCarts = async (customer_id) => {
    try{
        const previousCart = await db.many('SELECT order_details.carts_id, order_details.products_id, order_details.quantity FROM order_details WHERE carts_id IN (SELECT id FROM carts WHERE customer_id=$1 AND is_active=FALSE)', customer_id);
        
        for(let prod of previousCart){
            let name = await db.one('SELECT name FROM products WHERE id=$1', prod.products_id)
            prod.productName = name.name;
        }
        // console.log(previousCart);
        let obj = {}; ///IDEA 1  ---> BUT THIS ONLY RETURNS THE FIRST ITEM IN EACH CART
        let array = []
        for(let order of previousCart){
            obj[order.carts_id] = (obj[order.carts_id] || 0) + 1 // { '3': 3, '5': 1 }
            if(obj[order.carts_id] === 1){
                array.push(order);
            }
        }
        console.log(array)  //PROBLEM ----> I GET SEPARATE CARTS BUT THE PRODUCTS ASSOCIATED W/ THE CARTS ARE GONE (WHICH I NEED)

        // console.log(obj)
        // console.log(obj)
        // for(let orderInfo of previousCart){
        //     let objectKeysArr = Object.keys(obj);
        //     console.log('ORDER INFOOO',orderInfo)
        //     console.log('OBJEXT KEYS ARR',objectKeysArr)
        //     let vessel = {};
        //     for(let objKey of objectKeysArr){
        //         if(orderInfo.carts_id === Number(objKey)){
        //             vessel.products += orderInfo.productName;
        //         }
                
        //     }
        // }
    
        // const uniqueCart = []; //IDEA 2 ---> BUT THIS ALSO RETURNS THE FIRST ITEM IN EACH FILERED CART 
        // const unique = previousCart.filter((el) => {
        //     const isDuplicate = uniqueCart.includes(el.carts_id);
        //     if(!isDuplicate){
        //         uniqueCart.push(el.carts_id);
        //         return true;
        //     }
        //     return false
        // })
      
        return array;
    } catch (err){
        return err;
    };
};




const updateCurrentCart = async (customer_id, updateInfo) => {
//** we may have to change the query because it does not account for a cart that has multiple orders*/
    try{
        //use customerID get customers active cart and save in a variable called "cart"
        const updatedCart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);

        // use updatedCart.id to get all order details associated with the cart.id that needs to be updated and save as a variable updateOrderDetailsArr 
        const updatedOrderDetails = await db.one('UPDATE order_details SET quantity=$1 WHERE carts_id=$2 RETURNING *',
        [updateInfo.quantity, updatedCart.customer_id]);
        
        let updatedProduct = await db.one("SELECT name FROM products WHERE id=$1", updatedOrderDetails.products_id);
        return {
            quantity: updateInfo.quantity,
            name: updatedProduct.name
        };
    } catch (err){
        return err;
    };
};




module.exports = { getCurrentCart, getPreviousCarts, updateCurrentCart };