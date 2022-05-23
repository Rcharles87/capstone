import Map from "./Map";
import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

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
          {productByRestaurant.map(product => (
          <div className="individual-product">
            <img id="product-image" src="https://i.imgur.com/JRd96AZ.png"></img>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={`/carts`}>
                <h1>{product.type}</h1>
                <p>{product.description}</p>
                <p>Portion: {product.portion}</p>
                <p>Calories: {product.calories}</p>
                <button onClick={AddToCart()}>Add To Cart</button>
              </Link>
            </div>
        ))}
        <Map />
      </div>
    )
};

export default ProductByRestaurant;