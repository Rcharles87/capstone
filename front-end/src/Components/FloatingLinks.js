import React from 'react'
import bagicon from "../assets/bag.png";
import signupicon from "../assets/standing.png";
import {Link} from 'react-router-dom'
import"../Styles/floatingLinks.css"
import Slideshow from "../Components/Slideshow.js"
import Map from "./Map"

//images
import splashImage1 from "../assets/splashImage1.jpeg";
import splashImage2 from "../assets/splashImage2.jpeg";


let sampleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tincidunt augue, eu rutrum nunc venenatis ut. Donec vel lacinia mi. Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum Praesent sodales tincidunt leo consequat aliquam.Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum.";

const sampleText1 = ""

function FloatingLinks() {
  return (
    <div className='fc-container'>
        <Slideshow/>
        <div id="main-content">
        <div id="sign-up">
          <img src={signupicon} alt="illustration of girl on laptop" />
          <Link to="/signup">
          <h3>Creating real change <br /> Signup today!</h3>
          </Link>
        </div>
        <div id="faq">
          <img src={bagicon} alt="illustration of green recycle bag" />
          <Link to="faq">
            <h3>Millions meals saved, and counting....!<br /> Click here to learn more about food waste</h3>
          </Link>
          {/* <h1>Sign Up</h1> */}
        </div>
        {/* <div id="faq">
          <img src={bagicon} alt="illustration of green recycle bag" />
          <h1>Faq</h1>
        </div> */}
        <div className='map-container'>
          <h1>Restaurants near me</h1>
        <Map />
        </div>
        <div id="veggies-img">
          <img src={splashImage1} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text">{sampleText}</div>
        <div id="veggies2-img">
          <img src={splashImage2} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text2">{sampleText}</div>
      </div>
    </div>
  )
}

export default FloatingLinks