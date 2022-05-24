import React from 'react';
import '../Styles/Restaurant.css';
import { Link } from 'react-router-dom';



import restaurantStockImage from '../assets/restaurantStockImage.jpeg';



function Restaurant( {singleRestaurant} ) {


  return (
    <div className='restaurant-container'>
            <Link className='restLink' to={`/restaurant/${singleRestaurant.id}`}>

        <div className='restaurant-data'>
        <img style={{maxHeight:'200px'}} src={restaurantStockImage} alt='restaurant stock'/>

            <div className='r-name'>
               <span> {singleRestaurant.name} ({singleRestaurant.add})</span>
            </div>
            <div className='r-type'>
                {singleRestaurant.cuisine_type}
            </div>
           
        </div>
        </Link>
    </div>
  )
}

export default Restaurant