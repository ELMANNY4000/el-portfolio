import React from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, theme, onToggleTheme }) => {
  return (
    <nav id="nav" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo" style={{ opacity: 1 }}>emmanuel</a>
      <div className="nav-right" style={{ opacity: 1 }}>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-btn" id="themeBtn" onClick={onToggleTheme} aria-label="Toggle colour scheme">
          <span className="t-icon" id="tIcon">{theme === 'dark' ? '◐' : '◑'}</span>
          <span id="tLabel">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;