import { Routes , Route } from 'react-router-dom';
import { useState } from "react";
import './App.css';

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/HomePage';
import CurrentCart from './Pages/CurrentCart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserView from './Pages/UserView';
import FourOFour from './Pages/Four0Four';
import Map from './Components/Map';
import Restaurants from './Components/Restaurants';
import RestaurantDetails from './Components/RestaurantDetails';
import Products from './Components/Products';
import ProductByRestaurant from './Components/ProductByRestaurant';


function App() {

  const [loginText, setLoginText] = useState(false);

  return (
    <div className="main">
      <NavBar  setLoginText={setLoginText}/>
      <Routes>
        <Route path="*" element={<FourOFour />} />
        <Route path="/" element={<Home loginText={loginText}/>}/>
        <Route path="/carts" element={<CurrentCart/>} />
        <Route path='/login' element={<Login setLoginText={setLoginText}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/carts/inactive' element={<UserView/>} />
        <Route path='/restaurant-locator' element={<Map/>} />
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:restaurant_id' element={<ProductByRestaurant/>} />
        <Route path='/restaurant/:id' element={<RestaurantDetails/>} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
