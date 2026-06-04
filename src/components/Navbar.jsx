import React from 'react';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">Emmanuel</a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle colour scheme">
          <span className="t-icon">{theme === 'dark' ? '◐' : '◑'}</span>
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
