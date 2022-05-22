import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import restaurantStockImage from '../assets/restaurantStockImage.jpeg';

const API = process.env.REACT_APP_API_URL;

function RestaurantDetails() {
    const [restaurant, setRestaurant ] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${API}/restaurants/${id}`)
            .then((res) => {
                setRestaurant(res.data);
            }).catch((err) => console.log(err))
    }, [id,API])

  return (
    <div>
        <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.cuisine_type}</div>
            <div>{restaurant.add}</div>
            <img style={{height:'200px'}} src={restaurantStockImage} alt='restaurant stock image'/>
        </div>
    </div>
  )
  
}

export default RestaurantDetails