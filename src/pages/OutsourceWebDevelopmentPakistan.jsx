/**
 * OutsourceWebDevelopmentPakistan.jsx
 * ─────────────────────────────────────────────────────────────
 * /outsource-web-development-to-pakistan
 *
 * CORE SEARCH INTENT: "Should we send our web development work to a
 * Pakistan-based partner, and how would that actually work?" — this is
 * a distinct intent from /website-development-services (what we build)
 * and /hire-*-developers-pakistan (hiring a specific stack). This page
 * owns the outsourcing DECISION: cost, time zones, trust, IP, process.
 * Sibling pages are linked out to rather than duplicated.
 *
 * Schema: Organization, Service, BreadcrumbList, FAQPage, WebPage.
 * No fabricated review/rating markup — see other pages on this site for
 * why that matters.
 * ───────────────────────────────────────────────────────────── */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./OutsourceWebDevelopmentPakistan.css";
import { schemaOrganization } from "../data/schema";

const PAGE_URL = "https://qllmsoft.com/outsource-web-development-to-pakistan";
const OG_IMAGE =
  "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";
const DATE_PUBLISHED = "2026-08-16";
const DATE_MODIFIED = "2026-08-16";

/* ─── JSON-LD ─────────────────────────────────────────────── */
const orgSchema = schemaOrganization;

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": PAGE_URL + "#service",
  serviceType: "Web Development Outsourcing",
  name: "Outsource Web Development to Pakistan | QllmSoft",
  description:
    "QllmSoft is a Pakistan-based web development partner for businesses in the US, UK, and Gulf that want to outsource web development — project-based builds, dedicated developers, or a full outsourced team.",
  provider: { "@id": "https://qllmsoft.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "Pakistan" },
  ],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Outsourcing Models",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Project-Based Web Development Outsourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dedicated Web Developer, Pakistan" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outsourced Web Development Team" } },
    ],
  },
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://qllmsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Outsource Web Development to Pakistan", item: PAGE_URL },
  ],
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": PAGE_URL + "#webpage",
  url: PAGE_URL,
  name: "Outsource Web Development to Pakistan | QllmSoft",
  isPartOf: { "@id": "https://qllmsoft.com/#website" },
  about: { "@id": PAGE_URL + "#service" },
  inLanguage: "en-US",
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
};

/* ─── FAQ data ────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    q: "What does it actually mean to outsource web development to Pakistan?",
    a: "It means handing off some or all of a web project — a marketing site, a storefront, an internal platform, or ongoing feature work — to a Pakistan-based team instead of hiring locally or using a freelancer marketplace. You can outsource a single defined project, bring on a dedicated developer who works only on your product, or set up a small outsourced team for ongoing work. The engagement model is a choice, not a fixed package.",
  },
  {
    q: "Why do businesses choose Pakistan specifically, over other outsourcing destinations?",
    a: "The honest answer is a combination of factors, not one silver bullet: a large English-speaking, technically trained workforce, labor costs meaningfully below US/UK/EU rates, and a tech sector that's been serving international clients for over a decade. It isn't automatically the right fit for every project — a small, simple site with no unusual requirements may not need an outsourced team at all — but for ongoing or moderately complex web work, the cost-to-quality ratio is usually the deciding factor clients cite.",
  },
  {
    q: "How do time zones work if my team is in the US, UK, or the Gulf?",
    a: "Pakistan Standard Time overlaps well with the UK (roughly a 4-hour daytime window) and very well with the Gulf (up to 8 hours, since the zones are close). For US-based clients, the overlap is smaller during standard hours, so we typically shift part of the team's schedule later in the day to create a live overlap window for standups and reviews, with async updates covering the rest. It works, but it's worth planning explicitly rather than assuming it'll sort itself out — see the overlap chart further down this page.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do, fully, once the work is delivered and paid for. We sign an NDA before any project details are shared, and the contract specifies full IP transfer on delivery — not a licensing arrangement, not a subscription to keep using code you already paid to have built. You get a clean, documented repository with no lock-in.",
  },
  {
    q: "How much cheaper is it, realistically, compared to hiring locally?",
    a: "It varies by role, seniority, and your local market, so we won't quote a universal percentage here. What we can say directly: Pakistan-based senior engineering rates are consistently a fraction of equivalent US, UK, or Gulf salaries plus the overhead of benefits, office space, and recruitment costs — which is why outsourcing tends to make the most financial sense for ongoing or larger-scope work rather than a two-week project.",
  },
  {
    q: "How do I evaluate quality and communication before committing to a full project?",
    a: "Start smaller than you think you need to. A paid discovery sprint, a small fixed-scope task, or a trial period with a dedicated developer will tell you more about how a team communicates, estimates, and handles a changed requirement than any portfolio review will. We're happy to structure an initial engagement this way specifically so you're not committing blind.",
  },
  {
    q: "What's the difference between hiring a freelancer and outsourcing to a company like QllmSoft?",
    a: "A freelancer is one person, with all the single-point-of-failure risk that implies — illness, a second client double-booking their time, or simply moving on to something else mid-project. An outsourcing partner has a team behind the engagement, a fixed business address and legal entity to contract with, and continuity if a specific developer needs to be swapped out. For a short, well-defined task, a freelancer can be the more efficient choice. For anything you'll depend on for more than a few weeks, a company structure carries less risk.",
  },
];

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `owp-faq-${index}`;
  return (
    <div
      className={`owp-faq-item ${open ? "owp-faq-item--open" : ""}`}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className="owp-faq-question"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        itemProp="name"
      >
        <span>{faq.q}</span>
        <span className="owp-faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={id} className="owp-faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <p itemProp="text">{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ─── Time-zone overlap data (signature visual) ──────────────
   24 columns = UTC hour 0..23. Each region's business-hours block
   is expressed as its UTC start/end so the bars line up on one axis. */
const TZ_REGIONS = [
  { key: "pk", label: "Pakistan (PKT, UTC+5)", start: 4, end: 13, color: "var(--owp-gold)" },
  { key: "uk", label: "United Kingdom (UTC+0/+1)", start: 9, end: 17, color: "var(--owp-teal)" },
  { key: "gulf", label: "UAE / Saudi Arabia (UTC+4)", start: 5, end: 14, color: "var(--owp-coral)" },
  { key: "us", label: "US Eastern (UTC-5/-4)", start: 14, end: 22, color: "var(--owp-blue)" },
];

const TimezoneOverlap = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="owp-tz" role="img" aria-label="Chart showing Pakistan Standard Time business hours overlapping with UK, Gulf, and US Eastern business hours across a 24-hour UTC timeline">
      <div className="owp-tz__axis" aria-hidden="true">
        {hours.filter((h) => h % 3 === 0).map((h) => (
          <span key={h} className="owp-tz__axis-label" style={{ left: `${(h / 24) * 100}%` }}>
            {String(h).padStart(2, "0")}:00
          </span>
        ))}
      </div>
      <div className="owp-tz__rows">
        {TZ_REGIONS.map((r) => (
          <div key={r.key} className="owp-tz__row">
            <span className="owp-tz__row-label">{r.label}</span>
            <div className="owp-tz__track">
              <div
                className="owp-tz__bar"
                style={{
                  left: `${(r.start / 24) * 100}%`,
                  width: `${((r.end - r.start) / 24) * 100}%`,
                  background: r.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="owp-tz__note">
        UTC hours shown along the top. Pakistan's working day overlaps the Gulf almost entirely,
        gives the UK a solid four-hour live window, and — with a shifted evening shift — still
        opens a real-time window with US Eastern for standups and reviews.
      </p>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
═══════════════════════════════════════════════════════════ */
const OutsourceWebDevelopmentPakistan = () => {
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: handleRef, inView: handleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: modelsRef, inView: modelsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: trustRef, inView: trustInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: stackRef, inView: stackInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Outsource Web Development to Pakistan | QllmSoft</title>
        <meta
          name="description"
          content="Outsource web development to Pakistan through QllmSoft — project-based builds, a dedicated developer, or a full outsourced team, with clear IP ownership and NDA on day one."
        />
        <meta
          name="keywords"
          content="outsource web development to Pakistan, outsource web development, web development outsourcing company Pakistan, dedicated web developer Pakistan, offshore web development Pakistan"
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Outsource Web Development to Pakistan | QllmSoft" />
        <meta property="og:description" content="A Pakistan-based web development partner for businesses in the US, UK, and Gulf — project-based, dedicated developer, or full outsourced team." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Outsource Web Development to Pakistan — QllmSoft" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outsource Web Development to Pakistan | QllmSoft" />
        <meta name="twitter:description" content="Project-based builds, a dedicated developer, or a full outsourced web development team, based in Pakistan." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="owp-page" role="main">
        {/* ══════════════ HERO ══════════════ */}
        <header className="owp-hero">
          <div className="owp-hero__bg" aria-hidden="true" />
          <div className="owp-container owp-hero__inner">
            <p className="owp-eyebrow">Web Development Outsourcing — Pakistan</p>
            <h1 className="owp-hero__title">
              Outsource Web Development to Pakistan
            </h1>
            <p className="owp-hero__direct-answer">
              QllmSoft is a Pakistan-based web development team working with
              businesses in the US, UK, and Gulf. You can outsource a single
              project, bring on a dedicated developer, or set up a small
              outsourced team, with an NDA signed before any project details
              change hands and full IP ownership transferred on delivery.
            </p>
            <div className="owp-hero__actions">
              <Link to="/contact" className="owp-btn owp-btn--primary" aria-label="Talk to QllmSoft about outsourcing your web development">
                Talk to Us About Your Project
              </Link>
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20outsourcing%20our%20web%20development!"
                target="_blank" rel="noopener noreferrer"
                className="owp-btn owp-btn--ghost"
                aria-label="WhatsApp QllmSoft about outsourcing web development"
              >
                WhatsApp Us
              </a>
            </div>
            <dl className="owp-hero__stats" aria-label="QllmSoft track record">
              <div><dt>10+</dt><dd>Years serving clients abroad</dd></div>
              <div><dt>50+</dt><dd>Web projects delivered</dd></div>
              <div><dt>100%</dt><dd>Upwork Job Success Score</dd></div>
            </dl>
          </div>
        </header>

        {/* ══════════════ WHY PAKISTAN + SIGNATURE TZ CHART ══════════════ */}
        <section className="owp-section" ref={whyRef} aria-labelledby="why-heading">
          <div className="owp-container">
            <p className="owp-section-label">Why Pakistan</p>
            <h2 id="why-heading" className="owp-section-title">
              The case for outsourcing here, and where it doesn't apply
            </h2>
            <div className={`owp-why__layout animate-owp ${whyInView ? "is-in" : ""}`}>
              <div className="owp-why__text">
                <p>
                  Pakistan's tech sector has spent over a decade building a
                  reputation with international clients, largely on three
                  factors: a large English-speaking, technically trained
                  workforce; labor costs well below US, UK, or EU rates for
                  equivalent seniority; and a growing base of companies (not
                  just individual freelancers) with the structure to take on
                  ongoing work reliably.
                </p>
                <p>
                  That doesn't mean outsourcing is the right call for every
                  project. A small brochure site with no unusual requirements
                  might be just as well served by a local freelancer or a
                  page builder. Outsourcing tends to pay off once you're
                  looking at ongoing work, a build with real complexity, or a
                  need for a team you can scale up or down — which is worth
                  saying plainly rather than pretending every project needs
                  an outsourced partner.
                </p>
                <p>
                  One objection we hear before time zones even come up:
                  "will we actually be able to talk to them." The chart to
                  the right is the honest answer — where the overlap is
                  strong, where it's workable with a shifted schedule, and
                  where you'd be relying mostly on async updates.
                </p>
              </div>
              <div className="owp-why__visual">
                <TimezoneOverlap />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ WHAT WE HANDLE ══════════════ */}
        <section className="owp-section owp-section--tint" ref={handleRef} aria-labelledby="handle-heading">
          <div className="owp-container">
            <p className="owp-section-label">What You Can Outsource</p>
            <h2 id="handle-heading" className="owp-section-title">
              From one feature to the whole build
            </h2>
            <div className="owp-grid owp-grid--3">
              {[
                { title: "Full Website Builds", desc: "Marketing sites, eCommerce storefronts, or content-driven platforms built end to end. See our full", link: "/website-development-services", linkText: "web development services" },
                { title: "Ongoing Feature Development", desc: "A steady stream of feature work and improvements for a product you already have, without hiring in-house for it." },
                { title: "Front-End or Back-End Only", desc: "Bring your own team for one half of the stack and let us own the other — React front ends or ASP.NET/Node back ends." },
                { title: "Legacy Site Maintenance", desc: "Bug fixes, security patches, and small updates on a site your original developer is no longer available to support." },
                { title: "Performance & SEO Fixes", desc: "Targeted work on Core Web Vitals, technical SEO, or a slow site that needs an outside set of eyes." },
                { title: "Full Outsourced Team", desc: "A small dedicated squad — developers, QA, a project lead — functioning as your web team, sized to your workload." },
              ].map((item, i) => (
                <article key={i} className={`owp-card animate-owp ${handleInView ? "is-in" : ""}`} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="owp-card__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="owp-card__title">{item.title}</h3>
                  <p className="owp-card__desc">
                    {item.desc}{" "}
                    {item.link && <Link to={item.link}>{item.linkText}</Link>}
                    {item.link && "."}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ ENGAGEMENT MODELS ══════════════ */}
        <section className="owp-section" ref={modelsRef} aria-labelledby="models-heading">
          <div className="owp-container">
            <p className="owp-section-label">How to Structure It</p>
            <h2 id="models-heading" className="owp-section-title">
              Three ways to work with us
            </h2>
            <div className="owp-models">
              {[
                {
                  name: "Project-Based",
                  fit: "Best for a defined scope",
                  desc: "You bring a scoped project — a new site, a redesign, a specific integration — and we quote a fixed price and timeline against it. Good for one-off work with a clear end point.",
                },
                {
                  name: "Dedicated Developer",
                  fit: "Best for ongoing product work",
                  featured: true,
                  desc: "One developer (or a small pod) works exclusively on your project, integrated into your tools and standups, billed monthly. Good when the work doesn't have a natural end date.",
                },
                {
                  name: "Outsourced Team",
                  fit: "Best for scaling fast",
                  desc: "A small structured team — developers, QA, a lead who manages delivery — sized to your roadmap and adjusted as it changes. Good when one developer isn't enough anymore.",
                },
              ].map((m, i) => (
                <article key={i} className={`owp-model ${m.featured ? "owp-model--featured" : ""} animate-owp ${modelsInView ? "is-in" : ""}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  {m.featured && <span className="owp-model__badge">Most common</span>}
                  <h3 className="owp-model__name">{m.name}</h3>
                  <p className="owp-model__fit">{m.fit}</p>
                  <p className="owp-model__desc">{m.desc}</p>
                  <Link to="/contact" className="owp-model__cta" aria-label={`Ask about the ${m.name} outsourcing model`}>
                    Ask about this model →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ PROCESS ══════════════ */}
        <section className="owp-section owp-section--dark" ref={processRef} aria-labelledby="process-heading">
          <div className="owp-container">
            <p className="owp-section-label owp-section-label--light">Getting Started</p>
            <h2 id="process-heading" className="owp-section-title owp-section-title--light">
              How an engagement actually starts
            </h2>
            <ol className="owp-process" aria-label="Steps to start outsourcing web development to QllmSoft">
              {[
                { n: "01", title: "Discovery call", desc: "A free call to understand your project and whether outsourcing — and specifically us — is actually a good fit. We'll say so if it isn't." },
                { n: "02", title: "NDA & scoping", desc: "An NDA is signed before any project specifics are discussed in detail. We scope the work and propose the engagement model that fits." },
                { n: "03", title: "Trial or kickoff", desc: "For larger engagements, we suggest a small paid trial task first, so you can evaluate communication and quality before committing further." },
                { n: "04", title: "Delivery in sprints", desc: "Two-week cycles with something demoable at the end of each, plus a live overlap window scheduled around your time zone." },
                { n: "05", title: "Handover & support", desc: "Full source code and documentation on delivery, with a defined post-launch support window before any ongoing maintenance conversation." },
              ].map((step, i) => (
                <li key={i} className={`owp-process__step animate-owp ${processInView ? "is-in" : ""}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className="owp-process__num" aria-hidden="true">{step.n}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ══════════════ COMPARISON ══════════════ */}
        <section className="owp-section" aria-labelledby="compare-heading">
          <div className="owp-container">
            <p className="owp-section-label">The Trade-Offs</p>
            <h2 id="compare-heading" className="owp-section-title">
              Outsourcing vs. hiring locally vs. a freelancer
            </h2>
            <div className="owp-table-wrap">
              <table className="owp-table" aria-label="Comparison of local hiring, freelancer marketplaces, and outsourcing to a Pakistan-based company">
                <caption className="owp-table__caption">What actually changes between the three options</caption>
                <thead>
                  <tr>
                    <th scope="col">Factor</th>
                    <th scope="col">Hiring Locally</th>
                    <th scope="col">Freelancer Marketplace</th>
                    <th scope="col" className="owp-table__highlight">Outsourcing to QllmSoft</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Cost", a: "Highest — salary plus benefits, office, recruitment", b: "Lower, but quality and reliability vary widely", c: "Meaningfully lower than local hiring, at consistent quality" },
                    { f: "Time to start", a: "Weeks to months of recruiting", b: "Days, but vetting is on you", c: "Typically a few business days after scoping" },
                    { f: "Continuity risk", a: "Low — employee, but hard to scale down", b: "High — one person, one point of failure", c: "Low — a team behind the engagement, not one person" },
                    { f: "Accountability", a: "Direct, but slow to adjust", b: "Contract-based, limited recourse", c: "Contract-based, with a company entity behind it" },
                    { f: "Best for", a: "Long-term core team roles", b: "Small, well-defined, short tasks", c: "Ongoing work or projects with real complexity" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="owp-table__factor">{row.f}</td>
                      <td>{row.a}</td>
                      <td>{row.b}</td>
                      <td className="owp-table__highlight">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════ TRUST & IP ══════════════ */}
        <section className="owp-section owp-section--tint" ref={trustRef} aria-labelledby="trust-heading">
          <div className="owp-container">
            <p className="owp-section-label">Trust, Ownership & Security</p>
            <h2 id="trust-heading" className="owp-section-title">
              What protects you in this arrangement
            </h2>
            <div className="owp-grid owp-grid--4">
              {[
                { title: "NDA on Day One", desc: "Signed before any project detail is shared, not after work begins." },
                { title: "Full IP Transfer", desc: "Source code and assets are yours outright on delivery, no licensing arrangement." },
                { title: "Documented Handover", desc: "Clean, commented repositories on GitHub or GitLab, not a black box you depend on us to explain." },
                { title: "Direct Communication", desc: "You talk to the people doing the work, not a layer of account managers relaying messages." },
              ].map((item, i) => (
                <article key={i} className={`owp-card owp-card--compact animate-owp ${trustInView ? "is-in" : ""}`} style={{ transitionDelay: `${i * 0.07}s` }}>
                  <h3 className="owp-card__title">{item.title}</h3>
                  <p className="owp-card__desc">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ TECH STACK ══════════════ */}
        <section className="owp-section" ref={stackRef} aria-labelledby="stack-heading">
          <div className="owp-container">
            <p className="owp-section-label">Technology</p>
            <h2 id="stack-heading" className="owp-section-title">
              What we build with
            </h2>
            <p className="owp-stack__intro">
              A deliberately narrow set of tools we know deeply, so maintenance stays predictable for whoever inherits the code next — you, your in-house team, or another vendor down the line.
            </p>
            <ul className={`owp-stack__pills animate-owp ${stackInView ? "is-in" : ""}`} aria-label="Technologies used">
              {["React", "Next.js", "ASP.NET Core", "Node.js", "SQL Server", "PostgreSQL", "Azure", "AWS", "Docker"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════ FAQ ══════════════ */}
        <section className="owp-section owp-section--tint" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage">
          <div className="owp-container">
            <p className="owp-section-label">Questions Before You Commit</p>
            <h2 id="faq-heading" className="owp-section-title">
              Outsourcing to Pakistan — FAQ
            </h2>
            <div className="owp-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ RELATED / FINAL CTA ══════════════ */}
        <section className="owp-cta" aria-labelledby="cta-heading">
          <div className="owp-container owp-cta__inner">
            <h2 id="cta-heading">Considering outsourcing your web development?</h2>
            <p>
              Tell us what you're building. If outsourcing isn't the right
              call for your project, we'll tell you that on the first call
              instead of taking it on anyway.
            </p>
            <div className="owp-hero__actions">
              <Link to="/contact" className="owp-btn owp-btn--primary" aria-label="Get a free outsourcing consultation from QllmSoft">
                Get a Free Consultation
              </Link>
              <a
                href="https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20outsourcing%20our%20web%20development!"
                target="_blank" rel="noopener noreferrer"
                className="owp-btn owp-btn--ghost owp-btn--ghost-dark"
                aria-label="WhatsApp QllmSoft about outsourcing web development"
              >
                WhatsApp Us
              </a>
            </div>
            <nav className="owp-cta__related" aria-label="Related services">
              <span>Related:</span>
              <Link to="/website-development-services">Web Development Services</Link>
              <Link to="/custom-software-development-services">Software Development Services</Link>
              <Link to="/hire-react-developers-pakistan">Hire React Developers</Link>
              <Link to="/hire-dotnet-developers-pakistan">Hire .NET Developers</Link>
              <Link to="/remote-dedicated-development-teams">Dedicated Development Teams</Link>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
};

export default OutsourceWebDevelopmentPakistan;
