import React from 'react';
import './About.css';

const skills = [
  'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB',
  'Docker', 'AWS', 'GraphQL', 'Next.js', 'Tailwind CSS', 'Redis',
  'CI/CD', 'Git', 'REST APIs', 'System Design'
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="s-header">
        <div>
          <p className="s-label">My story</p>
          <h2 className="s-title">About</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p><strong>Full-stack developer with 4 years of experience</strong> building end-to-end web applications from database architecture to polished user interfaces. I work across the entire stack — React, Node.js, TypeScript, Python, and cloud infrastructure.</p>
          <p><strong>I care about clean architecture and scalable systems.</strong> Whether it's designing RESTful APIs, optimizing PostgreSQL queries, or deploying containerized services on AWS, I focus on writing maintainable code that performs under load.</p>
          <p><strong>I enjoy the full product lifecycle,</strong> from requirements gathering to production deployment. I like working in teams where engineering decisions are discussed openly and shipping is a shared goal.</p>
          <a href="/CV_Ulodo_Emmanuel.pdf" target="_blank" rel="noopener" className="cv-btn" style={{ marginTop: '20px' }}>
            View CV
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12L12 2M12 2H4M12 2V10" />
            </svg>
          </a>
        </div>

        <div className="about-side">
          <div>
            <h3 className="detail-h">Experience</h3>
            <ul className="exp-list">
              <li className="exp-item">
                <div className="ei-l">
                  <span className="ei-co">SAINT CLUB</span>
                  <span className="ei-role">Full-stack Developer</span>
                </div>
                <span className="ei-yr">2026 - Now</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="detail-h">Skills</h3>
            <div className="skills-row">
              {skills.map(s => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
