import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/forms.css";

const API= process.env.REACT_APP_API_URL;

function Login({setLoginText, carts, setCarts}) {
  let navigate = useNavigate();
  const [login, setLogin] = useState({
    username:"",
    password:""
});


const handleTextChange = (event) => {
    setLogin({...login, [event.target.id]: event.target.value});
};

const cartId = carts.map((cart) => cart.orderNumber)

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/auth/signin`, login)
    .then((res) =>{
      localStorage.setItem("cartID", cartId)
      localStorage.setItem("userID", res.data.id) 
      
      setLoginText(true)
      navigate("/")
    })
}

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
            <input
                id="username"
                value={login.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter a username"
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                value={login.password}
                type="password"
                onChange={handleTextChange}
                placeholder="Please enter a password"
            />
            <button className="submit-btn">Submit</button>
      </form>
      <div className="sign-up-btn-container">
      <Link className="sign-up-btn" to="/signup">Don't have an account? Sign up!</Link>
      </div>
    </div>
  );
};



export default Login;