// import Map from "./Map";
import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;

function ProductByRestaurant({id}){
  
  const [productByRestaurant, setProductByRestaurant ] = useState([]);
  console.log(productByRestaurant)
  const userId = localStorage.getItem("userID")

useEffect(() => {
  axios.get(`${API}/restaurants/${id}/products`)
  .then((res) => {
    console.log("trigger",res.data);
    setProductByRestaurant(res.data);
},
(error) => console.log("get", error)
)
  .catch((c) => console.warn("catch", c))
}, [id])

  console.log(productByRestaurant);
  
  const handleAddToCart = (product) => {
    const resInfo = {
      userID: +userId,
      productID: product.id,
      restaurantID: product.restaurant_id
    };


    // console.log("API trigger");
    // console.log("Res info", resInfo)

    axios.post(`${API}/carts/addToCart`, resInfo)
      .then(
        () => {
          console.log('api')
        },
        (err) => console.error(err)
      ).catch((err) => console.warn("catch err", err))
  }



    return(
      <div className="products-container">
          {productByRestaurant.map((product, id) => (
            <div className="individual-product">
              <img id="product-image" src="https://i.imgur.com/JRd96AZ.png" alt="mealkit-sprites"></img>
                <div className="product-details">
                  <h1>{product.name}</h1>
                  <p>Portion: <b>{product.portion}</b></p>
                  <p>Calories: <b>{product.calories}</b></p>
                  <p>Dietary options: <b>{product.type}</b></p>
                  <div className="dietary-restrictions">
                    <img id="dietary-sprite" src="https://i.imgur.com/gqdeqpl.png" alt="diet-res"></img>
                    <img id="dietary-sprite" src="https://i.imgur.com/8Lah7WN.jpg" alt="diet-res"></img>
                  </div>
                  <button id="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
            </div>
        ))}
        {/* <Map /> */}
      </div>
    )
};

export default ProductByRestaurant;