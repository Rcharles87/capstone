import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import "../Styles/welcome.css"

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
  
  return (
    <div className='welcome-container'>
      <h1>Welcome {userName.fname}</h1>
      </div>
  )
}

export default Welcome