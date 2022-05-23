import React, { useEffect, useState } from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import restaurantStockImage from '../assets/restaurantStockImage.jpeg';

const API = process.env.REACT_APP_API_URL;

function RestaurantDetails() {
    const [restaurant, setRestaurant ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`${API}/restaurants/${id}`)
            .then((res) => {
                setRestaurant(res.data);
            }).catch((err) => console.log(err))
    }, [id])

  return (
    <div>
        <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.cuisine_type}</div>
            <div>{restaurant.add}</div>
            <img style={{height:'200px'}} src={restaurantStockImage} alt='restaurant stock'/>
        </div>
        <div className='button-link'>
            <Link to={`/restaurants`}>
                <button>Go Back</button>
            </Link>
        </div>
    </div>
  )
  
}

export default RestaurantDetails