import {Link, useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductByRestaurant from "./ProductByRestaurant";

const API = process.env.REACT_APP_API_URL;

function RestaurantDetails() {
    const [restaurant, setRestaurant ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`${API}/restaurants/${id}`)
            .then((res) => {
                setRestaurant(res.data);
            }).catch((err) => console.log(err))
    }, [id])


  return (
    <div>
        <div>
            <div>{restaurant.name}</div>
            <div>{restaurant.cuisine_type}</div>
            <div>{restaurant.add}</div>
        </div>
{<ProductByRestaurant id={id}/>}
        <div className='button-link'>
            <Link to={`/`}>
                <button>Go Back</button>
            </Link>
        </div>
    </div>
  )
  
}

export default RestaurantDetails