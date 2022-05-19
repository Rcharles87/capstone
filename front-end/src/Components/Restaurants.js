import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/restaurantView.css"
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
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
    <div  className="restaurant-div-2">
      {restaurants.map(restaurant => {
        return(
          <div className="restaurants-container">
            <img src="https://cdn.vox-cdn.com/thumbor/ohgyN-xNXbrcBXWfBYpHs6Ou83I=/0x0:4032x3024/1200x800/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/68667363/zabars.0.jpg" />
            <h1>{restaurant.name}</h1>
            <p><b>{restaurant.cuisine_type}</b></p>
            <p>{restaurant.add}</p>
            </div>
        )
      })}
      <h1>map</h1>
      <MapContainer className="restaurant-div-1" center={[40.799010, -73.924190]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {restaurants.map(restaurant => (
      <Marker key={restaurant.id}  position={[restaurant.lat, restaurant.lon]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
        <Popup>
          <h1>{restaurant.name}</h1>
          <p><b>{restaurant.cuisine_type}</b></p>
          <p>{restaurant.add}</p>
          <button>Available MealKits</button>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
    </div>
  )
};


export default Restaurants;