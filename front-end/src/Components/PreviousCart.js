import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;


function PreviousCart() {

  const [oldCarts, setOldCarts] = useState([]);
  const userID = localStorage.getItem("userID");
  let {id} = useParams()


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

  let previousOrder = oldCarts.find((cart) => cart.orderNum == id );
  console.log(previousOrder)
  let previousOrderInfo = previousOrder?.items.map((item)=>{
    return(
      <div key={item.id}>
      <div className="info-name">Meal Type: {item.name}</div>
      <div className="info-quantity">Quantity: {item.quantity}</div>
      </div>
    )
  })

  return (
    <div>

      <h1>{previousOrder?.restaurants}</h1>
      {previousOrderInfo}
    </div>
  )
}

export default PreviousCart