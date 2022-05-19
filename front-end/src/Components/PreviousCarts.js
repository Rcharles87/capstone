import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/previousCarts.css"
import PreviousCart from "./PreviousCart";
const API = process.env.REACT_APP_API_URL;


function PreviousCarts() {
    
    const [oldCarts, setOldCarts] = useState([]);
    const userID =localStorage.getItem("userID")

    useEffect(()=>{
        axios.get(`${API}/carts/${userID}/inactive`)
        .then((res)=>{
            setOldCarts(res.data)
        }).catch((err)=>{
            console.log(err)
        })

    },[userID]);


    let displayOldOrders = []
    let orderContents = []


    for (let oldCart of oldCarts){
        // console.log(oldCart)
            displayOldOrders.push(oldCart[0].restaurant, oldCart[0].orderNum)  
            orderContents.push(oldCart) 
    }

    // console.log(orderContents)

  return (
    <div >

        <h1>Previous Orders</h1>
        <div className="info-container">
        {displayOldOrders}
        <PreviousCart orderContents={orderContents}/>
        </div>
    </div>
  )
}

export default PreviousCarts