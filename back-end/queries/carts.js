const db = require("../db/dbConfig.js");

const getCurrentCart = async (customer_id) => {
  try {
    //use customerID get customers active cart and save in a variable called "cart"
    // const cart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
    //use cart.id to get all order_details associated with carts_id and save in a variable "orderDetailsArr"

    // const cartDetailsArr = await db.any(
    //   "SELECT * FROM order_details WHERE carts_id=(SELECT id FROM carts WHERE customer_id=$1 AND is_active=TRUE)",
    //   customer_id
    // );

    // const productsArr = [];
    //loop through "orderDetailsArr" create a query for each element and match products_id to id in the Products table
    // for (let cartDetail of cartDetailsArr) {
    //   let productName = await db.one(
    //     "SELECT name FROM products WHERE id=$1",
    //     cartDetail.products_id
    //   );
    //   productsArr.push(productName.name);
    // }
    //choose needed info & return into an array of objects
    // return cartDetailsArr.map((el, index) => {
    //   return {
    //     quantity: el.quantity,
    //     name: productsArr[index],
    //   };
    // });

    const currentCart = await db.any(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=true",
      customer_id
    );
    const currentCartDetailArr = []; //? 


    for(let cart of currentCart){
      const cartDetail = await db.any("SELECT * FROM order_details WHERE carts_id=$1", cart.id);
      // console.log("trigger getting curr cart",cartDetail);
      const productsArr = [];
      // console.log(cartDetail);
      if(cartDetail.length >= 1){
        for(let detail of cartDetail){
          let product = await db.one("SELECT * FROM products WHERE id=$1", detail.products_id);
          productsArr.push({...product, quantity:detail.quantity});
        };
  
        const restaurantsArr =[];
  
        for(let product of productsArr){
          let restaurantName = await db.one("SELECT name FROM restaurants WHERE id=$1", product.restaurant_id);
          restaurantsArr.push(restaurantName);
        };
  
        currentCartDetailArr.push({
          orderNumber: cart.id,
          items: productsArr.map((item)=>({
            name: item.name,
            id: item.id,
            quantity: item.quantity
          })),
          restaurant: restaurantsArr[0].name
        });
      }else{
        currentCartDetailArr.push({
          orderNum: cart.id,
          items: [],
          restaurant: ""
        })
      }
    };
    return currentCartDetailArr;
  } catch (err) {
    return err;
  }
};

const getPreviousCarts = async (customer_id) => {
  const allCartsDetailsArr = [];
  
  try {
    const previousCarts = await db.any(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=false",
      customer_id
    );

    for (let previousCart of previousCarts) {
      const cartDetail = await db.any(
        "SELECT * FROM order_details WHERE carts_id=$1",
        previousCart.id
      );

      const productsArr = [];

      for (let detail of cartDetail) {
        let product = await db.one(
          "SELECT * FROM products WHERE id=$1",
          detail.products_id
        );
        productsArr.push({...product, quantity:detail.quantity});
      }
      console.log(productsArr)

      const restaurantsArr = [];
      for (let product of productsArr) {
        let restaurantname = await db.one(
          "SELECT name FROM restaurants WHERE id=$1",
          product.restaurant_id
        );
        restaurantsArr.push(restaurantname);
      }
      // console.log("trigger",productsArr)
      allCartsDetailsArr.push({
        orderNum: previousCart.id,
        items: productsArr.map((item)=> ({
          name: item.name,
          id: item.id,
          quantity: item.quantity
        })),
        restaurants: restaurantsArr[0].name
      });
      
      // console.log(allCartsDetailsArr)
      // console.log("trigger",restaurantsArr)
    }
    // console.log("****")

    // console.log(allCartsDetailsArr)
    // const previousCarts = await db.any(
    //   "SELECT products.id, products.name, order_details.carts_id, carts.id, carts.customer_id, carts.is_active FROM (products INNER JOIN order_details ON products.id=order_details.products_id) INNER JOIN carts ON order_details.carts_id=carts.id WHERE carts.is_active=false AND carts.customer_id=$1;",
    //   customer_id
    // );
    return allCartsDetailsArr;
  } catch (err) {
    console.log(err);
  }
};

const updateCurrentCart = async (body) => {

  try {
    //use customerID get customers active cart and save in a variable called "cart"
    let updatedCart = await db.any(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=true",
      body.userID
    ); 



    if(updatedCart.length < 1){
      updatedCart = [ await createNewCart(body.userID)]
    }
   
    const updatedOrderDetails = await db.one(
      "INSERT INTO order_details (carts_id, products_id, quantity) VALUES ($1, $2, $3) RETURNING *",
      [updatedCart[0].id, body.productID, 1]
    );
    
    // console.log("check order details", updatedOrderDetails)
    return updatedOrderDetails;
    // let updatedProduct = await db.one(
    //   "SELECT name FROM products WHERE id=$1",
    //   updatedOrderDetails.products_id
    // );
    // return {
    //   quantity: updateInfo.quantity,
    //   name: updatedProduct.name,
    // };
  } catch (err) {
    console.log(err);
  }
};


const createNewCart = async (customer_id) => {
  try{
    const newCart = await db.one("INSERT INTO carts (customer_id, is_active) VALUES ($1, TRUE) RETURNING *",customer_id);
    return newCart;
  }catch(err){
    return err;
  }
}


const deleteProductFromCart = async (customer_id,products_id) => {
  try{
    const getActiveCart = await db.one(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=true",
      customer_id);

      const deletedProduct = await db.one("DELETE FROM order_details WHERE products_id=$1 RETURNING *", products_id);
      return deletedProduct
  }catch(err) {
    return err;
  }
};

const submitCheckedOutCart = async (customer_id) => {
  try{
    const activeCart = await db.one(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=true",
      customer_id
    );
    const setInactiveCart = await db.one("UPDATE carts SET is_active=FALSE WHERE id=$1 RETURNING *", activeCart.id);
    if(setInactiveCart.is_active === false){
      const newCart = createNewCart(customer_id);
      return newCart;
    }else{
      return {Error: "Cart is still active, query did not change active status"}
    }
  }catch(err){
    return err;
  }
}

module.exports = { getCurrentCart, getPreviousCarts, createNewCart, updateCurrentCart, deleteProductFromCart, submitCheckedOutCart };
