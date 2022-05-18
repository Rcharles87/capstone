import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;


function UserProfile() {
    
    const [oldCarts, setOldCarts] = useState([]);
    const userID =localStorage.getItem("userID")

    useEffect(()=>{
        axios.get(`${API}/carts/${userID}/inactive`)
        .then((res)=>{
            console.log(res.data)
            setOldCarts(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[userID]);
    let displayOldOrders = []
    let restaurantName = ""

    console.log(oldCarts)
    for (let oldCart of oldCarts){
        const cart = oldCart.map((detail)=>{
            return (
                <div>  
                    <div>{oldCart.orderNum}
                    <div>{detail.restaurant}</div>

                    </div>
                    <div>
                    {detail.name}
                    {detail.quantity}
                    </div>
                </div>
            )
        })
        displayOldOrders.push(cart)
    }


  return (
    <div>
        <h1>Previous Orders</h1>
        {displayOldOrders}
    </div>
  )
}

export default UserProfile