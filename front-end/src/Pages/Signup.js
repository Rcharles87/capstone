import axios from "axios";
import { useState, useEffect } from "react";

const API= process.env.REACT_APP_API_URL;

function Signup() {
    const [signUp, setSignUp] = useState({
        Fname:"",
        Lname:"",
        username:"",
        password:""
    });


    const handleTextChange = (event) => {
        setSignUp({...signUp, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API}/auth/signup`, signUp)
        .then((res) =>{
            localStorage.setItem("userID", res.data.id)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="first name">First Name</label>
            <input
                id="Fname"
                value={signUp.Fname}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter first name"
            />
            <label htmlFor="last name">Last Name</label>
            <input
                id="Lname"
                value={signUp.Lname}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter last name"
            />
            <label htmlFor="username">Username</label>
            <input
                id="username"
                value={signUp.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter a username"
            />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                value={signUp.password}
                type="text"
                onChange={handleTextChange}
                placeholder="Please enter a password"
            />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default Signup;