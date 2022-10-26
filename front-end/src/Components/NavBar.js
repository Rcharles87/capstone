import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/official-Logo.png";
// import { Button } from "@mui/material";
import Button from "./shared/Button";
import "./navbar.scss"


function NavBar({ setLoginText }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    // event.preventDefault();
    window.localStorage.clear();
    setLoginText(false); 
    navigate('/');
  };

  const handleLogin=()=>{
    navigate("/login")
  }

  const handleSignup=()=>{
    navigate("/signup")
  }

  
  let text = localStorage.getItem("userID") ? (
    <div className='navbar__buttonContainer'>
      <Button name="logout" size="small" onClick={handleLogout}/>
      {/* <Button variant='contained' href="/" onClick={handleLogout}>Logout</Button> */}
      <Button variant="contained" href="/profile">Profile</Button>
      <Button variant="contained" href="/carts">Cart</Button>
    </div>
  ) : (
    
<div className='navbar__buttonContainer'>
  <Button name='login' size='small' onClick={handleLogin}/>
  <Button name='signup' size='small'onClick={handleSignup}/>
</div>

  );

  return (
  <div className='navbar'>
      <div className='navbar__logoContainer'>
        <Link to="/">
        <img  className='navbar__logo' src={logo} alt="" />
        </Link>
      </div>
    {text}
    
  </div>
  );
}

export default NavBar;
