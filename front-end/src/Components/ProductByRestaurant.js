import Map from "./Map";
import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ProductByRestaurant(){
  
  const [productByRestaurant, setProductByRestaurant ] = useState([]);
  const { restaurant_id } = useParams();

useEffect(() => {
  axios.get(`${API}/products/${restaurant_id}`)
  .then((res) => {
    setProductByRestaurant(res.data);
},
(error) => console.log("get", error)
)
  .catch((c) => console.warn("catch", c))
}, [restaurant_id])

console.log(productByRestaurant);

    const AddToCart = () => {
      console.log("AddToCart");
    }

    return(
      <div className="products-container">
          {productByRestaurant.map((product, id) => (
            <div className="individual-product">
            <img id="product-image" src="https://i.imgur.com/JRd96AZ.png" alt="cartoon-food"></img>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={`/404`}>
                <h1>{product.type}</h1>
                <p>{product.description}</p>
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
        <Map />
      </div>
    )
};

export default ProductByRestaurant;