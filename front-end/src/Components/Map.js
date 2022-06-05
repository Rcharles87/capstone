import "../Styles/map.css";
import React from "react";
import axios from "axios";
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const API = process.env.REACT_APP_API_URL;

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
  
      // console.log(restaurants);

      // const linkToRestaurant = () => {
      //   return(
      //     <div>
      //       <Link style={{ textDecoration: 'none', color: 'black' }} key={restaurants.id} to={`/restaurants/${restaurants.id}`} >Order Now</Link>
      //     </div>
      //   )
      // };

  return(
    <div  className="map-container">
      
      
      {/* <h4 id="map-heading">Restaurant Locator</h4>
      <p>Find a participating retailer near you (must be eligible)</p> */}

      <MapContainer className="map" center={[40.756211, -73.923964]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        {restaurants.map(restaurant => (
          <Marker 
              key={restaurant.id}
              position={[restaurant.lat, restaurant.lon]}
              icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
            <Popup>
                <img id="restaurant-sprite" src={restaurant.restaurant_sprites} />
                <h1>{restaurant.name}</h1>
                <p><em>{restaurant.cuisine_type}</em></p>
                <p>{restaurant.add}</p>
                <Link style={{ textDecoration: 'none', color: 'black' }} key={restaurant.id} to={`/restaurant/${restaurant.id}`}><button>Order Now</button></Link>
            </Popup>
          </Marker>
        ))}
        console.log(restaurant)
      </MapContainer>
    </div>
    )
};


export default Map;