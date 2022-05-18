import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const API = process.env.REACT_APP_API_URL;
console.log(API);

function Restaurants(){
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios.get(`${API}/restaurants`)
      .then((res) => {
        setRestaurants(res.data);
    },
    (error) => console.log("get", error)
    )
    .catch((c) => console.warn("catch", c))
  }, []);
  
  console.log(restaurants);
  
  return(
    <div id="map">
      <MapContainer center={[40.7128, -74.0060]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {restaurants.map(restaurant => (

      <Marker 
      key={restaurant.id}
      position={[restaurant.lat, restaurant.lon]}>
        <Popup>
        <h1>{restaurant.name}</h1>
        </Popup>
      </Marker>
    ))}
  </MapContainer>

    </div>
  )
};


export default Restaurants;