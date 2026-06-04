import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <p className="s-label">Get in touch</p>

      <div className="contact-headline">
        <span className="tl"><span>Say hi!</span></span>
        <span className="tl">
          <span>
            <a href="mailto:ulodo.emmanuel@email.com">
              Let's talk{' '}
              <svg width="0.7em" height="0.7em" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle', marginBottom: '0.12em' }}>
                <path d="M3 15L15 3M15 3H5M15 3V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </span>
        </span>
      </div>

      <div className="contact-footer">
        <div className="cf-left">
          <div className="cf-email-row">
            <p>ulodo.emmanuel@email.com</p>
            <button className="copy-btn" aria-label="Copy email address">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4.5" y="4.5" width="7" height="7" rx="1.2" />
                <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6" />
              </svg>
            </button>
          </div>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="cf-right">
          <a href="mailto:ulodo.emmanuel@email.com">Email</a>
          <a href="https://www.linkedin.com/in/ulodo-emmanuel/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/ELMANNY4000" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>

      <p className="copy">© 2026 Ulodo Emmanuel · Full-stack Developer</p>
    </section>
  );
};

export default Contact;
