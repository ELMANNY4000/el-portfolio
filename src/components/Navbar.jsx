import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

const Navbar = ({ scrolled, theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeSection, setActiveSection] = useState('');
  const linksRef = useRef(null);

  // Lock body scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close the menu on resize back to desktop so it never gets stuck open.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll-spy: highlight whichever section is currently in view so the
  // nav reflects where you actually are on the page, not just hover state.
  useEffect(() => {
    const sections = navItems
      .map(item => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Slide the little tracker pill under whichever link is being hovered /
  // focused, measured against the <ul> so it works at any viewport width.
  const moveIndicator = (e) => {
    const li = e.currentTarget;
    const parent = linksRef.current;
    if (!li || !parent) return;
    const liBox = li.getBoundingClientRect();
    const parentBox = parent.getBoundingClientRect();
    setIndicator({
      left: liBox.left - parentBox.left,
      width: liBox.width,
      opacity: 1
    });
  };

  const hideIndicator = () => setIndicator(prev => ({ ...prev, opacity: 0 }));

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={closeMenu}>Emmanuel</a>
        <div className="nav-right">
          <ul className="nav-links" ref={linksRef} onMouseLeave={hideIndicator}>
            <li
              className="nav-indicator"
              style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
              aria-hidden="true"
            />
            {navItems.map(item => (
              <li key={item.href} onMouseEnter={moveIndicator} onFocus={moveIndicator}>
                <a href={item.href} className={activeSection === item.href ? 'active' : ''}>{item.label}</a>
              </li>
            ))}
          </ul>

          <button
            className="theme-switch"
            onClick={onToggleTheme}
            role="switch"
            aria-checked={theme === 'light'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            <span className="theme-switch-icon sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </span>
            <span className="theme-switch-icon moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.7 14.7A8.5 8.5 0 019.3 3.3a.5.5 0 00-.6-.7A10 10 0 1021.4 15.3a.5.5 0 00-.7-.6z" />
              </svg>
            </span>
            <span className="theme-switch-thumb" />
          </button>

          <button
            className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu-links">
          {navItems.map((item, i) => (
            <li key={item.href} style={{ transitionDelay: menuOpen ? `${0.08 + i * 0.06}s` : '0s' }}>
              <a href={item.href} onClick={closeMenu}>
                <span className="mm-index">0{i + 1}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer" style={{ transitionDelay: menuOpen ? `${0.08 + navItems.length * 0.06}s` : '0s' }}>
          <button
            className="theme-switch theme-switch-mobile"
            onClick={onToggleTheme}
            role="switch"
            aria-checked={theme === 'light'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            type="button"
          >
            <span className="theme-switch-icon sun" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </span>
            <span className="theme-switch-icon moon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.7 14.7A8.5 8.5 0 019.3 3.3a.5.5 0 00-.6-.7A10 10 0 1021.4 15.3a.5.5 0 00-.7-.6z" />
              </svg>
            </span>
            <span className="theme-switch-thumb" />
          </button>
          <span className="theme-switch-label">Switch to {theme === 'dark' ? 'light' : 'dark'} mode</span>
          <a href="mailto:ulodo.emmanuel@email.com" className="mobile-menu-contact">ulodoe@email.com</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
