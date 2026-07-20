import React, { useState } from 'react';
import './Contact.css';

const EMAIL = 'ulodoe@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable (very old browser / no permission) — fall
      // back to a manual selection prompt so the email is still usable.
      window.prompt('Copy email address:', EMAIL);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact">
      <p className="s-label">Get in touch</p>

      <div className="contact-headline">
        <span className="tl"><span>Say hi!</span></span>
        <span className="tl">
          <span>
            <a href="mailto:ulodoe@gmail.com">
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
            <p>{EMAIL}</p>
            <button
              className={`copy-btn${copied ? ' copied' : ''}`}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              onClick={copyEmail}
            >
              {copied ? (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 6.5L5 9.5L11 3.5" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4.5" y="4.5" width="7" height="7" rx="1.2" />
                  <path d="M1.5 8.5V2.5a1 1 0 0 1 1-1h6" />
                </svg>
              )}
            </button>
            <span className={`copy-toast${copied ? ' show' : ''}`}>Copied</span>
          </div>
          <p>Lagos, Nigeria</p>
        </div>
        <div className="cf-right">
          <a href="mailto:ulodoe@gmail.com">Email</a>
          <a href="https://github.com/ELMANNY4000" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>

      <p className="copy">© {new Date().getFullYear()} Ulodo Emmanuel · Full-stack Developer</p>
    </section>
  );
};

export default Contact;
