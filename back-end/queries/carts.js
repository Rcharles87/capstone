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
        //use customer_ID get a customer’s inactive cart and save in a variable called “previousCarts”
        const previousCarts = await db.any("SELECT * FROM carts WHERE customer_id=$1 AND is_active=false", customer_id);
        const previousOrderDetailsArr = [];
        // use previousCart.id to get all order details associated with previous cart.id and save as a variable previousOrderDetailsArr 
        for(let previousCart of previousCarts){
            let previousOrderDetails = await db.any("SELECT * FROM order_details WHERE carts_id=$1", previousCart.id);
            // console.log("order:", previousOrderDetails);
            previousOrderDetailsArr.push(previousOrderDetails);
        };
        // console.log('previous order deets',previousOrderDetailsArr);

        // [
        //     [
        //       { carts_id: 3, products_id: 1, quantity: 1 },
        //       { carts_id: 3, products_id: 2, quantity: 1 },
        //       { carts_id: 3, products_id: 3, quantity: 4 }
        //     ],
        //     [ { carts_id: 5, products_id: 1, quantity: 1 } ]
        // ]

        // [
        //     [ 'vegan', 'gluten free', 'non-dairy' ],
        //     ['vegan']
        // ]

        // []
        const array = []
        const array2 = []
        for(let i=0; i<previousOrderDetailsArr.length; i++){
            for(let j=0; j<previousOrderDetailsArr[i].length; j++){
                // let productName = ''
                // array2.push()
                
                
                //CREATE an if statement that can keep track of i whatwhere ///
                if(i !== i+1){
                    let productName = await db.one("SELECT name FROM products WHERE id=$1", previousOrderDetailsArr[i][j].products_id);
                    console.log(i,j,'PRODUCT NAME',productName);
                    array2.push(productName.name)
                }else{
                    console.log('i',i, 'j',j)
                }
                // console.log('ARRAY',array2)
            }
            array.push(array2)
            // console.log('ARRAY NAME',array2)
            // console.log(array2)
            // array.push(array2)
            console.log('array Int',array)
        }
        // console.log(`fdka`, array) 

        // console.log(previousOrderDetailsArr)
        // previousOrderDetailsArr.map((element, index) => [
        // ])
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