import React from 'react'
import "./hero.scss"
import { TextField } from '@mui/material'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <p>Find restaurants near you</p>
        {/* <TextField sx={{backgroundColor: "white", borderRadius: "25px"}} variant='outlined' defaultValue="Enter Zip Code"/> */}
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