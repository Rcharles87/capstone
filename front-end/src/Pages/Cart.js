import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Cart() {

    const [carts, setCarts] = useState([]);

    useEffect(()=>{
        axios.get(`${API}/carts/1/active`)
        .then((res)=>{
          console.log(res)
            setCarts(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    console.log(carts)

  return (
      null
  )
}

export default Cart