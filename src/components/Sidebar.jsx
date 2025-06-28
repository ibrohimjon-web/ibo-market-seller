import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlus,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button className='sidebar-toggle' onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay (for background blur) */}
      {open && <div className='sidebar-overlay' onClick={closeSidebar}></div>}

      <div className={`sidebar ${open ? 'open' : ''}`}>
        <h2 className='sidebar-title'>Seller Panel</h2>
        <nav className='sidebar-nav'>
          <NavLink to='/dashboard' className='sidebar-link' onClick={closeSidebar}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
          <NavLink to='/products' className='sidebar-link' onClick={closeSidebar}>
            <FaBoxOpen /> Products
          </NavLink>
          <NavLink to='/add/products' className='sidebar-link' onClick={closeSidebar}>
            <FaPlus /> Add Product
          </NavLink>
          <NavLink to='/orders' className='sidebar-link' onClick={closeSidebar}>
            <FaShoppingCart /> Orders
          </NavLink>
          <NavLink to='/profile' className='sidebar-link' onClick={closeSidebar}>
            <FaUser /> Profile
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
