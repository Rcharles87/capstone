import React from 'react'
import "./hero.scss"

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <p>Find restaurants near you</p>
        <label htmlFor="search"></label>
        <input 
        id='search'
        type="text" 
        placeholder='Enter Zip Code'/>
      </div>
    </div>
  )
}

export default Hero