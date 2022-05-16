import { Link } from "react-router-dom";
import "./navBar.css"
import { useState } from "react";

function NavBar() {

  const [loginText, setLoginText] = useState(false);
  
  let text = loginText ? <Link to="/"> logout</Link>: <Link to="/login">login/signup</Link>

  const handleTextChange = (event) =>{
    event.preventDefault()
    if(!localStorage.userID){
      setLoginText(!loginText)
    } else {  
      window.localStorage.clear()
    }
  }




  // "login/signup" : "logout";


  return (
    <nav>
        <div className="left">
            <Link to="/">Logo</Link>
        </div>

        <div className="right">
            <div onClick={handleTextChange}>
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