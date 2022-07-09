import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios'

function UserInfo() {

    const [userInfo, setUserInfo] = useState([]);
    const userId = localStorage.getItem("userID")
    const API = process.env.REACT_APP_API_URL;
    let navigate = useNavigate()

    useEffect(()=>{
        axios.get(`${API}/customers/${userId}`)
        .then((res)=>{
            setUserInfo(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[userId])


const handleButtonClick = (event )=>{
    event.preventDefault()
    navigate('/profile')

}



  return (
    <div>
        <button onClick={handleButtonClick}>go back</button>
        <div>
            {userInfo.fname}
        </div>
        <div>
            {userInfo.lname}
        </div>
        <div>
            {userInfo.phonenum}
        </div>
        <div>
            {userInfo.username}
        </div>
    </div>
  )
}

export default UserInfo