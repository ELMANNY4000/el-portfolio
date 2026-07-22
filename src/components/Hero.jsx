import React from 'react';
import './Hero.css';

const Hero = ({ visible }) => {
  return (
    <section id="hero" className={`hero ${visible ? 'visible' : ''}`}>
      <p className="hero-eyebrow"><span>Full-stack Developer</span></p>

      <h1 className="hero-title">
        <span className="tl">
          <span>
            Ulodo
            <span className="strike-1"></span>
            <span className="strike-2"></span>
            <span className="strike-3"></span>
            <span className="strike-4"></span>
            <span className="strike-5"></span>
          </span>
        </span>
        <span className="tl"><span>Emmanuel</span></span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          <span>Building robust digital experiences from database to interface. Passionate about clean architecture, modern frameworks, and shipping products that scale.</span>
        </p>
        <div className="hero-right">
          <div className="pill available"><span className="pill-dot"></span>Available for work</div>
          <div className="pill">Lagos, Nigeria</div>
          <div className="pill">Github ELMANNY4000</div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="sh-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
