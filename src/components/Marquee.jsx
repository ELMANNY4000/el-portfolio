import React from 'react';
import './Marquee.css';

const skills = [
  'React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker',
  'AWS', 'GraphQL', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Redis',
  'CI/CD', 'Git'
];

const Marquee = () => {
  const items = [...skills, ...skills];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="mq-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
