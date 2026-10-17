import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import "./DigitalMarketingServices.css";
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";
import { schemaOrganization } from "../data/schema";
import digitalMarketingInfo from "../assets/qllmsoft_digital_marketing_info.png";

const PAGE_URL = "https://qllmsoft.com/digital-marketing-services";
const LOGO = "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg";
const DATE_MODIFIED = "2026-10-15";
const WA = "https://wa.me/923348229288?text=Hi%20QllmSoft%2C%20I%27d%20like%20to%20discuss%20Digital%20Marketing%20Services!";

/* ── Icons (stroke, inherit color) ───────────────────── */
const Ico = ({ d, s = 22 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d.map((p, i) => <path key={i} d={p} />)}
  </svg>
);
const ICONS = {
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M21 21l-4.3-4.3"],
  share: ["M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"],
  target: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  pen: ["M12 20h9", "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"],
  mail: ["M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", "M22 6l-10 7L2 6"],
  chart: ["M3 3v18h18", "M7 14l4-4 3 3 5-6"],
  globe: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M2 12h20", "M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  brain: ["M8.5 6.5A3.5 3.5 0 0 1 12 3a3.5 3.5 0 0 1 3.5 3.5", "M8 21a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3", "M16 21a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3", "M12 7v14"],
  layers: ["M12 2l10 5-10 5L2 7z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"],
  check: ["M20 6L9 17l-5-5"],
};
const I = ({ n, s }) => <Ico d={ICONS[n]} s={s} />;

/* ── Content ─────────────────────────────────────────── */
const CHANNELS = [
  { id: "seo", icon: "search", label: "SEO", title: "Search Engine Optimization", text: "We fix what holds your site back in Google, then build the content and links that move rankings for searches your buyers actually make.", items: ["Technical audit & Core Web Vitals fixes", "Keyword and intent mapping", "On-page, schema & internal linking", "Local SEO and Google Business Profile", "Ethical link building & digital PR"] },
  { id: "social", icon: "share", label: "Social Media", title: "Social Media Marketing", text: "Consistent, on-brand content and community management across the platforms where your customers spend time.", items: ["Platform strategy (Facebook, Instagram, LinkedIn, TikTok, X)", "Content calendar, design & short video", "Community management & replies", "Influencer and creator outreach", "Monthly performance review"] },
  { id: "ppc", icon: "target", label: "Paid Ads", title: "PPC & Paid Advertising", text: "Google, Meta and LinkedIn campaigns built around cost per lead or sale, with budgets you can see and control.", items: ["Google Search, Shopping & Performance Max", "Meta & LinkedIn lead campaigns", "Retargeting and audience building", "Landing page and A/B testing", "Conversion tracking set up properly"] },
  { id: "content", icon: "pen", label: "Content", title: "Content Marketing", text: "Articles, guides and landing pages written to answer real questions, rank in search and move readers toward a decision.", items: ["Topic research and editorial plan", "Blog, pillar pages & case studies", "Website and sales copy", "Video scripts and explainers", "Content refresh for older pages"] },
  { id: "email", icon: "mail", label: "Email & CRM", title: "Email & Marketing Automation", text: "Welcome series, nurture flows and win-back emails that run on their own once your data is connected.", items: ["List segmentation and cleanup", "Automated lifecycle flows", "Newsletter design and copy", "WhatsApp and SMS follow-ups", "CRM integration"] },
  { id: "analytics", icon: "chart", label: "Analytics", title: "Analytics & Conversion Optimization", text: "Clear dashboards that show what brings in leads and revenue, and what to stop spending on.", items: ["GA4 and Tag Manager setup", "Looker Studio dashboards", "Funnel and drop-off analysis", "Heatmaps and user recordings", "Monthly insight reports"] },
];

const GRID = [
  { icon: "search", title: "Search Visibility", desc: "Rank for the terms your buyers search, locally and globally." },
  { icon: "share", title: "Social Presence", desc: "Show up consistently with content your audience wants to read." },
  { icon: "target", title: "Paid Growth", desc: "Predictable lead flow from ads with transparent spend." },
  { icon: "pen", title: "Content That Converts", desc: "Pages and articles that build trust and drive enquiries." },
  { icon: "mail", title: "Automated Follow-Up", desc: "Nurture leads without manual chasing." },
  { icon: "brain", title: "AI-Assisted Insights", desc: "Optional AI tools for keyword clustering, reporting and creative testing." },
];

const PROCESS = [
  { title: "Audit & Goal Setting", desc: "We review your site, competitors, current channels and set targets tied to leads or revenue." },
  { title: "Strategy & Channel Plan", desc: "We choose the channels that fit your budget and audience, not every channel at once." },
  { title: "Launch & Production", desc: "Campaigns, content and technical fixes go live in a clear, agreed order." },
  { title: "Measure & Optimize", desc: "Weekly checks and monthly reports show what worked and what we change next." },
  { title: "Scale What Works", desc: "We move budget and effort toward the channels that bring results." },
];

const AUDIENCE = [
  { icon: "layers", title: "SaaS & Tech Companies", desc: "Demo requests, trials and content that explains complex products." },
  { icon: "shield", title: "Healthcare & Insurance", desc: "Trust-led, compliant marketing for regulated services." },
  { icon: "chart", title: "Finance & Real Estate", desc: "Lead generation for high-value enquiries and local markets." },
  { icon: "globe", title: "E-commerce & Local Business", desc: "Product visibility, store traffic and repeat customers." },
];

const WHY = [
  { icon: "chart", title: "Reporting You Can Read", desc: "Plain-language reports tied to leads and revenue, not vanity numbers." },
  { icon: "shield", title: "White-Hat Methods Only", desc: "No link schemes or shortcuts that put your site at risk." },
  { icon: "layers", title: "Marketing + Development", desc: "Our engineers fix speed, tracking and site issues directly." },
  { icon: "target", title: "Strategy Before Spend", desc: "We plan before spending your budget, and tell you when a channel isn't worth it." },
  { icon: "globe", title: "Global Market Experience", desc: "Campaigns for Pakistan, the US, UK, UAE and Saudi Arabia." },
  { icon: "brain", title: "AI Where It Helps", desc: "We use AI to speed up research and testing, with people reviewing the output." },
];

const FAQ_DATA = [
  { q: "What digital marketing services does QllmSoft offer?", a: "We offer SEO, social media marketing, paid advertising (Google, Meta, LinkedIn), content marketing, email and marketing automation, and analytics with conversion optimization. You can start with one service or combine several." },
  { q: "How long does SEO take to show results?", a: "Technical fixes can show effects within weeks, but meaningful ranking and traffic growth usually takes three to six months, depending on competition and your site's current state. We give a realistic timeline after the audit." },
  { q: "Do you guarantee rankings or sales?", a: "No honest agency can guarantee a specific ranking or sales figure. We commit to a clear plan, transparent reporting and ongoing optimization against agreed targets." },
  { q: "How much should I spend on paid ads?", a: "It depends on your market, margins and goals. We recommend a starting test budget, measure cost per lead, then scale what performs. Ad spend is paid directly to the platforms and kept separate from our fee." },
  { q: "Can you work with my existing website?", a: "Yes. We audit your current site first. If it needs development work such as speed, tracking or landing pages, our software team can handle it." },
  { q: "Do you work with small businesses and startups?", a: "Yes. We scope a focused package around one or two channels so a smaller budget goes further, and expand as results come in." },
  { q: "Will I receive regular reports?", a: "Yes. You get a monthly report covering traffic, leads, spend and next steps, with a call to walk through it." },
];

/* ── JSON-LD ─────────────────────────────────────────── */
const schemaService = {
  "@context": "https://schema.org", "@type": "Service", "@id": PAGE_URL + "#service",
  serviceType: "Digital Marketing Services",
  name: "Digital Marketing Services | SEO, Social Media, PPC & Content",
  description: "QllmSoft delivers data-driven digital marketing: SEO, social media, paid ads, content, email automation and analytics for growing businesses.",
  provider: { "@id": "https://qllmsoft.com/#organization" },
  areaServed: ["Pakistan", "United States", "United Kingdom", "UAE", "Saudi Arabia"],
  url: PAGE_URL,
  hasOfferCatalog: {
    "@type": "OfferCatalog", name: "Digital Marketing Services",
    itemListElement: CHANNELS.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: c.title } })),
  },
};
const schemaBreadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://qllmsoft.com/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://qllmsoft.com/services" },
    { "@type": "ListItem", position: 3, name: "Digital Marketing Services", item: PAGE_URL },
  ],
};
const schemaWebPage = {
  "@context": "https://schema.org", "@type": "WebPage", "@id": PAGE_URL + "#webpage",
  name: "Digital Marketing Services | QllmSoft", url: PAGE_URL,
  description: "SEO, social media, paid advertising, content and automation services by QllmSoft.",
  isPartOf: { "@id": "https://qllmsoft.com/#website" }, about: { "@id": PAGE_URL + "#service" },
  primaryImageOfPage: LOGO, inLanguage: "en-US", dateModified: DATE_MODIFIED,
};
const schemaFAQ = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: FAQ_DATA.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

/* ── FAQ item ────────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `dm-faq-${index}`;
  return (
    <div className={`dm-faq__item ${open ? "is-open" : ""}`}>
      <button className="dm-faq__q" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={id}>
        <span>{faq.q}</span>
        <span className="dm-faq__icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div id={id} className="dm-faq__a" role="region"><p>{faq.a}</p></div>}
    </div>
  );
};

/* ── Page ────────────────────────────────────────────── */
const DigitalMarketingServices = () => {
  const [active, setActive] = useState(CHANNELS[0].id);
  const ch = CHANNELS.find((c) => c.id === active);
  const { ref: gRef, inView: gIn } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: aRef, inView: aIn } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: wRef, inView: wIn } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | SEO, Social Media & PPC | QllmSoft</title>
        <meta name="description" content="QllmSoft provides digital marketing services: SEO, social media marketing, PPC ads, content and email automation, with clear monthly reporting. Get a free strategy call." />
        <meta name="keywords" content="digital marketing services, digital marketing agency, SEO services, social media marketing, PPC advertising, content marketing, email marketing automation, digital marketing company Pakistan" />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Digital Marketing Services | SEO, Social Media & PPC | QllmSoft" />
        <meta property="og:description" content="Data-driven SEO, paid ads, social media and content marketing from QllmSoft." />
        <meta property="og:image" content={LOGO} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Digital Marketing Services — QllmSoft" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Services | QllmSoft" />
        <meta name="twitter:description" content="SEO, social media, PPC and content marketing built around leads and revenue." />
        <meta name="twitter:image" content={LOGO} />
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <main id="main-content" className="dm-page">
        {/* HERO */}
        <header className="dm-hero">
          <div className="dm-container dm-hero__inner">
            <div className="dm-hero__content">
             
            
              <h1 className="dm-hero__title">
                Digital Marketing Services That Bring You Customers, Not Just Clicks
              </h1>
              <p className="dm-hero__sub">
                SEO, paid ads, social media, content and email automation, planned
                around your goals and reported in plain language every month.
                One team handles the strategy and the website behind it.
              </p>
              <div className="dm-hero__buttons">
                <Link to="/contact" className="dm-btn dm-btn--gold" aria-label="Book a free digital marketing strategy call with QllmSoft">Book a Free Strategy Call</Link>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="dm-btn dm-btn--soft" aria-label="WhatsApp QllmSoft about digital marketing">💬 WhatsApp Us</a>
              </div>
              <ul className="dm-hero__trust" aria-label="Why work with us">
                <li><I n="check" s={14} /> Free initial audit</li>
                <li><I n="check" s={14} /> Monthly reporting</li>
                <li><I n="check" s={14} /> White-hat methods</li>
                <li><I n="check" s={14} /> No long lock-in</li>
              </ul>
            </div>

            <aside className="dm-hero__panel" aria-label="Digital marketing channels">
              {CHANNELS.map((c) => (
                <div key={c.id} className="dm-hero__chip">
                  <span className="dm-hero__chip-icon"><I n={c.icon} s={20} /></span>
                  <strong>{c.label}</strong>
                </div>
              ))}
            </aside>
          </div>
        </header>

        {/* INTRO */}
        <section className="dm-section" aria-labelledby="dm-intro">
          <div className="dm-container dm-intro">
            <div className="dm-intro__text">
              <h2 id="dm-intro">Marketing That Is Planned, Tracked and Tied to Revenue</h2>
              <p>
                Many businesses spend on marketing without knowing which channel
                brings the lead. Posts go out without a plan, ads run without
                proper tracking, and the website loses visitors before they
                enquire.
              </p>
              <p>
                QllmSoft is a software company, so we look at the whole picture:
                your <strong>SEO</strong>, <strong>paid campaigns</strong>,
                <strong> content</strong>, <strong>social media</strong> and the
                website and tracking that connect them. We set up measurement
                first, then put effort where the data shows it pays back.
              </p>
              <p>
                Whether you need a <strong>digital marketing agency</strong> for
                a full programme or one specialist channel, we scope it to your
                budget and tell you plainly what to expect.
              </p>
            </div>
            <aside className="dm-intro__aside" aria-label="How we work">
              {[
                { icon: "chart", t: "Measured", d: "Tracking is set up before campaigns start." },
                { icon: "target", t: "Focused", d: "We pick the channels that suit your goals." },
                { icon: "shield", t: "Transparent", d: "You see spend, results and next steps." },
              ].map((s) => (
                <div key={s.t} className="dm-stat">
                  <span className="dm-icon-well"><I n={s.icon} s={20} /></span>
                  <div><strong>{s.t}</strong><span>{s.d}</span></div>
                </div>
              ))}
            </aside>
          </div>
          <figure className="dm-container dm-intro__visual">
            <img
              src={digitalMarketingInfo}
              alt="QllmSoft digital marketing services: SEO, social media marketing, and PPC advertising"
              loading="lazy"
            />
          </figure>
        </section>

        {/* CHANNEL EXPLORER */}
        <section className="dm-section dm-section--alt" aria-labelledby="dm-services">
          <div className="dm-container">
            <div className="dm-title">
              <h2 id="dm-services">Our Digital Marketing Services</h2>
              <p>Choose a service to see exactly what is included.</p>
            </div>
            <div className="dm-explorer">
              <div className="dm-tabs" role="tablist" aria-label="Digital marketing services">
                {CHANNELS.map((c) => (
                  <button key={c.id} role="tab" id={`tab-${c.id}`} aria-selected={active === c.id} aria-controls="dm-panel"
                    className={`dm-tab ${active === c.id ? "is-active" : ""}`} onClick={() => setActive(c.id)}>
                    <I n={c.icon} s={20} /><span>{c.label}</span>
                  </button>
                ))}
              </div>
              <article id="dm-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="dm-panel" key={ch.id}>
                <h3>{ch.title}</h3>
                <p>{ch.text}</p>
                <ul className="dm-panel__list">
                  {ch.items.map((it) => (<li key={it}><span className="dm-tick"><I n="check" s={13} /></span>{it}</li>))}
                </ul>
                <Link to="/contact" className="dm-btn dm-btn--gold dm-btn--sm">Ask About {ch.label}</Link>
              </article>
            </div>
          </div>
        </section>

        {/* OUTCOMES */}
        <section className="dm-section" ref={gRef} aria-labelledby="dm-outcomes">
          <div className="dm-container">
            <div className="dm-title">
              <h2 id="dm-outcomes">What Good Digital Marketing Delivers</h2>
              <p>The outcomes we plan each programme around.</p>
            </div>
            <div className="dm-grid dm-grid--3">
              {GRID.map((g, i) => (
                <article key={g.title} className={`dm-card ${gIn ? "dm-reveal" : ""}`} style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="dm-icon-well"><I n={g.icon} /></span>
                  <h3>{g.title}</h3><p>{g.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="dm-section dm-dark" aria-labelledby="dm-process">
          <div className="dm-container">
            <div className="dm-title dm-title--light">
              <h2 id="dm-process">How We Run Your Campaigns</h2>
              <p>A simple cycle that repeats and improves each month.</p>
            </div>
            <ol className="dm-steps">
              {PROCESS.map((s, i) => (
                <li key={s.title} className="dm-step">
                  <span className="dm-step__num" aria-label={`Step ${i + 1}`}>{i + 1}</span>
                  <div><h3>{s.title}</h3><p>{s.desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="dm-section" ref={aRef} aria-labelledby="dm-industries">
          <div className="dm-container">
            <div className="dm-title">
              <h2 id="dm-industries">Industries We Market For</h2>
              <p>We have built software for these sectors, so we understand how their customers decide.</p>
            </div>
            <div className="dm-grid dm-grid--4">
              {AUDIENCE.map((a, i) => (
                <article key={a.title} className={`dm-card ${aIn ? "dm-reveal" : ""}`} style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="dm-icon-well"><I n={a.icon} /></span>
                  <h3>{a.title}</h3><p>{a.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="dm-section dm-section--alt" ref={wRef} aria-labelledby="dm-why">
          <div className="dm-container">
            <div className="dm-title">
              <h2 id="dm-why">Why Teams Choose QllmSoft for Marketing</h2>
              <p>Honest advice, clear numbers and a team that can fix the website too.</p>
            </div>
            <div className="dm-grid dm-grid--3">
              {WHY.map((w, i) => (
                <article key={w.title} className={`dm-card ${wIn ? "dm-reveal" : ""}`} style={{ animationDelay: `${i * 0.06}s` }}>
                  <span className="dm-icon-well"><I n={w.icon} /></span>
                  <h3>{w.title}</h3><p>{w.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="dm-section" aria-labelledby="dm-reviews">
          <h2 id="dm-reviews" className="sr-only">Client Reviews, QllmSoft Digital Marketing and Software Company</h2>
          <TestimonialSection />
        </section>

      

        {/* FAQ */}
        <section className="dm-section" aria-labelledby="dm-faq">
          <div className="dm-container dm-faq">
            <div className="dm-title">
              <h2 id="dm-faq">Digital Marketing FAQ</h2>
              <p>Short, direct answers before you get in touch.</p>
            </div>
            {FAQ_DATA.map((f, i) => (<FAQItem key={f.q} faq={f} index={i} />))}
          </div>
        </section>

        {/* CTA */}
        <section className="dm-section dm-cta" aria-labelledby="dm-cta">
          <div className="dm-container dm-cta__inner">
            <div>
              <h2 id="dm-cta">Ready to Grow With Marketing You Can Measure?</h2>
              <p>Tell us about your business and goals. We will review your current setup and suggest a clear plan, free of charge.</p>
              <div className="dm-hero__buttons">
                <Link to="/contact" className="dm-btn dm-btn--gold" aria-label="Get a free digital marketing audit from QllmSoft">Get a Free Audit</Link>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="dm-btn dm-btn--soft" aria-label="WhatsApp QllmSoft about digital marketing">💬 WhatsApp Us</a>
              </div>
            </div>
            <aside className="dm-cta__side">
              <div className="dm-contact">
                <h3>Quick Contact</h3>
                <a href="mailto:qllmsoft@gmail.com">📧 qllmsoft@gmail.com</a>
                <a href="https://wa.me/923348229288" target="_blank" rel="noopener noreferrer">💬 WhatsApp - quick reply</a>
                <a href="tel:+923348229288">📞 +92 334 8229288</a>
              </div>
              <nav className="dm-related" aria-label="Related services">
                <p>Related Services</p>
                <Link to="/custom-software-development-services">Custom Software</Link>
                <Link to="/finance-management-system">Finance Management System</Link>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <Link to="/ai-powered-software-solutions">AI Solutions</Link>
                <Link to="/services">All Services</Link>
              </nav>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default DigitalMarketingServices;