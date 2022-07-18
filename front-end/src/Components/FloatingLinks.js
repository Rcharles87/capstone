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


let sampleText = "Everyone knows that NYC is the place to go if you want some delicious pizza. I mean they even have their own style of pizza! But, did you know that New York City was the birthplace of pizza in America? Using skills learned from his hometown Naples, Italy, the first pizza in the US was crafted in the heart of Little Italy by Italian baker, Gennaro Lombardi. Fun Fact: Lombardi’s Pizza was established in 1905 and is still around today!"

const sampleText1 = "Did you know that some of America’s best foods were first created in the great city of New York? It’s true! Foods like the all-American hotdog, eggs benedict, red velvet cake, and even chicken & waffles all were invented in New York City! Even popular foods like General Tso’s chicken as well as spaghetti and meatballs got their American start in the Big Apple. While they may not have been invented in New York they certainly became popular in the city before expanding to the rest of the country. Now that’s definitely some food for thought!"

function FloatingLinks() {
  return (
    <div className='homepage-links-container'>
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
        </div>
        {/* <div className='map-container'>
          <h1>Restaurants near me</h1>
          <Map />
        </div> */}
        {/* <div id="veggies-img">
          <img src={splashImage1} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text">{sampleText}</div>
        <div id="veggies2-img">
          <img src={splashImage2} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text2">{sampleText1}</div> */}
      </div>
    </div>
  )
}

export default FloatingLinks