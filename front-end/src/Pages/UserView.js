import React from 'react'
import PreviousCarts from '../Components/PreviousCarts'
import SideBar from '../Components/SideBar';
import Welcome from '../Components/Welcome';
import '../Styles/userView.css'

function UserView() {
  return (
    <div className='uv-container'>
      <div className='w-container'>
        <Welcome/>
      </div>

      <div className='up-container'>
        <PreviousCarts/> 
      </div>
      <div className='sb-container'>
        <SideBar/>
      </div>
    </div>
  )
}

export default UserView;