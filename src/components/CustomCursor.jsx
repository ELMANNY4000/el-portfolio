import React, { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ loading }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className={`custom-cursor ${loading ? 'hidden' : ''}`}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -100%)` }}>
      <div className="cursor-bubble">
        <span className="cursor-dot"></span>
        <span>guest</span>
      </div>
    </div>
  );
};

export default CustomCursor;
