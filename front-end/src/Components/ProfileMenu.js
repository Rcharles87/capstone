import React from 'react';
import '../Styles/profileMenu.css';
import { Link } from 'react-router-dom';

function ProfileMenu() {

  return (
    <div className='profileMenuContainer'>
      <ul>
        <Link to="/accountInfo"><li>Account Info</li></Link>
        <Link to="/previousOrders"><li>Orders</li></Link>
        <li>Settings</li>
        <li>Help</li>
      </ul>

    </div>
  )
}

export default ProfileMenu