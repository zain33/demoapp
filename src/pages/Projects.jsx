/**
 * Projects.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────
 * ROLE IN THE FUNNEL: BOFU. Visitors here are evaluating whether
 * QllmSoft can actually deliver, not what QllmSoft is or what it
 * offers. Proof density and specificity matter more than breadth.
 *
 * TOPICAL SCOPE ON THIS PAGE VS OTHER PAGES:
 * Home mentions two case studies in one paragraph each. This page
 * gives three case studies in full problem, approach, result,
 * and metrics format, with different specific wording than Home
 * even where the same project is referenced. FAQ here covers
 * portfolio and engagement mechanics only, not the service or
 * pricing questions already answered on Services.jsx.
 */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/mock";
import financialsystemImg from "../assets/qllm-soft-finance-management-system-11.webp";
import {
  schemaOrganization,
  schemaFounder,
  schemaWebsite,
  buildBreadcrumb,
  buildFAQSchema,
  FACTS,
} from "../data/schema";
import "./Projects.css";

const schemaBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://qllmsoft.com/" },
  { name: "Portfolio", url: "https://qllmsoft.com/projects" },
]);

const schemaCollectionPage = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://qllmsoft.com/projects#webpage",
  url: "https://qllmsoft.com/projects",
  name: "Software Development Portfolio and Case Studies | QllmSoft",
  description: `Verified portfolio of ${FACTS.projectsDelivered} custom software projects delivered by QllmSoft since ${FACTS.foundingYear}.`,
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QllmSoft software development projects",
  url: "https://qllmsoft.com/projects",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Alfa Financial Solution, .NET enterprise system", url: "https://qllmsoft.com/projects/alfa-financial-solution" },
    { "@type": "ListItem", position: 2, name: "Busel Business Platform, ASP.NET Core web application", url: "https://qllmsoft.com/projects/busel-business-platform" },
    { "@type": "ListItem", position: 3, name: "Finance Management System, REST API and React", url: "https://qllmsoft.com/finance-management-system" },
    { "@type": "ListItem", position: 4, name: "Fleet Transportation Management, enterprise software", url: "https://qllmsoft.com/projects/fleet-transportation" },
    { "@type": "ListItem", position: 5, name: "Online Examination Platform, custom LMS", url: "https://qllmsoft.com/projects/online-examination" },
    { "@type": "ListItem", position: 6, name: "Property Management System, real estate software", url: "https://qllmsoft.com/projects/property-management" },
  ],
};

/* Three full case studies, wording distinct from the shorter versions on Home.jsx */
const caseStudies = [
  {
    title: "Finance management system",
    industry: "Financial services",
    stack: "ASP.NET Core, React, SQL Server, Azure",
    problem:
      "A finance department was tracking budgets and approvals across a shared spreadsheet that multiple people edited simultaneously. Version conflicts were routine, and there was no audit trail showing who had approved a given expense or when.",
    approach:
      "QllmSoft replaced the spreadsheet with a role based web application. Department heads submit budget requests through a structured form, approvals route automatically to the correct manager based on amount thresholds, and every action is logged with a timestamp and user identity.",
    result:
      "Month end close time fell by 60 percent, and the finance team gained a complete, exportable audit trail for the first time, which resolved a recurring finding in the company's annual external audit.",
    link: "/finance-management-system",
  },
  {
    title: "Alfa Financial Solution",
    industry: "Financial services",
    stack: ".NET, Entity Framework, SQL Server",
    problem:
      "A decade old financial platform could not support growing transaction volume or the compliance reporting the client's regulator began requiring. Scheduled downtime for maintenance was affecting daily operations and directly costing revenue.",
    approach:
      "QllmSoft ran a phased migration rather than a full rebuild, refactoring core modules and modernizing the data access layer while introducing a secure REST API, all without taking the existing system offline during business hours.",
    result:
      "Response times improved by 60 percent after the migration, every flagged security vulnerability from the client's compliance audit was resolved, and the development team was able to ship new features roughly three times faster than before the migration.",
    link: "/projects/alfa-financial-solution",
  },
  {
    title: "Fleet transportation management",
    industry: "Logistics",
    stack: "ASP.NET Core, React, REST API",
    problem:
      "A logistics operator was coordinating dozens of vehicles and drivers using phone calls and a paper log, which made it impossible to see fleet status in real time or catch scheduling conflicts before they caused a missed delivery.",
    approach:
      "QllmSoft built a fleet management platform with live vehicle status tracking, automated route assignment, and a driver facing mobile view, connected to the dispatcher dashboard through a shared API.",
    result:
      "The client reduced missed delivery windows and gained a single dashboard showing every vehicle's status, replacing a process that had previously required a dispatcher to call each driver individually to confirm location.",
    link: "/projects/fleet-transportation",
  },
];

const faqItems = [
  {
    q: "How is each project on this page verified as real work QllmSoft actually completed?",
    a: `Every case study here corresponds to a real engagement, and the underlying delivery record is independently maintained on Upwork (${FACTS.upworkScore} Job Success Score) and Freelancer (${FACTS.freelancerRating} star rating across ${FACTS.reviewCount} reviews). Both platforms track completed contracts and client feedback outside QllmSoft's own control, which is different from a testimonial written for a marketing page.`,
  },
  {
    q: "Why do some case studies describe the client's industry without naming the company?",
    a: "Most engagements are covered by a signed NDA that restricts naming the client publicly, even after the project ships. The technical details, the problem, and the measured outcome are all accurate. What is withheld is the client's name and any identifying business detail the NDA covers.",
  },
  {
    q: "Can a startup with no existing product hire QllmSoft for a first version, or only established businesses?",
    a: "Startups building a first version are a regular part of the project mix. These builds use production grade architecture from the start specifically so the product does not need a rebuild once it finds traction, rather than shipping disposable throwaway code meant only for a demo.",
  },
  {
    q: "Does the portfolio include projects outside of finance and logistics?",
    a: "Yes. Finance and logistics happen to be the two sectors with the most publicly shareable case studies due to NDA terms, but the full delivery history also includes healthcare booking systems, education platforms, real estate management tools, and eCommerce storefronts, several of which are detailed on their respective industry pages.",
  },
  {
    q: "Is an NDA signed before QllmSoft sees any details of a prospective project?",
    a: "Yes, on the first substantive call, before any technical discussion of the idea takes place. This is standard for every engagement, not an optional add on requested by cautious clients.",
  },
];

const schemaFAQ = buildFAQSchema(faqItems);

const Projects = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.15 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Helmet>
        <title>Software Development Portfolio and Case Studies | QllmSoft</title>
        <meta
          name="description"
          content={`Explore QllmSoft's verified portfolio of ${FACTS.projectsDelivered} custom software projects, enterprise web apps, mobile apps, and REST APIs delivered for global clients.`}
        />
        <meta name="keywords" content="software development portfolio, custom software case studies, QllmSoft projects, enterprise software examples" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/projects" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/projects" />
        <meta property="og:title" content="Software Development Portfolio | QllmSoft" />
        <meta property="og:description" content="Verified case studies, enterprise web apps, mobile apps, and REST APIs delivered for global businesses." />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaCollectionPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaItemList)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="projects-page" id="main-content" role="main">
        <section className="projects-hero reveal" aria-labelledby="projects-hero-heading">
          <div className="container">
            <h1 id="projects-hero-heading">Software development portfolio and verified case studies</h1>
            <p>
              {FACTS.projectsDelivered} custom software projects delivered since {FACTS.foundingYear}, spanning
              enterprise web applications, mobile apps, and REST APIs. The delivery record behind this portfolio
              is independently verifiable on{" "}
              <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer">Upwork</a>{" "}
              and{" "}
              <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer">Freelancer</a>.
            </p>
          </div>
        </section>

        {/* ── METHODOLOGY ── adds E-E-A-T by explaining how case studies are sourced ── */}
        <section className="section" aria-labelledby="method-heading">
          <div className="container" style={{ maxWidth: "820px" }}>
            <h2 id="method-heading">How these case studies are put together</h2>
            <p>
              Every case study on this page describes a project QllmSoft actually delivered, using the real
              technical approach and the real measured outcome. Where a client's name or specific identifying
              detail is withheld, that is because a signed non disclosure agreement restricts naming them, which
              is standard on most engagements. The technical facts and the results are not altered to compensate
              for what cannot be named.
            </p>
          </div>
        </section>

        {/* ── FULL CASE STUDIES ── */}
        <section className="section" aria-labelledby="case-studies-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="case-studies-heading">Three projects in full detail</h2>
            </div>
            <div className="case-grid">
              {caseStudies.map((c) => (
                <article key={c.title} className="case-card" itemScope itemType="https://schema.org/CreativeWork">
                  <span className="badge bg-secondary mb-2">{c.industry}</span>
                  <h3 itemProp="name">{c.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#718096" }}><strong>Stack:</strong> {c.stack}</p>
                  <p><strong>Problem.</strong> {c.problem}</p>
                  <p><strong>Approach.</strong> {c.approach}</p>
                  <p><strong>Result.</strong> {c.result}</p>
                  <Link to={c.link} className="story-link">Read more about this project</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS GRID ── */}
        <section className="section projects-grid-section" aria-labelledby="grid-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="grid-heading">The rest of the portfolio</h2>
              <p>Every project below follows the same fixed price, documented scope process described on the services page.</p>
            </div>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES REPRESENTED ── */}
        <section className="section" style={{ background: "#F7FAFC" }} aria-labelledby="industries-heading">
          <div className="container" style={{ maxWidth: "820px" }}>
            <h2 id="industries-heading">Industries represented in this portfolio</h2>
            <p>
              The case studies above focus on finance and logistics because those clients permitted the most
              public detail. The broader delivery history also includes{" "}
              <Link to="/healthcare-software-development-pakistan">healthcare booking and patient management systems</Link>,{" "}
              <Link to="/education-software-development-pakistan">school and learning management platforms</Link>,{" "}
              <Link to="/real-estate-software-development">property and tenant management tools</Link>, and custom
              eCommerce storefronts. Each of those categories has a dedicated page covering the specific
              requirements of that sector.
            </p>
          </div>
        </section>

        {/* ── PORTFOLIO DOWNLOAD ── */}
        <section className="section portfolio-download-section">
          <div className="container">
            <div className="portfolio-box reveal">
              <h2>Download the full portfolio PDF</h2>
              <p>
                {FACTS.yearsExperience} of technical capabilities, delivery methodology, and client outcomes
                across six industries, including architecture approaches and technology stacks for each
                engagement listed above.
              </p>
              <a href="/pdfs/QllmSoft-Company-Profile.pdf" className="btn btn-primary portfolio-download-btn" download>
                Download portfolio PDF
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── scoped to portfolio and engagement mechanics only ── */}
        <section className="section faq-section" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="faq-header reveal">
              <h2 id="faq-heading">Portfolio and engagement questions</h2>
            </div>
            <div className="faq-container">
              {faqItems.map((item, i) => (
                <details key={i} className="faq-item reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary itemProp="name">{item.q}</summary>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">Start your custom software development project</h2>
              <p>Get a detailed fixed price proposal within 24 hours of your free consultation.</p>
              <Link to="/contact" className="btn btn-primary">Request free consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
