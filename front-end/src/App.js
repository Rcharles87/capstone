import { Routes , Route } from 'react-router-dom';
import { useState } from "react";
import './App.css';

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import UserView from './Pages/UserView';
import RestaurantLocator from './Pages/RestaurantLocator.js';
import FourOFour from './Pages/Four0Four';



function App() {

  const [loginText, setLoginText] = useState(false);

  return (
    <div className="main">
      <NavBar  setLoginText={setLoginText}/>
      <Routes>
        <Route path="*" element={<FourOFour />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/carts" element={<Cart/>} />
        <Route path='/login' element={<Login setLoginText={setLoginText}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/carts/inactive' element={<UserView/>} />
        <Route path='/restaurant-locator' element={<RestaurantLocator/>} />

      </Routes>
     <Footer />
    </div>
  );
}

export default App;
