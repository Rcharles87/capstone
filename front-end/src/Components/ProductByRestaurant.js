// import Map from "./Map";
import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useEffect, useState } from "react";
import {  Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductByRestaurant({id}){
  
  const [productByRestaurant, setProductByRestaurant ] = useState([]);
  // const { restaurant_id } = useParams();
  console.log(productByRestaurant)
  const cartId =localStorage.getItem("userID")

useEffect(() => {
  axios.get(`${API}/restaurants/${id}/products`)
  .then((res) => {
    console.log("trigger",res.data)
    setProductByRestaurant(res.data);
},
(error) => console.log("get", error)
)
  .catch((c) => console.warn("catch", c))
}, [id])

console.log(productByRestaurant);

    const AddToCart = () => {
      console.log()
    }

    return(
      <div className="products-container">
          {productByRestaurant.map((product, id) => (
            <div className="individual-product">
            <img id="product-image" src="https://i.imgur.com/JRd96AZ.png" alt="cartoon-food"></img>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={`/404`}>
                <h1>{product.name}</h1>
                {/* <p>{product.description}</p> */}
                <p>Portion: <b>{product.portion}</b></p>
                <p>Calories: <b>{product.calories}</b></p>
                <div className="dietary-restrictions">
                  <img id="dietary-sprite" src="https://i.imgur.com/gqdeqpl.png" alt="diet-res"></img>
                  <img id="dietary-sprite" src="https://i.imgur.com/8Lah7WN.jpg" alt="diet-res"></img>
                </div>
              </Link>
              <button id="add-to-cart-btn" onClick={AddToCart}>Add To Cart</button>
            </div>
        ))}
        {/* <Map /> */}
      </div>
    )
};

export default ProductByRestaurant;