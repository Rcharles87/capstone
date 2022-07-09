import React from 'react'
import PreviousCarts from '../Components/PreviousCarts'
import SideBar from '../Components/ProfileMenu';
import Welcome from '../Components/Welcome';
import '../Styles/profile.css'

function Profile() {
  return (
    <div className='uv-container'>
      <div className='w-container'>
        <Welcome/>
      </div>

      <div className='up-container'>
        <SideBar/>
        {/* <PreviousCarts/>  */}
      </div>
      <div className='sb-container'>
      </div>
    </div>
  )
}

export default Profile;