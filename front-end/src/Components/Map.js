import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../Styles/restaurantView.css"
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from "react-router-dom"

const API = process.env.REACT_APP_API_URL;
console.log(API);

function Map(){
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

      const linkToHome = () => {
        return(
          <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/" >Order Now</Link>
          </div>
        )
      }
  
  return(
    <div  className="map-container">
      <MapContainer className="map" center={[40.726424, -73.908822]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        {restaurants.map(restaurant => (
          <Marker 
              key={restaurant.id}
              position={[restaurant.lat, restaurant.lon]}
              icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
                <h1>{restaurant.name}</h1>
                <p><b>{restaurant.cuisine_type}</b></p>
                <p>{restaurant.add}</p>
                <button>{linkToHome()}</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    )
};


export default Map;