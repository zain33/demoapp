import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  Tag,
  CheckCircle,
  TrendingUp
} from "lucide-react";

import { projectsData } from "../data/mock";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <main className="project-details-page">

      {/* HERO */}
      <section className="project-details-hero">
        <div className="container">

          <Link to="/projects" className="back-to-projects">
            <ArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="project-meta">
            <span className="project-category">
              <Tag size={14} />
              {project.details.category}
            </span>
          </div>

          <h1>{project.title}</h1>

          <p className="project-description">
            {project.shortDescription}
          </p>

        </div>
      </section>


      {/* ⭐⭐⭐ UPDATED CONTENT LAYOUT ⭐⭐⭐ */}
      <section className="project-details-content">
        <div className="container content-grid">

          {/* LEFT SIDE */}
          <div className="text-side">

            {project.details.paragraphs.map((p, i) => (
              <p key={i} className="paragraph">
                {p}
              </p>
            ))}

            {/* LIST */}
            <div className="details-list">
              <strong>{project.details.listTitle}</strong>

              <ul>
                {project.details.list.map((item, i) => (
                  <li key={i}>
                    <CheckCircle size={18} className="list-icon"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMPACT */}
            <div className="impact-box">
              <strong>Impact Delivered</strong>

              <div className="impact-grid">
                {project.details.impact.map((i, index) => (
                  <span key={index}>
                    <TrendingUp size={14}/>
                    {i}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ⭐ RIGHT SIDE IMAGE ⭐ */}
          <div className="image-side">
            <img src={project.image} alt={project.title} />
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProjectDetails;
