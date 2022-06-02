import "../Styles/home.css";
import FloatingLinks from "../Components/FloatingLinks";
import Splash from "../Components/Splash";
import Restaurants from "../Components/Restaurants";
import Map from "../Components/Map";
import { useState } from "react";
import FilterBar from "../Components/FilterBar";
import CarouselComp from "../Components/CarouselComp";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };



  return (
    <div>
      {!localStorage.getItem("userID") ? (
        <div className="home-container">
          <Splash />
          <FloatingLinks />
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
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
