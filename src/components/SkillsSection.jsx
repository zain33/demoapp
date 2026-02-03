import React, { useEffect, useRef, useState } from 'react';
import './SkillsSection.css';

const skills = [
  {
    name: 'Web Applications',
    percent: 95,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Desktop Applications',
    percent: 85,
    image:
      'https://images.unsplash.com/photo-1581092919531-7146c1b1f8f1?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Mobile Applications',
    percent: 80,
    image:
      'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=900&q=80'
  }
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState(skills[0].image);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="container">
        <h3 className="main-title">Our Skills</h3>

        <div className="skills-wrapper">
          {/* LEFT IMAGE */}
          <div className="skills-image">
            <img src={activeImage} alt="Skill Preview" />
          </div>

          {/* RIGHT SKILLS */}
          <div className="skills-progress">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                onMouseEnter={() => setActiveImage(skill.image)}
                onClick={() => setActiveImage(skill.image)} // mobile support
              >
                <div className="skill-header">
                  <span className="progress-label">{skill.name}</span>
                  <span className="progress-percent">{skill.percent}%</span>
                </div>

                <div className="progress-bar">
                  <div
                    className={`progress-fill ${animate ? 'animate' : ''}`}
                    style={{ '--width': `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
