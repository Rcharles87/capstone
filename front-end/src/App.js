import { Routes , Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import './App.css';

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/HomePage';
import CurrentCart from './Pages/CurrentCart';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Pages/Profile';
import FourOFour from './Pages/Four0Four';
import Map from './Components/Map';
import Restaurants from './Components/Restaurants';
import RestaurantDetails from './Components/RestaurantDetails';
import ProductByRestaurant from './Components/ProductByRestaurant';
import PreviousCart from './Components/PreviousCart';
import UpdateAcc from './Pages/UpdateAcc';
// import PreviousCarts from './Components/PreviousCarts';
import PreviousOrders from './Pages/PreviousOrders';
import UserAccountInfo from './Pages/UserAccountInfo';


function App() {

  const [loginText, setLoginText] = useState(false);
  const [carts, setCarts] = useState([]);
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect( ()=> {
    let userId = localStorage.getItem("userID")
    if(userId){
      setLoginText(true)
    }else{
      setLoginText(false)
    }
  },[])

  return (
    <div className="main">
      <div className='content-wrap'>
      <NavBar  setLoginText={setLoginText}/>
      <Routes>
        <Route path="*" element={<FourOFour />} />
        <Route path="/" element={<Home loginText={loginText}/>}/>
        <Route path="/carts" element={<CurrentCart setCarts={setCarts} carts={carts}/>} setCheckedOut={setCheckedOut}/>
        <Route path='/login' element={<Login setLoginText={setLoginText} setCarts={setCarts} carts={carts}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/restaurant-locator' element={<Map/>} />
        <Route path='/restaurants' element={<Restaurants/>}/>
        <Route path='/carts/inactive/:id' element={<PreviousCart/>}/>
        <Route path='/previousOrders' element={<PreviousOrders/>}/>
        <Route path='/products/:restaurant_id' element={<ProductByRestaurant/>} />
        <Route path='/restaurant/:id' element={<RestaurantDetails/>} />
        <Route path='/update'element={<UpdateAcc/>}/>
        <Route path='/accountInfo' element={<UserAccountInfo/>} />
      </Routes>

      </div>
      <div className='footerCont'>
     <Footer />
      </div>
    </div>
  );
}

export default App;
