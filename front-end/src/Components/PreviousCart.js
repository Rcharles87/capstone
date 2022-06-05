import React from 'react'
import axios from "axios";
import "../Styles/previousCart.css"
import { useState, useEffect } from "react";
import { useParams , useNavigate} from 'react-router-dom';



const API = process.env.REACT_APP_API_URL;


function PreviousCart() {

  const [oldCarts, setOldCarts] = useState([]);
  const userID = localStorage.getItem("userID");
  let {id} = useParams()
  const navigate = useNavigate();


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

  const handleGoBack = () =>{
    navigate("/carts/inactive")
  }

  let previousOrder = oldCarts.find((cart) => cart.orderNum == id );
  console.log(previousOrder)
  let previousOrderInfo = previousOrder?.items.map((item)=>{
    return(
      <div className="info-container" key={item.id}>
      <div className="info-name">Meal Type: {item.name}</div>
      <div className="info-quantity">Quantity: {item.quantity}</div>
      </div>
    )
  })

  return (
    <div>
      <button className="previous-btn" onClick={handleGoBack} >Go Back</button>
    <div className="previous-order-container">
      <h1>{previousOrder?.restaurants}</h1>
      <hr />
      <div className="order-info">
      {previousOrderInfo}
      </div>
    </div>
    </div>
  )
}

export default PreviousCart