import "../Styles/home.css";
import FloatingLinks from "../Components/FloatingLinks";
import Splash from "../Components/Splash";
import Restaurants from "../Components/Restaurants";
import Map from "../Components/Map";
import { useState } from "react";

function Home({ loginText }) {
  const [isChecked, SetIsChecked] = useState(false);

  const handleCheckChange = () => {
    SetIsChecked(!isChecked);
  };

  return (
    <div>
      {loginText === false ? (
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
            <div>

            <Restaurants />
            </div>
          )}

        </div>
      )}
    </div>
  );
}

export default Home;
