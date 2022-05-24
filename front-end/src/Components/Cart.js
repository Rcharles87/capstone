import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Cart({carts, setCarts}) {
  // const [carts, setCarts] = useState([]);

    const userID =localStorage.getItem("userID")


    useEffect(()=>{
        axios.get(`${API}/carts/${userID}/active`)
        .then((res)=>{
          // console.log(res.data)
           setCarts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [userID]);

    const activeCart = carts.map((product)=>{
      return (
        <div>
          {product.orderNumber}
          {product.restaurant}
          {product.items.map((item) => {
            return (<div>{item.name} {item.quantity}</div>)
          })}
        </div>
      )
    })

  return (
      <div>
        {activeCart}
      </div>
  )
}

export default Cart