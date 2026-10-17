import React, { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Tag, CheckCircle, TrendingUp, Layers, Code2 } from "lucide-react";

import { Abstract3D } from "./Projects";
import "./Projects.css"; 
import { projectsData } from "../data/mock";
import { buildBreadcrumb } from "../data/schema";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  const canonicalUrl = `https://qllmsoft.com/projects/${project.slug}`;
  const pageTitle = `${project.title} | QllmSoft Case Study`;
  const metaDescription = project.shortDescription;

  const breadcrumbSchema = buildBreadcrumb([
    { name: "Home", url: "https://qllmsoft.com/" },
    { name: "Portfolio", url: "https://qllmsoft.com/projects" },
    { name: project.title, url: canonicalUrl },
  ]);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${canonicalUrl}#work`,
    url: canonicalUrl,
    name: project.title,
    headline: project.title,
    description: metaDescription,
    author: { "@type": "Organization", name: "QllmSoft", url: "https://qllmsoft.com" },
    about: { "@type": "Thing", name: project.category },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(creativeWorkSchema)}</script>
      </Helmet>

      <main className="project-details-page" id="main-content">
        <section className="project-details-hero">
          <div className="container">
            <Link to="/projects" className="back-to-projects"><ArrowLeft size={18} />Back to Projects</Link>
            <div className="project-meta">
              <span className="project-category"><Tag size={14} />{project.category}</span>
            </div>
            <h1>{project.title}</h1>
            <p className="project-description">{project.shortDescription}</p>
          </div>
        </section>

        <section className="project-details-content">
          <div className="container content-grid">
            <div className="text-side">
              <article className="detail-card glass-card">
                <h3>The problem</h3>
                <p className="paragraph">{project.problem}</p>
                <h3>Our approach</h3>
                <p className="paragraph">{project.approach}</p>
                <h3>The result</h3>
                <p className="paragraph">{project.result}</p>
                {project.productUrl && (
                  <>
                    <h3>Our product: QllmDocs</h3>
                    <p className="paragraph">
                      QllmDocs is a product developed and owned by QllmSoft.{" "}
                      <Link to="/qllmdocs">View the QllmDocs product overview</Link>
                      {" or "}
                      <a href={project.productUrl} target="_blank" rel="noopener noreferrer">
                        visit qllmdocs.com
                      </a>
                    </p>
                  </>
                )}
              </article>

              <div className="details-list glass-card">
                <h3>{project.listTitle}</h3>
                <ul>
                  {project.list.map((item) => (
                    <li key={item}><CheckCircle size={18} className="list-icon" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>

              <div className="impact-box glass-card">
                <h3>Impact delivered</h3>
                <div className="impact-grid">
                  {project.impact.map((item) => (
                    <div className="impact-badge" key={item}><TrendingUp size={16} /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="image-side">
              <div className="sticky-media-card">
                <div className="stage-card glass-card" style={{ "--accent": project.accent }}>
                  <img src={project.image} alt={project.title} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <Abstract3D shape={project.shape} accent={project.accent} size="md" />
                </div>

                <div className="project-sidebar-card glass-card">
                  <h4>Project highlights</h4>
                  <ul>
                    <li><Layers size={16} /><div><strong>Category</strong><p>{project.category}</p></div></li>
                    <li><Code2 size={16} />
                      <div><strong>Tech stack</strong>
                        <ul className="chip-row">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                      </div>
                    </li>
                  </ul>
                  {project.productUrl && (
                    <a
                      href={project.productUrl}
                      className="btn btn-primary cta-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore QllmDocs
                    </a>
                  )}
                  <Link to="/contact" className="btn btn-primary cta-btn">Request a similar build</Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProjectDetails;