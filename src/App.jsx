import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

// Read any saved preference synchronously so the very first render already
// matches what will be painted — avoids a flash of the wrong theme and any
// mismatch between state and the DOM attribute on load.
const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Theme variables live on :root / [data-theme="light"], so the attribute
  // has to sit on the document root, not on an inner div, or body and
  // anything outside .app never sees the swapped tokens.
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggling now plays a circular wipe that expands from wherever the
  // switch was clicked, so the change is unmistakable instead of a flat
  // instant swap. Falls back to a plain toggle on browsers without the
  // View Transitions API (older Safari/Firefox).
  const toggleTheme = (event) => {
    const next = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      next();
      return;
    }

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(next);
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 650,
          easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  };

  return (
    <div className={`app ${theme}`}>
      <CustomCursor loading={loading} />
      <Loader visible={loading} />
      <Navbar scrolled={scrolled} theme={theme} onToggleTheme={toggleTheme} />
      <Hero visible={!loading} />
      <Marquee />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;