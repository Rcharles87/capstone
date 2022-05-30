import React from 'react'
import veggies from "../assets/veggies.jpg";
import veggies2 from "../assets/veggies2.jpg";
import bagicon from "../assets/bag.png";
import signupicon from "../assets/standing.png";
import {Link} from 'react-router-dom'
import"../Styles/floatingLinks.css"
import Slideshow from "../Components/Slideshow.js"

let sampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper tincidunt augue, eu rutrum nunc venenatis ut. Donec vel lacinia mi. Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum Praesent sodales tincidunt leo consequat aliquam.Sed ac fringilla leo, a luctus ligula. Curabitur diam sapien, consectetur eu convallis placerat, tempor rhoncus lectus. In tempor vehicula vestibulum.";


function FloatingLinks() {
  return (
    <div className='fc-container'>
        <Slideshow/>
        <div id="main-content">
        <div id="sign-up">
          <img src={signupicon} alt="illustration of girl on laptop" />
          <Link to="/signup">
          <h3>Dont make it a tuff decision <br /> signup today!!!</h3>
          </Link>
        </div>
        <div id="faq">
          <img src={bagicon} alt="illustration of green recycle bag" />
          <Link to="faq">
            <h3>Check out our faq's,<br />find out more about food waste,<br /> and how you can help</h3>
          </Link>
          {/* <h1>Sign Up</h1> */}
        </div>
        {/* <div id="faq">
          <img src={bagicon} alt="illustration of green recycle bag" />
          <h1>Faq</h1>
        </div> */}
        <div id="veggies-img">
          <img src={veggies} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text">{sampleText}</div>
        <div id="veggies2-img">
          <img src={veggies2} alt="vegetables in a basket" />
        </div>
        <div id="main-content-text2">{sampleText}</div>
      </div>
    </div>
  )
}

export default FloatingLinks