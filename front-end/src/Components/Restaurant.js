import React from 'react';
import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';

function Restaurant( {singleRestaurant} ) {

  return (
    <div className='restaurant-container'>
        <div className='restaurant-data'>
            <div className='r-name'>
                {singleRestaurant.name} 
            </div>
            <div className='r-add'>
                {singleRestaurant.add}
            </div>
            <div className='r-type'>
                {singleRestaurant.cuisine_type}
            </div>
            <button><Link to={`/restaurant/${singleRestaurant.id}`}>View</Link></button>
        </div>
    </div>
  )
}

export default Restaurant