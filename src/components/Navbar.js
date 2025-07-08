import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img 
            src="/images/logo.png" 
            alt="Portfolio Logo" 
            className="logo-image"
          />
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
        
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 