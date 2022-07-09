import axios from "axios";
import { useState, useEffect } from "react"

const API = process.env.REACT_APP_API_URL;

function UpdateUser() {
    
    const [updateUser, setUpdateUser] = useState({
        fname:"",
        lname:"",
        username:"",
        password:"",
        phonenum:""
    })
    const userID = localStorage.getItem("userID");

    useEffect(()=>{
        axios.get(`${API}/customers/${userID}`)
        .then((res)=>{
            setUpdateUser(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    }, [userID])


    const UpdateAccount = (updatedUser) => {

        axios.put(`${API}/customers/${userID}`, updatedUser)
        .then(()=>{

        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleTextChange = (event) => {
        setUpdateUser({...updateUser, [event.target.id] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        UpdateAccount(updateUser, userID)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name:</label>
            <input 
             id="fname"
             value={updateUser.fname}
             type="text"
             onChange={handleTextChange}
            />

            <label htmlFor="lname">Last Name:</label>
            <input 
             id="lname"
             value={updateUser.lname}
             type="text"
             onChange={handleTextChange}
            />  
             <label htmlFor="username">User name:</label>
            <input 
             id="username"
             value={updateUser.username}
             type="text"
             onChange={handleTextChange}
            />
             <label htmlFor="password">Password:</label>
            <input 
             id="password"
             value={updateUser.password}
             type="text"
             onChange={handleTextChange}
            />
             <label htmlFor="phonenum">Phone Number:</label>
            <input 
             id="phonenum"
             value={updateUser.phonenum}
             type="text"
             onChange={handleTextChange}
            />

            <button>submit</button>
        </form>
    </div>
  )
}

export default UpdateUser