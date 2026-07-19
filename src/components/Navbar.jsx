import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = ({ scrolled, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">Emmanuel</a>
      <div className="nav-right">
        <button className="theme-btn" onClick={onToggleTheme} aria-label="Toggle colour scheme">
          <span className="t-icon">{theme === 'dark' ? '◐' : '◑'}</span>
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>

        <button
          className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;