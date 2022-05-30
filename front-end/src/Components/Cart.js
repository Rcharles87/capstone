import "../Styles/cart.css";
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';
import food_container from "../assets/food_container.png"
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
      <div key={product.orderNumber} className="active-cart">
        <div id="order-details">
          <div id="restaurant-name">{product.restaurant}</div>
          <div id="order-num">Order: #{product.orderNumber}</div>
          {product.items.map((item) => {
            return (
              <div key={item.id} id="single-meal">
                <button><CancelIcon/></button>
                <div id="meal-img">
                  <img
                    id="food-img"
                    src={food_container}
                    alt="food icon"
                  />
                </div>
                <div id="meal-name">
                  Meal Kit: {item.name}
                  <div id="quantitiy">Quantity: {item.quantity} </div>
                </div>
                <hr />
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