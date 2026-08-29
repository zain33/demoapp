/**
 * Home.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────
 * ROLE IN THE FUNNEL: Top of funnel entity page. States who
 * QllmSoft is, proves credibility with specifics, and routes
 * the visitor into /services (commercial intent) or /projects
 * (proof seeking intent).
 *
 * TOPICAL SCOPE ON THIS PAGE VS OTHERS:
 * Home defines the entity and gives a one paragraph overview of
 * each service line. It does not repeat the full service catalog
 * from Services.jsx word for word, and it does not repeat the
 * full case study writeups from Projects.jsx word for word. Each
 * page covers the same general subject from a different angle,
 * which is the point of separating macro context by page.
 *
 * FAQ on this page is scoped to entity level questions (who is
 * QllmSoft, where is the team based, do you work with startups).
 * FAQ on Services.jsx is scoped to service level questions (what
 * do you build, how much does it cost). The two sets do not
 * overlap, so both can carry FAQPage schema without duplication.
 */

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";

import HeroSlider from "../components/HeroSlider";
import ServiceCard from "../components/ServiceCard";
import { homeServices, trustedPartners } from "../data/mock";
import ProjectSections from "../components/ProjectSections";
import TechnologiesSlider from "../components/TechnologiesSlider";
import TestimonialSection from "../components/TestimonialSection";
import blogPostsData from "../data/blogPostsData";
import financialsystemImg from "../assets/qllm-soft-finance-management-system-11.webp";
import AboutImg from "../assets/HeroQllmsoftimg.webp";
import GlobalTeamImg from "../assets/pakistanimg.webp";
import {
  schemaOrganization,
  schemaFounder,
  schemaWebsite,
  buildServiceSchema,
  buildFAQSchema,
  FACTS,
} from "../data/schema";
import "./Home.css";
import "animate.css";

/* ─── JSON-LD unique to Home ────────────────────────────────── */
const schemaHomePage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://qllmsoft.com/#webpage",
  url: "https://qllmsoft.com",
  name: "Custom Software Development Company | QllmSoft",
  description:
    "QllmSoft builds enterprise software, web applications, mobile apps, and AI powered solutions for businesses worldwide.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": "https://qllmsoft.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
  },
};

const schemaHomeService = buildServiceSchema({
  id: "https://qllmsoft.com/#service-overview",
  name: "Custom Software Development Services",
  description:
    "Custom software development, enterprise web applications, mobile apps, business automation, API integration, and AI powered software solutions for businesses worldwide.",
  url: "https://qllmsoft.com/services",
});

/* Entity level FAQ. Different questions than Services.jsx on purpose. */
const homeFaqItems = [
  {
    q: "Who is QllmSoft and what does the company actually do?",
    a: `QllmSoft is a custom software development company founded in ${FACTS.foundingYear}. The team designs and builds enterprise web applications, mobile apps, business automation systems, and AI powered tools for clients that need software built around their specific operations rather than adapted from a generic template.`,
  },
  {
    q: "Does QllmSoft only take on large enterprise projects, or also smaller ones?",
    a: "Both. Engagements range from a single internal tool replacing a spreadsheet workflow for a small business, up to multi module platforms for enterprise clients. Project scope determines pricing and timeline, not company size.",
  },
  {
    q: "Where is the QllmSoft team based and who do they serve?",
    a: "The core engineering team operates out of Punjab, Pakistan, and works with clients across North America, the United Kingdom, Europe, and the Gulf region, in addition to businesses within Pakistan. Communication runs in English with working hours overlapping US, UK, and Gulf business days.",
  },
  {
    q: "How is QllmSoft different from a typical outsourcing agency?",
    a: "Most outsourcing arrangements bill hourly with an open ended scope. QllmSoft scopes every project in writing before development starts, quotes a fixed price against that scope, and keeps the same engineers on a project from discovery through post launch support rather than rotating staff between clients.",
  },
];

const schemaHomeFAQ = buildFAQSchema(homeFaqItems);

/* Two full case studies with specific outcomes, distinct wording from Projects.jsx */
const featuredCaseStudies = [
  {
    title: "Enterprise financial management platform",
    industry: "Finance",
    problem:
      "A mid sized finance team was closing the books using disconnected spreadsheets shared by email. Reconciliation errors were common, and senior leadership had no real time view of departmental spending until the following month.",
    approach:
      "QllmSoft built a role based platform on ASP.NET Core with a React front end, replacing manual entry with automated data capture from existing accounting sources and a live approval workflow for department heads.",
    result:
      "Month end close time dropped by 60 percent and leadership gained same day visibility into spending across every department, replacing the prior month long reporting lag.",
    image: financialsystemImg,
    alt: "Enterprise financial management platform dashboard built by QllmSoft",
    link: "/finance-management-system",
  },
  {
    title: "QllmDocs, a document management system for compliance heavy teams",
    industry: "Legal and compliance",
    problem:
      "Contract and compliance documents were circulating by email with no version control, which created real exposure for a client handling regulated filings where the wrong version reaching the wrong person carries financial risk.",
    approach:
      "The team built a document management platform with granular role based permissions, a complete audit trail on every file action, and AI assisted search that locates documents by content instead of filename, deployed on Azure with encrypted storage.",
    result:
      "Manual document handling overhead dropped by more than 70 percent, and the client passed its next compliance review without a single flagged document access issue.",
    image: financialsystemImg,
    alt: "QllmDocs secure document management dashboard built by QllmSoft",
    link: "/projects/alfa-financial-solution",
  },
];

const Home = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const blogPreviewSlugs = [
    "custom-vs-saas-ecommerce-for-growing-smbs",
    "role-based-access-problems-why-teams-break-systems",
    "when-internal-software-slows-teams-instead-of-helping",
  ];

  return (
    <>
      <Helmet>
        <title>Custom Software Development Company | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft builds enterprise web applications, mobile apps and AI solutions for global clients. Fixed price delivery, 100% IP ownership. Free quote in 24 hours."
        />
        <meta
          name="keywords"
          content="custom software development company, enterprise software development, custom software solutions, software outsourcing services"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Custom Software Development Company | QllmSoft" />
        <meta
          property="og:description"
          content="Enterprise software, mobile apps, and AI powered solutions for global businesses. Fixed price delivery, verified track record."
        />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Company | QllmSoft" />
        <meta name="twitter:description" content="Custom web apps, mobile apps, and AI powered solutions built for businesses worldwide." />
        <meta name="twitter:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomePage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomeService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaHomeFAQ)}</script>
      </Helmet>

      <main className="home-page" id="main-content" role="main">
        <HeroSlider />

        {/* ── ENTITY DEFINITION ── first sentence answers who QllmSoft is directly */}
        <section className="section about-section bg-light" ref={aboutRef} aria-labelledby="about-heading">
          <div className="container">
            <div className="about-content">
              <div className={`about-image animate__animated ${aboutInView ? "animate__fadeInLeft" : ""}`}>
                <img
                  src={AboutImg}
                  alt="QllmSoft engineering team building enterprise web and mobile applications"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={`about-text animate__animated ${aboutInView ? "animate__fadeInRight" : ""}`}>
                <h2 id="about-heading" className="section-title">
                  A custom software development company built for real operations, not templates
                </h2>
                <p className="direct-answer">
                  QllmSoft is a <strong>custom software development company</strong> founded in{" "}
                  {FACTS.foundingYear}. The team designs, builds, and maintains enterprise web applications,
                  mobile apps, and AI powered automation tools under fixed price, fixed scope contracts, so
                  clients know the total cost before development begins rather than discovering it through an
                  hourly invoice.
                </p>
                <p>
                  Founder and CEO Zain Ul Abedin leads a team that has shipped {FACTS.projectsDelivered} production
                  systems for {FACTS.globalClients} clients spanning finance, healthcare, logistics, and eCommerce.
                  Every engagement runs on the same technology stack the team uses internally: ASP.NET Core and
                  C# on the backend, React on the frontend, SQL Server for relational data, and Flutter when a
                  project needs a single mobile codebase for both Android and iOS.
                </p>
                <p>
                  That track record is not something visitors have to take on faith. It is verifiable directly on{" "}
                  <a href="https://www.upwork.com/freelancers/~0170e20f8803389a86" target="_blank" rel="noopener noreferrer">
                    Upwork, where QllmSoft holds a {FACTS.upworkScore} Job Success Score
                  </a>
                  , and on{" "}
                  <a href="https://www.freelancer.com/u/mrprogrmmr" target="_blank" rel="noopener noreferrer">
                    Freelancer, with a {FACTS.freelancerRating} star rating across {FACTS.reviewCount} reviews
                  </a>
                  . Both platforms are independent of QllmSoft and cannot be edited by the company itself.
                </p>
                <Link to="/about" className="btn btn-primary" aria-label="Learn more about QllmSoft">
                  Read the full company story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE BUILD ── one paragraph per service line, each linking to its dedicated page */}
        <section className="section services-section" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="services-heading">What we build</h2>
              <p>
                Five categories of work make up most of what QllmSoft delivers. Each one has its own dedicated
                page with full technical detail, pricing factors, and a service specific FAQ. What follows is the
                short version of each.
              </p>
            </div>

            <div className="services-grid">
              {homeServices.slice(0, 4).map((service, index) => {
                const animation = index < 2 ? "animate__fadeInLeft" : "animate__fadeInRight";
                return (
                  <div key={service.id} className={`animate__animated ${servicesInView ? animation : ""}`}>
                    <ServiceCard service={service} />
                  </div>
                );
              })}
            </div>

            <div className="csd-about" style={{ marginTop: "32px" }}>
              <p>
                <strong>
                  <Link to="/custom-software-development-services">Custom software development</Link>
                </strong>{" "}
                covers internal tools and business specific systems built when an off the shelf product like a
                generic CRM or ERP module no longer fits how a company actually operates. This is the right
                starting point when a business is bending a SaaS tool into shapes it was never designed for.
              </p>
              <p>
                <strong>
                  <Link to="/website-development-services">Website development</Link>
                </strong>{" "}
                covers public facing marketing sites and eCommerce storefronts, built custom coded rather than on
                a page builder, so page speed and technical SEO are part of the build rather than something
                patched in afterward.
              </p>
              <p>
                <strong>
                  <Link to="/web-application-development-services">Web application development</Link>
                </strong>{" "}
                covers enterprise portals and SaaS platforms built specifically on ASP.NET Core, for projects
                where the deliverable is a login protected application rather than a public marketing page.
              </p>
              <p>
                <strong>
                  <Link to="/api-development-services">API development</Link>
                </strong>{" "}
                covers the backend layer connecting a frontend, a database, and third party services such as
                payment gateways or CRMs, using REST, GraphQL, or SOAP depending on what the integration
                actually requires.
              </p>
              <p>
                <strong>
                  <Link to="/mobile-app-development">Mobile app development</Link>
                </strong>{" "}
                covers Android and iOS apps, typically built in Flutter for a shared codebase, or natively when a
                project needs direct hardware access that a cross platform framework cannot provide cleanly.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link to="/services" className="btn btn-primary" aria-label="See the full QllmSoft service catalog">
                See the full service catalog and pricing model
              </Link>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── short, links out to dedicated industry pages where they exist */}
        <section className="section" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">Industries with the deepest project history</h2>
              <p>
                Software requirements differ meaningfully by sector. A hospital booking system has compliance
                requirements a retail storefront never encounters, and a lending platform has audit requirements
                a school portal never encounters. These are the sectors QllmSoft has built repeatedly.
              </p>
            </div>
            <div className="why-grid">
              <article className="why-card">
                <h3><Link to="/healthcare-software-development-pakistan">Healthcare</Link></h3>
                <p>Clinic booking systems, patient portals, and hospital management platforms built with role based access controls around sensitive patient data.</p>
              </article>
              <article className="why-card">
                <h3>Finance and fintech</h3>
                <p>Financial reporting dashboards, budgeting and approval systems, and payment integrations, including the platform detailed in the case study below.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/education-software-development-pakistan">Education</Link></h3>
                <p>School management systems, learning management platforms, and online examination tools for institutions managing multiple campuses.</p>
              </article>
              <article className="why-card">
                <h3>Logistics and eCommerce</h3>
                <p>Inventory tracking, delivery routing tools, and custom storefronts for retailers who have outgrown what a template store platform can support.</p>
              </article>
              <article className="why-card">
                <h3><Link to="/real-estate-software-development">Real estate</Link></h3>
                <p>Property listing portals, tenant management platforms, and lease tracking systems for agencies and property managers.</p>
              </article>
              <article className="why-card">
                <h3>HR and enterprise operations</h3>
                <p>Payroll systems, employee portals, and attendance tracking tools for operations heavy organizations replacing manual processes.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── unique attributes with specifics, not generic claims */}
        <section className="section why-section" aria-labelledby="why-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="why-heading">What the engagement actually looks like</h2>
              <p>
                These are structural facts about how QllmSoft works, not marketing adjectives.
              </p>
            </div>
            <div className="why-grid">
              <article className="why-card">
                <h3>Scope is written before pricing is quoted</h3>
                <p>A formal scope document exists before a price is proposed. If the scope does not change during the build, the price does not change either.</p>
              </article>
              <article className="why-card">
                <h3>Source code and IP transfer on delivery</h3>
                <p>Every project ends with full intellectual property transfer, a documented repository handoff, and no ongoing licensing dependency on QllmSoft.</p>
              </article>
              <article className="why-card">
                <h3>Security follows a published standard</h3>
                <p>
                  Builds follow the{" "}
                  <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer nofollow">
                    OWASP Top 10
                  </a>{" "}
                  security framework, with functional, load, and penetration testing completed before launch, not
                  after a client reports a problem.
                </p>
              </article>
              <article className="why-card">
                <h3>Support does not end at launch</h3>
                <p>A 30 day post launch window covering bug fixes and monitoring is included in every project, with optional maintenance contracts for anything beyond that window.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ── PROOF: two full case studies ── */}
        <section className="section" aria-labelledby="case-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="case-heading">Two projects that show how this works in practice</h2>
            </div>
            <div className="case-grid">
              {featuredCaseStudies.map((c) => (
                <article key={c.title} className="case-card">
                  <img src={c.image} alt={c.alt} loading="lazy" />
                  <span className="badge bg-secondary mb-2">{c.industry}</span>
                  <h3>{c.title}</h3>
                  <p><strong>Problem.</strong> {c.problem}</p>
                  <p><strong>Approach.</strong> {c.approach}</p>
                  <p><strong>Result.</strong> {c.result}</p>
                  <Link to={c.link} className="story-link">Read the full case study</Link>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/projects" className="btn btn-primary">
                View the full portfolio, {FACTS.projectsDelivered} projects
              </Link>
            </div>
          </div>
        </section>

        <section className="section testimonial-section" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">Client reviews</h2>
          <TestimonialSection />
        </section>

        <section className="section tech-section" aria-label="Technologies used by QllmSoft">
          <TechnologiesSlider />
        </section>

        {/* ── OUTSOURCING BRIEF ── */}
        <section className="section outsourcing-section">
          <div className="container">
            <div className="outsourcing-content">
              <div className="outsourcing-text">
                <h2>Outsourcing software development, briefly</h2>
                <p>
                  Businesses outsource development for three reasons: access to senior engineering talent that
                  would take months to hire directly, lower management overhead than running an internal team,
                  and faster delivery without a drop in build quality. QllmSoft has run {FACTS.projectsDelivered}{" "}
                  engagements on this model since {FACTS.foundingYear}, working across time zones with clients in
                  North America, the United Kingdom, and the Gulf region.
                </p>
                <Link to="/outsource-software-development-to-pakistan" className="story-link">
                  Read the full outsourcing model
                </Link>
              </div>
              <div className="outsourcing-image">
                <img
                  src={GlobalTeamImg}
                  alt="QllmSoft team delivering software for global businesses"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" aria-label="QllmSoft project portfolio preview">
          <ProjectSections />
        </section>

        <section className="section partners-section" aria-labelledby="partners-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="partners-heading">Trusted by clients worldwide</h2>
            </div>
            <div className="partners-grid">
              {trustedPartners.map((partner, index) => (
                <div key={index} className="partner-logo">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={`${partner.name}, verified QllmSoft client`}>
                    <img src={partner.logo} alt={`${partner.name}, QllmSoft client`} loading="lazy" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section blog-preview" aria-labelledby="blog-preview-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="blog-preview-heading">Latest insights</h2>
            </div>
            <div className="blog-preview-grid">
              {blogPreviewSlugs
                .map((key) => ({ key, post: blogPostsData[key] }))
                .filter(({ post }) => Boolean(post))
                .map(({ key, post }) => (
                  <article key={key} className="blog-preview-card">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <Link to={`/blog/${key}`} className="blog-read-btn">Read article</Link>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* ── ENTITY LEVEL FAQ ── distinct questions from Services.jsx ── */}
        <section
          className="section faq-section"
          aria-labelledby="home-faq-heading"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container">
            <div className="section-title">
              <h2 id="home-faq-heading">Questions about QllmSoft as a company</h2>
            </div>
            <div className="faq-accordion">
              {homeFaqItems.map((item, i) => (
                <div key={i} className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 itemProp="name" style={{ fontSize: "1.05rem", marginBottom: "6px" }}>{item.q}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p itemProp="text">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" aria-labelledby="cta-heading">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-heading">Ready to build software that drives real business growth?</h2>
              <p>
                Tell us your challenge. QllmSoft reviews requirements, sends a fixed price proposal within 24
                hours, and schedules a free discovery call with no commitment required.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn btn-primary" aria-label="Get a free software development consultation">
                  Get free consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
