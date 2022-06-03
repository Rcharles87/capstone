import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import "../Styles/welcome.css";

const API = process.env.REACT_APP_API_URL;

function Welcome() {

  const [userName, setUserName] = useState([])
  const userId = localStorage.getItem("userID")

  useEffect(()=>{
    axios.get(`${API}/customers/${userId}`)
    .then((res)=>{
      setUserName(res.data);
    }).catch((err)=>{
      console.log(err)
    })

  },[userId])

  const welcomeArrMessage = [
    "Welcome back ",
    "Hello ",
    "We're happy to see you again ",
    "Welcome "
  ]

  const welcomeMessageRandom = welcomeArrMessage[Math.floor(Math.random() * welcomeArrMessage.length)]

  return (
    <div className='welcome-container'>
      <h1>{welcomeMessageRandom} {userName.fname}!</h1>
      </div>
  )
}

export default Welcome