import { Link } from "react-router-dom"
import { axios } from "axios";
import { useState, useEffect } from "react";

const API= process.env.REACT_API_URL;

function Login() {
  const [login, setLogin] = useState({
    username:"",
    password:""
});


const handleTextChange = (event) => {
    setLogin({...login, [event.target.id]: event.target.value});
};

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}/login`, login)
    // .then((res) =>{
        
    // })
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
            <input
                id="username"
                value={login.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter a username"
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                value={login.password}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter a password"
            />
            <button>Submit</button>
      </form>


        <Link to="/signup">Click here to signup</Link>
    </div>
  )
}

export default Login;