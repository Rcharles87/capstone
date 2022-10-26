import React from 'react';
// import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';
import './restaurant.scss'

function Restaurant( {singleRestaurant} ) {

  return (

    <div className='restaurant'>
    <div className='restaurant__container'>
      <Link to={`/restaurant/${singleRestaurant.id}`}>
        <div className='restaurant__container__imageContainer'>
           <img src={singleRestaurant.restaurant_sprites} alt='restaurant stock' /> 
        </div>
        <div className='restaurant__container__textContainer'>
            <h2>{singleRestaurant.name}</h2>
            <h3>{singleRestaurant.cuisine_type}</h3>
            <p>{singleRestaurant.add}</p>
        </div>
      </Link>
    </div>
</div>
  )
}

export default Restaurant