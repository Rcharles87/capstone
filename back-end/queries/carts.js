const db = require("../db/dbConfig.js");

const getCurrentCart = async (customer_id) => {
  try {
    //use customerID get customers active cart and save in a variable called "cart"
    // const cart = await db.one("SELECT * FROM carts WHERE customer_id=$1 AND is_active=true", customer_id);
    //use cart.id to get all order_details associated with carts_id and save in a variable "orderDetailsArr"

    const cartDetailsArr = await db.any(
      "SELECT * FROM order_details WHERE carts_id=(SELECT id FROM carts WHERE customer_id=$1 AND is_active=TRUE)",
      customer_id
    );

    const productsArr = [];
    //loop through "orderDetailsArr" create a query for each element and match products_id to id in the Products table
    for (let cartDetail of cartDetailsArr) {
      let productName = await db.one(
        "SELECT name FROM products WHERE id=$1",
        cartDetail.products_id
      );
      productsArr.push(productName.name);
    }
    //choose needed info & return into an array of objects
    return cartDetailsArr.map((el, index) => {
      return {
        quantity: el.quantity,
        name: productsArr[index],
      };
    });
  } catch (err) {
    return err;
  }
};

const getPreviousCarts = async (customer_id) => {
  try {
    const previousCarts = await db.any("SELECT * FROM carts WHERE customer_id=$1 AND is_active=false", customer_id);
    // console.log(previousCarts);
    const allCartsDetailsArr = []
    for (let previousCart of previousCarts){
        const cartDetail = await db.any("SELECT * FROM order_details WHERE carts_id=$1", previousCart.id);
        // console.log(cartDetail)
          const productsArr = [];
    for (let Detail of cartDetail) {
      let productName = await db.one(
        "SELECT name FROM products WHERE id=$1",
        Detail.products_id
      );
      productsArr.push(productName.name);
    }
     let newCart = cartDetail.map((el, index) => {
      return {
        quantity: el.quantity,
        name: productsArr[index],
      };
    });
    allCartsDetailsArr.push(newCart)
    }







    // const previousCarts = await db.any(
    //   "SELECT products.id, products.name, order_details.carts_id, carts.id, carts.customer_id, carts.is_active FROM (products INNER JOIN order_details ON products.id=order_details.products_id) INNER JOIN carts ON order_details.carts_id=carts.id WHERE carts.is_active=false AND carts.customer_id=$1;",
    //   customer_id
    // );
    return allCartsDetailsArr;

  } catch (err) {
    return err;
  }
};

const updateCurrentCart = async (customer_id, updateInfo) => {
  //** we may have to change the query because it does not account for a cart that has multiple orders*/
  try {
    //use customerID get customers active cart and save in a variable called "cart"
    const updatedCart = await db.one(
      "SELECT * FROM carts WHERE customer_id=$1 AND is_active=true",
      customer_id
    );

    // use updatedCart.id to get all order details associated with the cart.id that needs to be updated and save as a variable updateOrderDetailsArr
    const updatedOrderDetails = await db.one(
      "UPDATE order_details SET quantity=$1 WHERE carts_id=$2 RETURNING *",
      [updateInfo.quantity, updatedCart.customer_id]
    );

    let updatedProduct = await db.one(
      "SELECT name FROM products WHERE id=$1",
      updatedOrderDetails.products_id
    );
    return {
      quantity: updateInfo.quantity,
      name: updatedProduct.name,
    };
  } catch (err) {
    return err;
  }
};

module.exports = { getCurrentCart, getPreviousCarts, updateCurrentCart };
