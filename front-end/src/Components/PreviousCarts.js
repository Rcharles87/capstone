import axios from "axios";
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/previousCarts.css";
// import PreviousCart from "./PreviousCart";
const API = process.env.REACT_APP_API_URL;

function PreviousCarts() {
  const [oldCarts, setOldCarts] = useState([]);
  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`${API}/carts/${userID}/inactive`)
      .then((res) => {
        setOldCarts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);
  console.log(oldCarts)

  let previousOrders = oldCarts.map((cart) => {
    return (
      <div className="info-container" key={cart.orderNum}>
          <span> Order Number:{cart.orderNum} {cart.restaurants}</span>
          <br />
          {cart.items.map((products)=>{
              // console.log(products)
              return(
                  <div key={products.id}>
                      {products.name} Quantity: {products.quantity}
                  </div>
              )
          })}
      </div>
    );
  });
  

  return (
    <div className="po-container">
      <h1>Previous Orders</h1>
      <div>{previousOrders}</div>
    </div>
  );
}

export default PreviousCarts;
