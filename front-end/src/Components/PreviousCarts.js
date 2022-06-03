import axios from "axios";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/previousCarts.css";
import PreviousCart from "./PreviousCart";
const API = process.env.REACT_APP_API_URL;

function PreviousCarts() {
  const [oldCarts, setOldCarts] = useState([]);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${API}/carts/${userID}/inactive`)
      .then((res) => {
        // console.log(res.data)
        setOldCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);
  // console.log("trigger",oldCarts)

  let previousOrders = oldCarts.map((cart) => {
    return (
      <div className="info-container" key={cart.orderNum}>
          <div> <h3>Restaurant: {cart.restaurants} </h3></div>
          
          {cart.items.map((products)=>{
              // console.log(products)
              return(
                  <div key={products.id}>
                      <div className="info-name">Meal Type: {products.name}</div>
                      <div className="info-quantity">Quantity: {products.quantity}</div>
                  </div>
              )
          })}
      </div>
    );
  });
  

  return (
    <div className="po-container">
      <h1>Previous Orders</h1>
      <hr />
      {oldCarts.length < 1 ? (
        <div className="noCurrentOrder-text">
          you have no current orders
        </div>) : (
          <div>{previousOrders}</div>
        )}
    </div>
  );
}

export default PreviousCarts;
