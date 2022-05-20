import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Restaurants() {
  const [ restaurants, setRestaurants ] = useState([]);
  useEffect(() => {
    axios.get(`${API}/restaurants`)
    .then((res) => {
      setRestaurants(res.data)
    }).catch((err) => console.log(err))
  })

  return (
    <div>Restaurants</div>
  )
}

export default Restaurants