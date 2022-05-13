import { Link } from "react-router-dom";
import "./navBar.css"

function NavBar() {
  return (
    <nav>
        <div className="left">
            <Link to="/">Logo</Link>
        </div>

        <div className="right">
            <div>
            <Link to="/login" >Login/Signup</Link>
            </div>
            <div>
            <Link to="/cart">Cart</Link>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;