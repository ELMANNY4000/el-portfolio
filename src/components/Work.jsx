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
        <article className="pcard">
          <div className="pcard-inner">
            <div className="pcard-info">
              <div className="pcard-top" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="pnum">01</span>
                <span className="wip-badge">
                  <span className="wip-badge-dot"></span>
                  Work in progress
                </span>
              </div>
              <div className="pcard-mid">
                <p className="pcompany">NeoTaste / 2025 - 2026</p>
                <h3 className="pname">Finding the right incentive to double referral volume</h3>
                <div className="tags">
                  <span className="tag">Growth</span>
                  <span className="tag">A/B Testing</span>
                </div>
              </div>
              <div className="pmetrics">
                <div className="pmetric">
                  <span className="pm-val">+148%</span>
                  <span className="pm-label">Total referral<br />volume growth</span>
                </div>
                <div className="pmetric">
                  <span className="pm-val">5.2%</span>
                  <span className="pm-label">Final referral rate<br />(was 2.1%)</span>
                </div>
              </div>
            </div>
            <div className="pcard-vis">
              <div className="pcard-bg"></div>
              <img className="pcard-img" src="/images/referral-case.webp" alt="Referral A/B Test case study cover" />
              <div className="pcard-img-overlay"></div>
              <div className="p-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </article>

        <div className="pdf-strip">
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)', marginBottom: '4px' }}>Looking for more?</p>
            <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>More work from my previous work is available as a PDF, including a conversion project and a retention feature.</p>
          </div>
          <a href="/Ulodo Emmanuel - Portfolio.pdf" target="_blank" rel="noopener" className="cv-btn">
            View PDF
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12L12 2M12 2H4M12 2V10" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pdf-strip" style={{ transform: 'translate(0px, 24px)', opacity: 0 }}>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--fg)', marginBottom: '4px' }}>Looking for more?</p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.5 }}>More work from my previous work is available as a PDF, including a conversion project and a retention feature.</p>
        </div>
        <a href="/Ulodo Emmanuel - Portfolio.pdf" target="_blank" rel="noopener" className="cv-btn">
          View PDF
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12L12 2M12 2H4M12 2V10" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Work;
