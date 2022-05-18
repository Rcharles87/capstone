import { Link } from "react-router-dom";
import "./navBar.css";
import { useState } from "react";
import logo from "../assets/dummy-logo.png";

function NavBar({ setLoginText }) {
  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false);
  };

  let text = localStorage.getItem("userID") ? (
    <Link to="/" onClick={handleLogout}>
      logout
    </Link>
  ) : (
    <Link to="/login">login/signup</Link>
  );

  return (
    <nav>
      <div className="home-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="cart">
        <div>{text}</div>
        <div>
          <Link to="/carts">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
