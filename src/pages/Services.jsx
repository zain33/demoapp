/**
 * Services.jsx, QllmSoft
 * ─────────────────────────────────────────────────────────────
 * ROLE IN THE FUNNEL: MOFU pillar page. Owns the broad category
 * term and the general FAQ. Individual cluster pages own the
 * narrow exact match terms and are linked out to, never repeated
 * word for word here.
 *
 * TOPICAL SCOPE ON THIS PAGE VS OTHER PAGES:
 * Home gives one paragraph per service. This page gives two
 * paragraphs per service plus who it is for and who it is not
 * for, which is the detail that actually differentiates this
 * page from Home instead of just repeating it at greater length.
 *
 * FAQ here is scoped to service and pricing questions. It does
 * not repeat Home's entity level FAQ or Projects' portfolio FAQ.
 */

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { servicesData } from "../data/mock";
import "./Services.css";
import "animate.css";
import ServiceCard from "../components/ServiceCard";
import {
  schemaOrganization,
  schemaFounder,
  schemaWebsite,
  buildServiceSchema,
  buildFAQSchema,
  buildBreadcrumb,
  FACTS,
} from "../data/schema";

const schemaBreadcrumb = buildBreadcrumb([
  { name: "Home", url: "https://qllmsoft.com/" },
  { name: "Services", url: "https://qllmsoft.com/services" },
]);

const serviceCatalog = [
  { name: "Custom Software Development", url: "https://qllmsoft.com/custom-software-development-services" },
  { name: "Enterprise Web Application Development", url: "https://qllmsoft.com/web-application-development-services" },
  { name: "Business and eCommerce Website Development", url: "https://qllmsoft.com/website-development-services" },
  { name: "Mobile App Development", url: "https://qllmsoft.com/mobile-app-development" },
  { name: "API and Backend Development", url: "https://qllmsoft.com/api-development-services" },
  { name: "AI Powered Software Solutions", url: "https://qllmsoft.com/ai-powered-software-solutions" },
  { name: "Legacy System Modernization", url: "https://qllmsoft.com/legacy-system-modernization-services" },
  { name: "Software Outsourcing", url: "https://qllmsoft.com/outsource-software-development-to-pakistan" },
  { name: "Hire Dedicated Developers", url: "https://qllmsoft.com/hire-dotnet-developers-pakistan" },
];

const schemaService = buildServiceSchema({
  id: "https://qllmsoft.com/services#service",
  name: "Custom Software Development Services",
  description:
    "End to end custom software development covering enterprise web applications, mobile apps, business automation, AI powered tools, and legacy modernization for businesses worldwide.",
  url: "https://qllmsoft.com/services",
  offers: serviceCatalog,
});

const faqItems = [
  {
    q: "What exactly does QllmSoft mean by software development services?",
    a: `The phrase covers the full lifecycle of building software specific to a business: requirements gathering, system architecture, the actual development work, quality assurance, deployment, and a defined post launch support window. QllmSoft has run this cycle ${FACTS.projectsDelivered} times since ${FACTS.foundingYear}, for clients from early stage startups through enterprise organizations across the USA, UK, UAE, and Europe.`,
  },
  {
    q: "How much does custom software development cost?",
    a: "It depends entirely on scope, which is why a fixed number does not appear on this page. A single internal tool replacing a spreadsheet is a different project from a multi module platform. Every engagement starts with a free discovery call, followed by a written scope and a fixed price quote within 24 hours, before any code is written.",
  },
  {
    q: "Does QllmSoft build mobile apps for both Android and iOS?",
    a: "Yes, most commonly with Flutter for a single shared codebase across both platforms, which reduces cost and keeps the two versions in sync. Native Swift or Kotlin development is used instead when a project needs direct access to device hardware that Flutter cannot expose cleanly.",
  },
  {
    q: "Can QllmSoft work with international clients on outsourced projects?",
    a: `Yes. Engineers work across client time zones with English communication, fixed price scopes, an NDA signed before any technical discussion, and full intellectual property transfer at delivery. This track record is verifiable through a ${FACTS.upworkScore} Upwork Job Success Score and ${FACTS.reviewCount} five star Freelancer reviews, both maintained by third party platforms outside QllmSoft's control.`,
  },
  {
    q: "Who owns the source code once the project is complete?",
    a: "The client does, entirely. On completion, full ownership of source code, databases, and design assets transfers legally under a signed IP assignment agreement. QllmSoft retains no licensing rights or code dependency on its own infrastructure.",
  },
  {
    q: "What development process does QllmSoft follow?",
    a: "Agile Scrum, in two week sprints, with a working demo on a staging environment at the end of each sprint. Clients retain full backlog visibility and can reprioritize features against business timelines throughout the build rather than only at the start and end.",
  },
  {
    q: "How is a custom software project different from buying an off the shelf tool?",
    a: "If a product like Salesforce, a standard ERP suite, or a monthly SaaS tool already covers most of what a business needs without forcing an awkward workaround, buying it is almost always the better decision. Custom development becomes worthwhile once a business is paying for unused features, working around a rigid workflow, or waiting on a vendor support ticket for a fix that will never ship because the use case is not common enough to matter to that vendor.",
  },
  {
    q: "Does QllmSoft provide ongoing maintenance after launch, or only the initial build?",
    a: "Both. A 30 day post launch window covering bug fixes and monitoring is included in every project at no additional cost. After that window, clients can move to a flexible monthly maintenance contract covering updates, security patches, and feature additions, though it is not required.",
  },
  {
    q: "Which technology stack does QllmSoft use across these services?",
    a: "ASP.NET Core and C# for backend systems, React for frontend interfaces, SQL Server for relational data, Flutter for cross platform mobile apps, and Microsoft Azure or AWS for cloud hosting. The stack is intentionally narrow. QllmSoft would rather go deep on a small set of tools it knows thoroughly than spread thin across every framework that becomes popular in a given year.",
  },
];

const schemaFAQ = buildFAQSchema(faqItems);

const processSteps = [
  { n: "01", title: "Discovery and requirements", desc: "Workshops mapping workflows and constraints, ending in a formal scope document and a fixed price quote." },
  { n: "02", title: "Solution architecture", desc: "System design, technology selection, and security modeling, reviewed and agreed before any code is written." },
  { n: "03", title: "Agile development", desc: "Two week sprints with a working demo on staging at the end of each one, and full client visibility into the backlog." },
  { n: "04", title: "QA and security testing", desc: "Functional testing, load testing, and OWASP Top 10 penetration testing completed before anything reaches production." },
  { n: "05", title: "Deployment", desc: "A zero downtime CI/CD launch, monitoring setup, and full technical documentation handed over to the client." },
  { n: "06", title: "30 day post launch support", desc: "Bug resolution and monitoring included at no cost, with optional long term SLA support available after that window." },
];

const industries = [
  { name: "Healthcare", desc: "Clinic booking systems, patient portals, and hospital management platforms designed around role based access to sensitive records.", link: "/healthcare-software-development-pakistan" },
  { name: "Finance and fintech", desc: "Budgeting platforms, real time reporting dashboards, and payment gateway integrations built with audit trails on every transaction.", link: "/finance-management-system" },
  { name: "Education", desc: "School management systems, learning management platforms, and online examination tools for institutions running multiple campuses.", link: "/education-software-development-pakistan" },
  { name: "eCommerce and retail", desc: "Custom storefronts, inventory management, and order tracking for retailers who have outgrown a template store platform.", link: "/ecommerce-development-services" },
  { name: "Real estate", desc: "Property listing portals, tenant management platforms, and lease tracking systems for agencies and property managers.", link: "/real-estate-software-development" },
  { name: "Logistics and HR operations", desc: "Fleet tracking, warehouse tools, and payroll or attendance systems replacing manual, error prone processes.", link: null },
];

const engagementModels = [
  { model: "Fixed price project", best: "A defined project with a clear start and end date", detail: "Scope is written and priced before work begins. The price does not change unless the scope does." },
  { model: "Dedicated development team", best: "Ongoing product development needing consistent capacity", detail: "One or more engineers work exclusively on a single client's product, integrated into that client's own sprint cycle and tools." },
  { model: "Staff augmentation", best: "An existing internal team that needs temporary extra capacity", detail: "Engineers plug into an already running internal team for a defined period, without the overhead of a full hiring process." },
];

const Services = () => {
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Custom Software Development Services | QllmSoft</title>
        <meta
          name="description"
          content="QllmSoft delivers custom software development, web apps, mobile apps, and AI solutions to businesses worldwide. Fixed price. Free quote in 24 hours."
        />
        <meta
          name="keywords"
          content="custom software development services, enterprise software development, mobile app development services, software outsourcing services, hire software developers"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://qllmsoft.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qllmsoft.com/services" />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Custom Software Development Services | QllmSoft" />
        <meta property="og:description" content="Enterprise web platforms, mobile apps, and AI tools for global clients. Fixed pricing, verified track record." />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Services | QllmSoft" />
        <meta name="twitter:description" content="Enterprise software, mobile apps, and AI solutions from a globally trusted technology partner." />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFounder)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main className="services-page" id="main-content" role="main">
        {/* ── HERO ── */}
        <section className="services-hero" aria-labelledby="svc-hero-h1">
          <div className="container">
            <h1 id="svc-hero-h1">Custom software development services for businesses worldwide</h1>
            <p>
              QllmSoft engineers production ready{" "}
              <Link to="/web-application-development-services">enterprise web applications</Link>,{" "}
              <Link to="/mobile-app-development">mobile apps</Link>,{" "}
              <Link to="/api-development-services">business automation systems</Link>, and{" "}
              <Link to="/ai-powered-software-solutions">AI powered software</Link>. Every engagement starts with
              a fixed price and a documented scope before a single line of code is written. Verified:{" "}
              {FACTS.upworkScore} Upwork Job Success Score, {FACTS.reviewCount} five star reviews since{" "}
              {FACTS.foundingYear}.
            </p>
          </div>
        </section>

        {/* ── TRUST BAND ── */}
        <section aria-label="QllmSoft verified metrics" style={{ background: "#021a4a", padding: "28px 0" }}>
          <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { num: FACTS.yearsExperience, lbl: "Years experience" },
              { num: FACTS.projectsDelivered, lbl: "Projects delivered" },
              { num: FACTS.upworkScore, lbl: "Upwork job success" },
              { num: `${FACTS.freelancerRating}★`, lbl: `${FACTS.reviewCount} verified reviews` },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, minWidth: 140, textAlign: "center", padding: "12px 16px" }}>
                <span style={{ display: "block", fontSize: "2rem", fontWeight: 900, color: "#fec304" }}>{s.num}</span>
                <span style={{ fontSize: ".75rem", color: "rgba(255,255,255,.65)", textTransform: "uppercase", letterSpacing: "1.2px" }}>
                  {s.lbl}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── MACRO CONTEXT DEFINITION ── this is what makes the pillar unique versus Home ── */}
        <section className="section" aria-labelledby="what-is-heading">
          <div className="container" style={{ maxWidth: "820px" }}>
            <h2 id="what-is-heading">What counts as a software development service here</h2>
            <p>
              A software development service, in the way QllmSoft scopes and prices these projects, is any
              engagement that ends in a working piece of software the client owns outright. That includes a
              public website, a login protected web application, a mobile app, a backend API that connects two
              other systems, or an internal tool that never faces a customer at all. It does not include ongoing
              retainer style marketing work or content writing, which QllmSoft does not offer.
            </p>
            <p>
              The five sections below cover the categories that make up nearly every project QllmSoft has run
              since {FACTS.foundingYear}. Each one links to a dedicated page with full technical detail. What
              follows here is enough to decide which category a project actually falls into before reading
              further.
            </p>
          </div>
        </section>

        {/* ── FULL SERVICE CATALOG ── */}
        <section className="section services-list" aria-labelledby="svc-list-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="svc-list-h2">The service catalog</h2>
            </div>
            <div className="services-detailed-grid">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  variant="detailed"
                  isOdd={index % 2 === 0}
                  id={service.slug || service.name.toLowerCase().replace(/\s+/g, "-")}
                />
              ))}
            </div>

            <div className="csd-about" style={{ marginTop: "40px" }}>
              <h3><Link to="/custom-software-development-services">Custom software development</Link></h3>
              <p>
                This is the right category when the deliverable is an internal system rather than something
                customers ever see: dashboards, approval workflows, inventory trackers, or ERP modules that
                connect into tools a company already runs. It is the wrong category for a public marketing site,
                which falls under website development instead.
              </p>
              <p>
                Projects in this category are scoped individually because there is no standard shape to an
                internal tool. A payroll system and a warehouse inventory tracker share almost nothing in common
                architecturally, even though both count as custom software.
              </p>

              <h3><Link to="/website-development-services">Website development</Link></h3>
              <p>
                This covers business and eCommerce websites meant to be found in search and to convert visitors
                into leads or customers. These builds are custom coded rather than assembled from a page builder,
                specifically because unused plugin weight and template bloat are two of the most common causes of
                poor Core Web Vitals scores and slow organic growth.
              </p>
              <p>
                This is not the right category for a system with user logins, role based permissions, or complex
                business logic behind the scenes. That work belongs under web application development instead,
                even though both categories technically produce a website.
              </p>

              <h3><Link to="/web-application-development-services">Web application development</Link></h3>
              <p>
                This covers enterprise portals, SaaS platforms, and any system where the primary interface sits
                behind a login. QllmSoft builds these specifically on ASP.NET Core, chosen for its performance
                under concurrent load and its native integration with Azure hosting, documented directly in{" "}
                <a href="https://learn.microsoft.com/en-us/aspnet/core/" target="_blank" rel="noopener noreferrer nofollow">
                  Microsoft's official ASP.NET Core documentation
                </a>
                .
              </p>
              <p>
                A project belongs here rather than under custom software development when the deliverable is
                specifically a web based application accessed through a browser, as opposed to a desktop tool or
                an offline system.
              </p>

              <h3><Link to="/api-development-services">API and backend development</Link></h3>
              <p>
                This is the connective layer rather than a standalone product: a REST, GraphQL, or SOAP endpoint
                that lets a frontend, a database, and third party services like a payment gateway or CRM
                communicate. Businesses commission this category on its own when an existing frontend already
                exists and only needs a new or modernized backend.
              </p>
              <p>
                Most web application projects include API work by default, since a modern web app needs a backend
                to function. This becomes its own separate engagement specifically when the API is the entire
                deliverable, with no accompanying frontend build.
              </p>

              <h3><Link to="/mobile-app-development">Mobile app development</Link></h3>
              <p>
                Android and iOS apps, built primarily in Flutter for a single shared codebase across both
                platforms, which lowers cost and keeps feature parity automatic between the two versions. Native
                Swift or Kotlin is used instead specifically when a project requires direct hardware access, such
                as background Bluetooth scanning, that Flutter's plugin ecosystem cannot expose reliably.
              </p>
              <p>
                Every mobile build includes API work behind it as well, since a mobile app with no backend can
                only function offline.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/legacy-system-modernization-services" className="story-link">
                Need to migrate or modernize an existing system instead of building new? See legacy system modernization
              </Link>
              {" · "}
              <Link to="/ai-powered-software-solutions" className="story-link">
                Looking to add AI to an existing product? See AI powered software solutions
              </Link>
            </div>
          </div>
        </section>

        {/* ── ENGAGEMENT MODELS ── new content that adds genuine topical breadth ── */}
        <section className="section" style={{ background: "#F7FAFC" }} aria-labelledby="engagement-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="engagement-heading">Three ways to engage QllmSoft</h2>
              <p>Which model fits depends on whether a project has a defined end date or is ongoing.</p>
            </div>
            <div className="why-grid">
              {engagementModels.map((m) => (
                <article key={m.model} className="why-card">
                  <h3>{m.model}</h3>
                  <p><strong>Best for:</strong> {m.best}</p>
                  <p>{m.detail}</p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Link to="/hire-dotnet-developers-pakistan" className="story-link">
                Read more about dedicated team and staff augmentation hiring
              </Link>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="section" aria-labelledby="industries-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="industries-heading">Industries QllmSoft has built for repeatedly</h2>
            </div>
            <div className="why-grid">
              {industries.map((ind) => (
                <article key={ind.name} className="why-card">
                  <h3>{ind.link ? <Link to={ind.link}>{ind.name}</Link> : ind.name}</h3>
                  <p>{ind.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section process-section" aria-labelledby="process-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="process-h2">How a project actually moves from first call to launch</h2>
            </div>
            <div className="process-grid" role="list">
              {processSteps.map((p) => (
                <div key={p.n} className="process-step" role="listitem">
                  <div className="process-number" aria-hidden="true">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUTSOURCING TRUST ── */}
        <section className="section" style={{ background: "#F7FAFC" }} aria-labelledby="outsource-h2">
          <div className="container">
            <div className="section-title">
              <h2 id="outsource-h2">Working with QllmSoft as an international client</h2>
            </div>
            <div className="why-grid">
              <article className="why-card"><h3>NDA before discovery</h3><p>Signed before any technical discussion begins, protecting both the idea being discussed and the data shared during scoping.</p></article>
              <article className="why-card"><h3>Full IP transfer on completion</h3><p>Source code, database schemas, and design assets transfer legally to the client. QllmSoft retains no licensing rights afterward.</p></article>
              <article className="why-card"><h3>Time zone overlap</h3><p>Engineers maintain working hours that overlap North American, European, and Gulf business days rather than a fully asynchronous handoff.</p></article>
              <article className="why-card"><h3>Fixed price only for scoped work</h3><p>No open ended hourly billing for project based engagements. The number in the proposal is the number invoiced.</p></article>
            </div>
            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <Link to="/outsource-software-development-to-pakistan" className="btn btn-primary">
                Read the full outsourcing guide
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ── the only page carrying this specific question set ── */}
        <section className="section faq-seo-section" style={{ background: "#F7FAFC" }} aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently asked questions</h2>
            </div>
            <div className="faq-seo-list" style={{ maxWidth: 880, margin: "0 auto" }}>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  style={{ border: "1px solid #EDF2F7", borderRadius: 10, marginBottom: 14, overflow: "hidden", background: "#fff" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    itemProp="name"
                    style={{
                      width: "100%", textAlign: "left", padding: "20px 24px",
                      background: openFaq === i ? "#1E5AA8" : "#fff", border: "none", cursor: "pointer",
                      display: "flex", justifyContent: "space-between", fontWeight: 700,
                      color: openFaq === i ? "#fff" : "#1A365D",
                    }}
                  >
                    {item.q}
                    <span>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p itemProp="text" style={{ padding: "0 24px 20px", margin: 0, color: "#4A5568", lineHeight: 1.75 }}>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" aria-labelledby="cta-h2">
          <div className="container">
            <div className="cta-content">
              <h2 id="cta-h2">Ready to scope your project?</h2>
              <p>Get a detailed fixed price proposal within 24 hours, with no commitment required.</p>
              <Link to="/contact" className="btn btn-primary">Get a free consultation</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;
