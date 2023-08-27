import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const Navbar = () => {
  const { logout } = useContext(SettingsContext);

  return (
   
    <nav className='navbar'>
      
        <button onClick={logout}>Logout</button>
    </nav>
    
  );
};

export default Navbar;






