import "../Styles/cart.css";
import axios from "axios";
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function Cart({ carts, setCarts }) {
  // const [carts, setCarts] = useState([]);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${API}/carts/${userID}/active`)
      .then((res) => {
        // console.log(res.data)
        setCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);

  const activeCart = carts.map((product) => {
    return (
      <div className="active-cart">
        <div id="order-details">
          <div id="restaurant-name">{product.restaurant}</div>
          <div id="order-num">Order: #{product.orderNumber}</div>
          {product.items.map((item) => {
            return (
              <div id="single-meal">
                <div id="meal-img">
                  <img
                    id="food-img"
                    src={"https://i.imgur.com/JRd96AZ.png"}
                    alt="food icon"
                  />
                </div>
                <div id="meal-name">
                  Meal Kit: {item.name}
                  <div id="quantitiy">Quantity: {item.quantity} </div>
                  <button>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="cart-container">
      <div>
        {activeCart}
        <button>Delete Current Order</button> 
      </div>
    </div>
  );
}

export default Cart;