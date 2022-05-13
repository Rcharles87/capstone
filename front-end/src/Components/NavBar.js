import { Link } from "react-router-dom";
import Home from "../Pages/Home";

function NavBar() {
  return (
    <nav>
        <div className="left">
            <Link to="/">Logo</Link>
        </div>

        <div className="right">
            {/* <Link>login/signup</Link> */}
            {/* <Link>Cart</Link> */}
        </div>
    </nav>
  )
}

export default NavBar;