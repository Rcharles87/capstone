import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/dummy-logo.png";
import { Button } from "@mui/material";
import "./navbar.scss"


function NavBar({ setLoginText }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false); 
    navigate('/');
  };

  
  let text = localStorage.getItem("userID") ? (
    <div className='header__buttonContainer'>
      <Button variant='contained' href="/" onClick={handleLogout}>Logout</Button>
      <Button variant="contained" href="/profile">Profile</Button>
      <Button variant="contained" href="/carts">Cart</Button>
    </div>
  ) : (
    <div className='header__buttonContainer'>
      <Button variant='contained'href="/login">Login</Button>
      <Button variant='contained' href="/signup">Signup</Button>
    </div>
  );

  return (
    // <nav>
    //   <div className="nav-container">

    //   <div className="home-logo">
    //     <Link to="/">
    //       <img src={logo} alt="logo" />
    //     </Link>
    //   </div>
    //   <div className="navbar-text">MEALS 4 NYC</div>

    //   <div className="cart">
    //     <div>
    //       {text}
    //     </div>
    //   </div>
    //   </div>
    // </nav>
    <div className='header'>
    <div className='header__logoContainer'>
      <Link to="/">
      <img  className='header__logo' src={logo} alt="" />
      </Link>
    </div>
    {text}
    
  </div>
  );
}

export default NavBar;
