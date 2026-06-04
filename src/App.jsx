import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className={`app ${theme}`} data-theme={theme === 'light' ? 'light' : undefined}>
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