import React from 'react';
import '../Styles/sideBar.css';

function SideBar() {
  return (
    <div className='sideBar-container'>
      <div className='sideBar-content'>
    <ul>
      <li>Account Info</li>
      <li>Orders</li>
      <li>Update Account</li>
      <li>Settings</li>
      <li>Help</li>
    </ul>
      </div>
    </div>
  )
}

export default SideBar