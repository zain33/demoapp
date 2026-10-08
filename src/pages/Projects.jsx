/**
 * Projects.jsx, QllmSoft
 *   Case studies and the grid are
 * driven entirely by data/mock.js, which lists only the approved projects.
 */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { projectsData } from "../data/mock";
import {
  schemaOrganization, schemaFounder, schemaWebsite,
  buildBreadcrumb, buildFAQSchema, FACTS,
} from "../data/schema";
import "./Projects.css";


const faces = (n, cls) => Array.from({ length: n }, (_, i) => <i key={i} className={`${cls} ${cls}-${i}`} style={{ "--i": i }} />);
const SHAPES = {
  cube: () => faces(6, "cf"),
  orb: () => (<><i className="orb" /><i className="oring o1" /><i className="oring o2" /></>),
  gyro: () => faces(3, "gr"),
  layers: () => faces(4, "pl"),
  pyramid: () => faces(4, "py"),
  helix: () => faces(7, "hx"),
};
export const Abstract3D = ({ shape = "cube", accent = "#edb702", size = "md", className = "" }) => (
  <div className={`a3d a3d-${size} ${className}`} style={{ "--accent": accent }} aria-hidden="true">
    <div className={`a3d-scene scene-${shape}`}>{(SHAPES[shape] || SHAPES.cube)()}</div>
  </div>
);

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
  description: "Featured enterprise software projects by QllmSoft: AI document management, attendance, HRMS, payroll, finance, logistics, and inventory systems.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
};

const schemaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "QllmSoft software development projects",
  url: "https://qllmsoft.com/projects",
  itemListElement: projectsData.map((p, i) => ({
    "@type": "ListItem", position: i + 1, name: p.title, url: `https://qllmsoft.com/projects/${p.slug}`,
  })),
};

// The three lead projects .
const caseStudies = projectsData.slice(0, 3);

const PortfolioPdf = "/pdfs/QllmSoft - Website Development Portfolio.pdf";

const faqItems = [
  {
    q: "How is each project on this page verified as real work QllmSoft actually completed?",
    a: `Every case study here corresponds to a real engagement, and the underlying delivery record is independently maintained on Upwork (${FACTS.upworkScore} Job Success Score) and Freelancer (${FACTS.freelancerRating} star rating across ${FACTS.reviewCount} reviews).`,
  },
  {
    q: "Why do some case studies describe the client's industry without naming the company?",
    a: "Most engagements are covered by a signed NDA that restricts naming the client publicly, even after the project ships. The technical details, the problem, and the outcome are accurate.",
  },
  {
    q: "Can a startup with no existing product hire QllmSoft for a first version?",
    a: "Yes. Startups building a first version are a regular part of our work. These builds use production-grade architecture from the start so the product scales cleanly.",
  },
  {
    q: "Is an NDA signed before QllmSoft sees any details of a prospective project?",
    a: "Yes, on the first substantive call before any technical discussion takes place.",
  },
];


const techStack = [
  { group: "Frontend development", items: ["React", "Next.js", "TypeScript", "HTML5 and CSS3", "Tailwind CSS"] },
  { group: "Backend development", items: ["ASP.NET Core", "C#", "Node.js", "REST APIs", "SignalR"] },
  { group: "Databases", items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"] },
  { group: "AI and automation", items: ["RAG chatbots", "OpenAI and Anthropic APIs", "AI document management", "Python"] },
  { group: "Mobile and biometric", items: ["React Native", "Flutter", "Biometric attendance SDKs"] },
  { group: "Cloud and DevOps", items: ["Azure", "AWS", "Docker", "CI/CD", "Nginx"] },
];

const introPoints = [
  "Enterprise web applications, mobile apps and custom platforms",
  "AI document management, HRMS, payroll, finance, logistics and inventory systems",
  "Production-grade architecture from the first version",
];


const schemaTech = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://qllmsoft.com/#organization",
  knowsAbout: techStack.flatMap((g) => g.items),
};



const schemaFAQ = buildFAQSchema(faqItems);

const Projects = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Software Development Portfolio and Case Studies | QllmSoft</title>
        <meta name="description" content="Explore QllmSoft's featured enterprise software: AI document management, biometric attendance, HRMS, payroll, finance, logistics, and inventory systems." />
        <meta name="keywords" content="software development portfolio, custom software case studies, QllmSoft projects, enterprise software examples, ASP.NET, RAG chatbot" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/projects" />
        <meta property="og:title" content="Software Development Portfolio | QllmSoft" />
        <meta property="og:description" content="Case studies in AI document management, workforce, finance, logistics, and inventory software." />
        {[schemaOrganization, schemaFounder, schemaWebsite, schemaBreadcrumb, schemaCollectionPage, schemaItemList, schemaTech, schemaFAQ].map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
        ))}
      </Helmet>

      <main className="projects-page" id="main-content" role="main">
        {/* HERO */}
        <section className="projects-hero reveal" aria-labelledby="projects-hero-heading">
          <div className="container">
            <h1 id="projects-hero-heading">Software development portfolio and verified case studies</h1>
            <p>
              {FACTS.projectsDelivered} custom software projects delivered since {FACTS.foundingYear}, spanning
              enterprise web applications, mobile apps, and custom platforms.
            </p>
          </div>
        </section>


<section className="section projects-intro" aria-labelledby="intro-heading">
  <div className="container">
    <div className="intro-card reveal">
      <div className="intro-copy">
        <h2 id="intro-heading">Custom software development case studies</h2>
        <p>
          QllmSoft  a custom software development company. Below you will find the
          platforms we have designed, built and delivered, each with the problem, our approach
          and the result. If you need something similar, see our{" "}
          <Link to="/services">software development services</Link> or{" "}
          <Link to="/contact">talk to our team</Link>.
        </p>
      </div>
      <ul className="intro-points">
        {introPoints.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  </div>
</section>



        {/* CASE STUDIES */}
        <section className="section" aria-labelledby="case-studies-heading">
          <div className="container">
            <div className="section-title reveal">
              <h2 id="case-studies-heading">Featured case studies</h2>
              <p>From the problem to the platform, in plain terms.</p>
            </div>
            <div className="case-grid">
              {caseStudies.map((c, i) => (
                <article key={c.slug} className="case-card glass-card reveal" style={{ transitionDelay: `${i * 90}ms` }}
                  itemScope itemType="https://schema.org/CreativeWork">
                  <div className="case-media"><img src={c.image} alt={c.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} /></div>
                  <span className="case-badge">{c.category}</span>
                  <h3 itemProp="name">{c.title}</h3>
                  <p className="case-stack"><strong>Stack:</strong> {c.stack.join(", ")}</p>
                  <p><strong>Problem:</strong> {c.problem}</p>
                  <p><strong>Approach:</strong> {c.approach}</p>
                  <p><strong>Result:</strong> {c.result}</p>
                  <Link to={`/projects/${c.slug}`} className="story-link">Read the full case study</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ALL PROJECTS */}
        <section className="section projects-grid-section" aria-labelledby="grid-heading">
          <div className="orb-blob blob-1" aria-hidden="true" /><div className="orb-blob blob-2" aria-hidden="true" />
          <div className="container">
            <div className="section-title reveal">
              <h2 id="grid-heading">All projects</h2>
              <p>Every platform we feature, with the stack behind it.</p>
            </div>
            <div className="projects-grid">
              {projectsData.map((p, i) => (
                <div key={p.id} className="reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
                  <Link to={`/projects/${p.slug}`} className="p-card glass-card" aria-label={p.title}>
                    <div className="p-card-stage" style={{ "--accent": p.accent }}>
                      <img src={p.image} alt={p.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                      <Abstract3D shape={p.shape} accent={p.accent} size="sm" />
                    </div>
                    <div className="p-card-body">
                      <span className="p-card-cat">{p.category}</span>
                      <h3>{p.title}</h3>
                      <p>{p.shortDescription}</p>
                      <ul className="chip-row">
                        {p.stack.slice(0, 4).map((s) => <li key={s}>{s}</li>)}
                        {p.stack.length > 4 && <li>+{p.stack.length - 4}</li>}
                      </ul>
                      <span className="p-card-link">View case study</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

<section className="section tech-section" aria-labelledby="tech-heading">
  <div className="container">
    <div className="section-title reveal">
      <h2 id="tech-heading">Technologies we use to build enterprise software</h2>
      <p>The languages, frameworks and platforms behind the projects above.</p>
    </div>
    <div className="tech-grid">
      {techStack.map((g, i) => (
        <div key={g.group} className="tech-card glass-card reveal" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
          <h3>{g.group}</h3>
          <ul className="chip-row">
            {g.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Portfolio Download */}
        <section className="section portfolio-download-section" aria-labelledby="portfolio-download-heading">
          <div className="container">
            <div className="portfolio-download-card reveal">
              <div className="portfolio-download-copy">
                <span className="portfolio-download-kicker">Download portfolio</span>
                <h2 id="portfolio-download-heading">Download the full QllmSoft portfolio</h2>
                <p>
                  10+ technical capabilities, delivery methodologies, and measurable client outcomes across six industries,
                  including architecture approach, technology stack, and engagement models used for each engagement listed above.
                </p>
              </div>
              <a
                className="portfolio-download-btn"
                href={PortfolioPdf}
                download="QllmSoft-Website-Development-Portfolio.pdf"
              >
                Download full portfolio
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq-section" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="faq-header reveal"><h2 id="faq-heading">Portfolio and engagement questions</h2></div>
            <div className="faq-container">
              {faqItems.map((item, i) => (
                <details key={i} className="faq-item glass-card reveal" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <summary itemProp="name">{item.q}</summary>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">{item.a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-cta" aria-labelledby="cta-heading">
  <div className="container">
    <div className="cta-card reveal">
      <h2 id="cta-heading">Build your custom software with QllmSoft</h2>
      <p>
        Share your idea and get a clear plan and estimate. We sign an NDA before any technical
        discussion, so your project stays confidential.
      </p>
      <div className="cta-actions">
        <Link to="/contact" className="cta-btn cta-primary">Request a free consultation</Link>
        <Link to="/software-development-cost-calculator" className="cta-btn cta-secondary">
          Use the software cost calculator
        </Link>
      </div>
    </div>
  </div>
</section>
      </main>
    </>
  );
};

export default Projects;