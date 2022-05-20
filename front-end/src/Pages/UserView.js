import React from 'react'
import UserProfile from '../Components/PreviousCarts'
import SideBar from '../Components/SideBar';
import '../Styles/userView.css'

function UserView() {
  return (
    <div className='uv-container'>
      <div className='up-container'>
        <UserProfile/> 
      </div>
      <div className='sb-container'>
        <SideBar/>
      </div>
    </div>
  )
}

export default UserView;