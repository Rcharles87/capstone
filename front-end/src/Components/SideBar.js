import React from 'react';
import '../Styles/sideBar.css';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddIcon from '@mui/icons-material/Add';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

function SideBar() {
  return (
    <div className='sideBar-container'>
      <div className='sideBar-content'>
    <ul>
      <li><ManageAccountsIcon/> Account Info</li>
      <li><ReceiptLongIcon/> Orders</li>
      <li><AddIcon/> Update Account</li>
      <li><SettingsIcon/>Settings</li>
      <li><HelpIcon/>Help</li>
    </ul>
      </div>
    </div>
  )
}

export default SideBar