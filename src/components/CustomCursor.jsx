import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ loading }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousemove', handleMove);
    };
  }, []);

  // Don't render on mobile or while loading
  if (isMobile || loading) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
      }}
    >
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;