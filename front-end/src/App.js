import { Routes , Route } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";

//import of stand alone components 
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

//import of pages that are linked to components

import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App() {

  const [loginText, setLoginText] = useState(false);

  return (
    <div className="main">
      <NavBar  setLoginText={setLoginText}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carts" element={<Cart/>} />
        <Route path='/login' element={<Login setLoginText={setLoginText}/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
