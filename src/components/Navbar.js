

import './Navbar.css'
import React, { useContext } from 'react';

import { SettingsContext } from '../context/SettingsContext';

const Navbar = () => {
  const { logout } = useContext(SettingsContext);

  return (
   
    <nav>
      <div className="nav-container">
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
    
  );
};

export default Navbar;






