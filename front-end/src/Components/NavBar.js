import { Link } from "react-router-dom";
import "./navBar.css"
function NavBar({setLoginText}) {


  
  
  const handleLogout = (event) =>{
    event.preventDefault()
    window.localStorage.clear()
    setLoginText(false) 
  }

  let text =  localStorage.getItem("userID") ? <Link to="/" onClick={handleLogout}>logout</Link>: <Link to="/login">login/signup</Link>
  

  return (
    <nav>
        <div className="left">
            <Link to="/">Logo</Link>
        </div>

        <div className="right">
            <div >
             {text}
            </div>
            <div>
            <Link to="/carts">Cart</Link>
            </div>
        </div>
    </nav>
  )
};

export default NavBar;