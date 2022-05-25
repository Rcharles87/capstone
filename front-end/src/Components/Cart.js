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
      <div>
        <img
          id="food-icon"
          src={"https://i.imgur.com/JRd96AZ.png"}
          alt="food icon"
        />
        <div>Order: #{product.orderNumber}</div>
        <div>Restaurant: {product.restaurant}</div>
        <div>
          {product.items.map((item) => {
            return (
              <div>
                Meal: {item.name} {item.quantity}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="cart-container">
      <div id="active-cart">{activeCart}</div>
    </div>
  );
}

export default Cart;
