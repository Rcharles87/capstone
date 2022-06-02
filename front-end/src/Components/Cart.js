import "../Styles/cart.css";
import axios from "axios";
import CancelIcon from '@mui/icons-material/Cancel';
import food_container from "../assets/food_container.png"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Cart({ carts, setCarts, setCheckedOut}) {
  
  // console.log(carts)
  const userID = localStorage.getItem("userID");
  // const activeCart_id = carts[0].orderNumber;


  useEffect(() => {
    axios
      .get(`${API}/carts/${userID}/active`)
      .then((res) => {
        console.log(res.data)
        if(res.data.Error){
          console.log("add things to thecart ");
        }else{
          setCarts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userID]);

  const handleDelete = (item) => {
    console.log("delete!", item)
    axios.delete(`${API}/customers/${userID}/deleteItem`)
    .then((res) => {
      window.alert("The item has been removed")
    })
    .catch((err) =>{
      console.log(err);
    });
  };
  // console.log({userID})
  const handleCheckout = () => {
    console.log("checkout ")
    axios.put(`${API}/carts/submit`, {userID})
    .then((res) => {
      
    })
    .catch((err) => {
      console.log(err)
    })
    setCheckedOut(true);
  }


  const activeCart = carts?.map((product) => {
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
                  <button onClick={()=>handleDelete(item)}>Delete</button>
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
        {activeCart.length < 1 ? (
          <div>          
          <Link to="/"> Start your order </Link>
          </div>
          ): (
           <div>{activeCart}
           <button onClick={handleCheckout}>Checkout Current Order</button> </div>
        )}
        
        
      </div>
    </div>
  );
}

export default Cart;