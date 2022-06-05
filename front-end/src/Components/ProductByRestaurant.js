// import Map from "./Map";
import React from "react";
import axios from "axios";
import "../Styles/products.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const API = process.env.REACT_APP_API_URL;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(205, 238, 239, 1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ProductByRestaurant({id}){


  const navigate = useNavigate();
  const [productByRestaurant, setProductByRestaurant ] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userId = localStorage.getItem("userID")

useEffect(() => {
  axios.get(`${API}/restaurants/${id}/products`)
  .then((res) => {
    // console.log("trigger",res.data);
    setProductByRestaurant(res.data);
},
(error) => console.log("get", error)
)
  .catch((c) => console.warn("catch", c))
}, [id])

  
  const handleAddToCart = (product) => {
    const resInfo = {
      userID: +userId,
      productID: product.id,
      restaurantID: product.restaurant_id
    };


    axios.post(`${API}/carts/addToCart`, resInfo)
      .then(
        () => {

        },
        (err) => console.error(err)
        ).catch((err) => console.warn("catch err", err))
  }
  
  const handleGoToCart = () => { 
    navigate("/carts")
  }



    return(
      <div className="products-container">
          {productByRestaurant.map((product, index) => (
            <div key = {index} className="individual-product">
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
                  <button  id="add-to-cart-btn" onClick={() => {handleAddToCart(product); handleOpen();}}>Add To Cart</button>
                </div>
            </div>
        ))}
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Added to cart 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button className="modal-button" onClick={handleGoToCart}>Go to cart</button>
          </Typography>
        </Box>
      </Modal>

      </div>
    )
};

export default ProductByRestaurant;