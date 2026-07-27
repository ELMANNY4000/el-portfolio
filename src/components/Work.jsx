import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="s-header">
        <div>
          <p className="s-label">Selected Projects</p>
          <h2 className="s-title">Work</h2>
        </div>
      </div>

      <div className="projects">
        <a
          href="https://saint-club.vercel.app/"
          target="_blank"
          rel="noopener"
          className="pcard"
          aria-label="View the Saint Club live site"
        >
          <div className="pcard-inner">
            <div className="pcard-info">
              <div className="pcard-top" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="pnum">01</span>
                <span className="wip-badge onhold-badge">
                  <span className="wip-badge-dot onhold-dot"></span>
                  On hold
                </span>
              </div>
              <div className="pcard-mid">
                <p className="pcompany">Saint Club / 2025 - 2026</p>
                <h3 className="pname">Faith-inspired streetwear brand — bold graphic design meets full e-commerce build</h3>
                <div className="tags">
                  <span className="tag">Streetwear</span>
                  <span className="tag">Brand Identity</span>
                  <span className="tag">E-commerce</span>
                </div>
              </div>
              <div className="pmetrics">
                <div className="pmetric">
                  <span className="pm-val">6</span>
                  <span className="pm-label">Pages shipped<br />end to end</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">100%</span>
                  <span className="pm-label">Self-contained<br />single-file build</span>
                </div>
              </div>
            </div>
            <div className="pcard-vis">
              <div className="pcard-bg"></div>
              <img className="pcard-img" src="/images/saintclub-case.webp" alt="Saint Club streetwear e-commerce homepage cover" />
              <div className="pcard-img-overlay"></div>
              <div className="p-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </a>

        {/* Calmix */}
        <div className="pcard pcard--inactive" aria-label="Calmix — coming soon">
          <div className="pcard-inner">
            <div className="pcard-info">
              <div className="pcard-top" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="pnum">02</span>
                <span className="wip-badge">
                  <span className="wip-badge-dot"></span>
                  Work in progress
                </span>
              </div>
              <div className="pcard-mid">
                <p className="pcompany">Calmix / 2026</p>
                <h3 className="pname">3D AI character generator — bring characters to life from a single prompt</h3>
                <div className="tags">
                  <span className="tag">AI</span>
                  <span className="tag">3D Generation</span>
                  <span className="tag">Web App</span>
                </div>
              </div>
              <div className="pmetrics">
                <div className="pmetric">
                  <span className="pm-val">AI</span>
                  <span className="pm-label">Powered<br />character gen</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">3D</span>
                  <span className="pm-label">Real-time<br />output</span>
                </div>
              </div>
            </div>
            <div className="pcard-vis pcard-vis--calmix">
              <div className="pcard-bg pcard-bg--calmix"></div>
              <div className="calmix-placeholder">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="#C47BE4" strokeWidth="1" strokeOpacity="0.3" />
                  <path d="M24 12 L36 30 L12 30 Z" stroke="#C47BE4" strokeWidth="1.5" strokeLinejoin="round" fill="none" strokeOpacity="0.6"/>
                  <circle cx="24" cy="24" r="4" fill="#C47BE4" fillOpacity="0.2" stroke="#C47BE4" strokeWidth="1" strokeOpacity="0.5"/>
                </svg>
                <span className="calmix-label">Coming soon</span>
              </div>
              <div className="p-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="pdf-strip">
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)', marginBottom: '4px' }}>Looking for more?</p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>More work from my previous projects is available as a PDF, including a fashion lookbook platform and a retail inventory system.</p>
          </div>
          <a href="/Ulodo Emmanuel - Portfolio.pdf" target="_blank" rel="noopener" className="cv-btn">
            View PDF
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12L12 2M12 2H4M12 2V10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;