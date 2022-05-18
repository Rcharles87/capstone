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

    for (let oldCart of oldCarts){
        const cart = oldCart.map((detail)=>{
            return (
                <div>
                    <div>{detail['order#']}</div>
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
        {displayOldOrders}
    </div>
  )
}

export default UserProfile