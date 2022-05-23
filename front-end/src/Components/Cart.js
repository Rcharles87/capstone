import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Cart() {

    const [carts, setCarts] = useState([]);
    const userID =localStorage.getItem("userID")

    useEffect(()=>{
        axios.get(`${API}/carts/${userID}/active`)
        .then((res)=>{
           setCarts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [userID]);

    console.log("carts",carts)
    const activeCart = carts.map((product)=>{
      return (
        <div>

        <h1>
          {product.name}  {product.quantity}
        </h1>
      
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