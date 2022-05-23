import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import '../Styles/Restaurants.css';
import Restaurant from './Restaurant';

const API = process.env.REACT_APP_API_URL;

function Restaurants() {
  const [ restaurants, setRestaurants ] = useState([]);

  useEffect(() => {
    axios.get(`${API}/restaurants`)
    .then((res) => {
      setRestaurants(res.data)
    }).catch((err) => console.log(err))
  }, [])



  return (
    <div className='all-restaurants-container'>
      {restaurants.map((restaurant) => {
        return <Restaurant key={restaurant.id} singleRestaurant={restaurant}/>
      })}
    </div>
  )
}

export default Restaurants