import { useState } from "react";
import "../Styles/home.css";
import FloatingLinks from "../Components/FloatingLinks";
import Restaurants from "../Components/Restaurants";
import Map from "../Components/Map";
import FilterBar from "../Components/FilterBar";
import CarouselComp from "../Components/CarouselComp";
import Hero from "../Components/Hero";


function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };



  return (
   
    <div className="home-container">
      {!localStorage.getItem("userID") ? (
        // <div className="logged-out-container">
        <>
          <Hero/>
          <FloatingLinks/>
        </>

        // </div>
      ) : (
        <div className="mapView">
          <input
            type="checkbox"
            className="mapView"
            id="map-view"
            name="map-view"
            value="map-view"
            checked={isChecked}
            onChange={handleCheckChange}
          />Map View
          {isChecked ? (
            <div>
              <Map/>
            </div>

          ):(
            <div className="loggedInDisplay-container">
              <div className="f-container">
                <FilterBar />
              </div>
              <div className="c-container">
                <CarouselComp/>
              </div>

              <div className="r-container"> 
                <Restaurants />
              </div>
              
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
