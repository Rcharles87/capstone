import { Link } from "react-router-dom";
import "../Styles/navBar.css";
import logo from "../assets/dummy-logo.png";

function NavBar({ setLoginText }) {
  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false);
  };

  let text = localStorage.getItem("userID") ? (
    <div className="profile-logout-container">
      <Link to="/" onClick={handleLogout}>Logout</Link>
    
      <Link to="/carts/inactive">Profile</Link>
    </div>
  ) : (
    <div className="login-container">
      <Link to="/login">Login/Signup</Link>

    </div>
  );

  return (
    <nav>
      <div className="home-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="cart">
        <div>
          {text}
        </div>
        <div>
          <Link to="/carts">Cart</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
