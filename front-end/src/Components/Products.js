import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Map from "./Map";

const API = process.env.REACT_APP_API_URL;

function Products(){
  let navigate = useNavigate();
  const [products, setProducts ] = useState([]);  
  
  useEffect(() => {
    axios.get(`${API}/products`)
    .then((res) => {
      setProducts(res.data);
    },
    (error) => console.log("get", error)
    )
    .catch((c) => console.warn("catch", c))
  }, [])
    
      console.log(products);

    return (
      <div className="products-container">
        {products.map((product, id) => (
          <div className="individual-product">
            <img id="product-image" src="https://i.imgur.com/JRd96AZ.png"></img>
              <Link style={{ textDecoration: 'none', color: 'black' }} key={product.restaurant_id} to={`/products/${product.restaurant_id}`}>
                <h3>{product.description}</h3>
                <b><em>{product.type}</em></b>
                <p>Portion: {product.portion}</p>
                <p>Calories: {product.calories}</p>
                <button>Take me to this restaurant!</button>
              </Link>
            </div>
        ))}
        <Map />
      </div>
  )
};

export default Products;