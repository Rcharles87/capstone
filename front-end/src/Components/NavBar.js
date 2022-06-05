import { Link, useNavigate } from "react-router-dom";
import "../Styles/navBar.css";
import logo from "../assets/dummy-logo.png";


function NavBar({ setLoginText }) {
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setLoginText(false); 
    navigate('/');
  };

  
  let text = localStorage.getItem("userID") ? (
    <div className="profile-logout-container">
      <Link to="/" onClick={handleLogout}>Logout</Link>
    
      <Link to="/carts/inactive">Profile</Link>

      <Link to="/carts">Cart</Link>
   
    </div>
  ) : (
    <div className="login-container">
      <Link to="/login">Login/Signup</Link>
    </div>
  );

  return (
    <nav>
      <div className="nav-container">

      <div className="home-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* <Link style={{ textDecoration: 'none', color: 'white' }} component={Link} to={`/`}>
                <h4 className="nav-btns">Our Mission</h4>
        </Link> */}
      </div>
      <div className="navbar-text">MEALS 4 NYC</div>

      <div className="cart">
        <div>
          {text}
        </div>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
