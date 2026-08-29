import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./OutsourcePages.css";
import { schemaOrganization } from "../data/schema";

const PAGE_URL = "https://qllmsoft.com/mobile-app-development-cost-in-pakistan";

const costRows = [
  { type: "Simple MVP (single platform, basic features)", range: "$5,000 - $12,000", timeline: "4-6 weeks" },
  { type: "Cross-platform app (React Native/Flutter, iOS + Android)", range: "$10,000 - $25,000", timeline: "8-12 weeks" },
  { type: "App with backend, auth, and payments", range: "$18,000 - $40,000", timeline: "12-18 weeks" },
  { type: "Complex app (real-time features, third-party integrations)", range: "$35,000 - $80,000+", timeline: "16-26 weeks" },
];

const factorRows = [
  { factor: "Platform choice", detail: "Native (iOS + Android separately) costs 30-50% more than a single cross-platform codebase." },
  { factor: "Backend complexity", detail: "A simple content app with no login costs far less than one needing user accounts, a database, and admin panel." },
  { factor: "Third-party integrations", detail: "Payment gateways, maps, push notifications, and chat SDKs each add development and testing time." },
  { factor: "Design scope", detail: "A handful of core screens vs. a fully custom, animation-heavy UI can shift cost by thousands of dollars." },
  { factor: "Team location", detail: "Pakistan-based teams typically bill $20-$35/hour fully loaded vs. $80-$150/hour for comparable US/UK talent." },
];

const faqs = [
  {
    q: "Why is mobile app development so much cheaper in Pakistan?",
    a: "Lower cost of living translates directly into lower billing rates for developers with comparable experience — not lower quality. A senior developer earning a strong local salary in Lahore or Karachi still costs a fraction of the same seniority level in San Francisco or London.",
  },
  {
    q: "Is a fixed price or hourly rate better for my project?",
    a: "Fixed price works well when your scope is locked and unlikely to change — a defined MVP feature list. Hourly or monthly dedicated-team billing works better when you expect the roadmap to evolve as you learn from users after launch.",
  },
  {
    q: "Does this price include app store submission?",
    a: "Yes, App Store and Google Play submission support is included in every project quote, along with basic ASO (App Store Optimization) for your listing text.",
  },
  {
    q: "What's not included in these ranges?",
    a: "Ongoing maintenance after launch, paid third-party service costs (e.g., a Twilio or Firebase bill), and major scope additions requested after the build starts. We flag any of these separately in your proposal.",
  },
  {
    q: "How do I get an exact quote instead of a range?",
    a: "Use our free software development cost calculator for an instant estimate, or book a 30-minute scoping call and we'll follow up with a written quote within one business day.",
  },
];

export default function MobileAppDevelopmentCost() {
  return (
    <>
      <Helmet>
        <title>Mobile App Development Cost in Pakistan (2026 Pricing Guide) | QllmSoft</title>
        <meta
          name="description"
          content="Real 2026 mobile app development cost ranges in Pakistan, from simple MVPs ($5k) to complex apps ($80k+). See what drives the price and get a free estimate."
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Mobile App Development Cost in Pakistan (2026 Pricing Guide)" />
        <meta
          property="og:description"
          content="Real cost ranges for mobile app development in Pakistan, from simple MVPs to complex apps, plus what drives the price."
        />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mobile App Development Cost in Pakistan (2026 Guide)" />
        <meta
          name="twitter:description"
          content="What mobile apps actually cost to build in Pakistan in 2026, from MVP to complex builds."
        />
        <meta name="twitter:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <main className="outsource-page cost-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <span aria-current="page">Mobile App Development Cost in Pakistan</span>
        </nav>

        <section className="hero">
          <h1>Mobile App Development Cost in Pakistan</h1>
          <p className="hero-sub">
            A straight answer, not a "it depends" dodge: here's what mobile apps actually cost to build
            with a Pakistan-based team in 2026, broken down by app type, plus the specific factors that
            move your number up or down.
          </p>
          <div className="cta-row">
            <Link to="/software-development-cost-calculator" className="btn-primary">
              Get an Instant Estimate
            </Link>
            <Link to="/contact" className="btn-secondary">Book a Scoping Call</Link>
          </div>
        </section>

        <section className="content-section">
          <h2>Cost by App Type</h2>
          <table className="info-table">
            <thead>
              <tr>
                <th>App type</th>
                <th>Typical cost</th>
                <th>Typical timeline</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((r, i) => (
                <tr key={i}>
                  <td>{r.type}</td>
                  <td>{r.range}</td>
                  <td>{r.timeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="table-note">
            Ranges reflect a Pakistan-based team billing $20-$35/hour fully loaded. Get a number
            specific to your spec with the <Link to="/software-development-cost-calculator">cost calculator</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2>What Actually Drives the Price</h2>
          <div className="factor-list">
            {factorRows.map((f, i) => (
              <div className="factor-item" key={i}>
                <h3>{f.factor}</h3>
                <p>{f.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>Pakistan vs. US/UK Agency Pricing</h2>
          <p>
            The same mobile app scope typically costs $30,000-$80,000+ from a US or UK agency, driven
            almost entirely by billing rate rather than differences in code quality or delivery speed.
            A Pakistan-based team with comparable senior-level experience bills $20-$35/hour fully
            loaded, versus $80-$150/hour for the same seniority in San Francisco, New York, or London —
            which is why the same project lands 50-70% lower without a corresponding drop in quality
            when you work with an established team rather than an individual freelancer.
          </p>
        </section>

        <section className="content-section">
          <h2>How to Get an Exact Number</h2>
          <ol className="process-list">
            <li><strong>Use the free calculator</strong> for an instant range based on your feature list — no email required to see it.</li>
            <li><strong>Or book a 30-minute scoping call</strong> and get a written, itemized quote within one business day.</li>
            <li><strong>Compare against your in-house or agency quote</strong> — we're happy to review a spec you already have and tell you honestly if our range is competitive for it.</li>
          </ol>
        </section>

        <section className="content-section faq-section">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>

        <section className="cta-box">
          <h2>See your number in under a minute</h2>
          <p>No email required — get an instant cost range from the calculator, or talk to us directly.</p>
          <div className="cta-row cta-row-center">
            <Link to="/software-development-cost-calculator" className="btn-primary">Use the Cost Calculator</Link>
            <Link to="/outsource-mobile-app-development-to-pakistan" className="btn-secondary">
              Learn About Our Process
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
