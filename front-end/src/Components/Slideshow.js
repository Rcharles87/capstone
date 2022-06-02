import React from "react";
import "../Styles/slideshow.css"

const Slideshow = () => {


  return(
    <div className="container">
  <div className="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/bread_basket_meal_kit.png"></img>
    <span>Baked Goodness</span>
  </div>
  <div className="box">
    <img src="https://www.qwick.com/wp-content/uploads/2021/06/Start-Staff-a-Delivery-Only-Restaurant.jpeg"></img>
    <span>Quality</span>
  </div>
  <div className="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/Brownsville_Community_Culinary_Center_and_Collective_Fare_meal_kit.png"></img>
    <span>Vegan</span>
  </div>
  <div className="box">
    <img src="https://purewows3.imgix.net/images/articles/2020_04/blue_apron_meal_kit.png"></img>
    <span>Meal Kits</span>
  </div>
</div>
  )

};


export default Slideshow;
