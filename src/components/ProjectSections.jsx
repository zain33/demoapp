import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/mock';
import './ProjectSections.css';

const VISIBLE = 3;
const CARD_WIDTH = 250;
const GAP = 15;
const AUTO_DELAY = 4000;

const ProjectsSection = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(VISIBLE);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const projectCount = projects.length;
  // Clone projects for seamless loop
  const items = [
    ...projects.slice(-VISIBLE),
    ...projects,
    ...projects.slice(0, VISIBLE),
  ];

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, []);

  // Apply transform
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.style.transition = isTransitioning
      ? 'transform 0.8s ease'
      : 'none';

    carousel.style.transform = `translateX(-${
      index * (CARD_WIDTH + GAP)
    }px)`;
  }, [index, isTransitioning]);

useEffect(() => {
  if (index === projectCount + VISIBLE) {
    setTimeout(() => {
      setIsTransitioning(false);
      setIndex(VISIBLE);
    }, 800);
  }

  if (index === 0) {
    setTimeout(() => {
      setIsTransitioning(false);
      setIndex(projectCount);
    }, 800);
  }

  if (!isTransitioning) {
    requestAnimationFrame(() => setIsTransitioning(true));
  }
}, [index, projectCount, isTransitioning]);

  return (
    <section className="section projects-section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Latest Projects</h2>
          <p>Explore our recent work across web, mobile, and desktop applications</p>
        </div>

        <div className="custom-carousel-wrapper">
          <div className="custom-carousel" ref={carouselRef}>
            {items.map((project, i) => (
              <div className="carousel-card" key={`${project.id}-${i}`}>
                <Link to={`/projects#${project.slug}`}>
                  <img src={project.image} alt={project.name} />
                  <div className="carousel-info">
                    <h3 style={{ color: 'white' }}>{project.name}</h3>
                    <p style={{ color: 'white' }}>{project.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Modern Nav Buttons */}
          <button
            className="carousel-btn prev"
            onClick={() => setIndex((i) => i - 1)}
          >
            ‹
          </button>
          <button
            className="carousel-btn next"
            onClick={() => setIndex((i) => i + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
