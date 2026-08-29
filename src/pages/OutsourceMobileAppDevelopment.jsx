import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./OutsourcePages.css";
import { schemaOrganization } from "../data/schema";

const PAGE_URL = "https://qllmsoft.com/outsource-mobile-app-development-to-pakistan";

const faqs = [
  {
    q: "How much does it cost to outsource mobile app development to Pakistan?",
    a: "Most MVP-stage mobile apps built with a Pakistan-based team range from $8,000 to $25,000, versus $30,000-$80,000+ for the same scope from a US or UK agency. Exact cost depends on platform choice (native vs. cross-platform), backend complexity, and integrations. See our full mobile app cost breakdown for a detailed range by app type.",
  },
  {
    q: "Will I own the source code and IP?",
    a: "Yes. Every engagement includes a signed IP assignment and NDA before work begins, so all source code, designs, and documentation are transferred to you on delivery or milestone completion.",
  },
  {
    q: "Do you build native apps or cross-platform apps?",
    a: "Both. We build native iOS (Swift) and Android (Kotlin) apps when performance or platform-specific APIs demand it, and React Native or Flutter when speed-to-market and one codebase for both platforms matter more.",
  },
  {
    q: "How do we communicate across time zones?",
    a: "We overlap working hours with US Eastern, UK, and Australian business hours depending on your location, and run structured async updates (daily Slack standup notes, weekly demo calls) so nothing waits on a single live meeting.",
  },
  {
    q: "What if we already have a designer or an existing app?",
    a: "We regularly join mid-project — picking up an existing codebase, continuing from your Figma designs, or taking over from a previous freelancer/agency. We start with a codebase and design audit before writing new code.",
  },
];

export default function OutsourceMobileAppDevelopment() {
  return (
    <>
      <Helmet>
        <title>Outsource Mobile App Development to Pakistan | iOS &amp; Android | QllmSoft</title>
        <meta
          name="description"
          content="Outsource mobile app development to Pakistan and cut costs 50-70% without cutting quality. Native iOS/Android, React Native &amp; Flutter teams. Fixed-price or dedicated hire."
        />
        <meta name="author" content="QllmSoft" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="Outsource Mobile App Development to Pakistan | iOS &amp; Android | QllmSoft" />
        <meta
          property="og:description"
          content="Outsource mobile app development to Pakistan and cut costs 50-70% without cutting quality. Native iOS/Android, React Native &amp; Flutter teams."
        />
        <meta property="og:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Outsource Mobile App Development to Pakistan | QllmSoft" />
        <meta
          name="twitter:description"
          content="Cut mobile app development costs 50-70% by outsourcing to a Pakistan-based team. Native and cross-platform builds."
        />
        <meta name="twitter:image" content="https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Mobile App Development Outsourcing",
            provider: { "@type": "Organization", name: "QllmSoft", url: "https://qllmsoft.com" },
            areaServed: "Worldwide",
            url: PAGE_URL,
            description:
              "Outsourced native and cross-platform mobile app development services delivered by a Pakistan-based team.",
          })}
        </script>
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

      <main className="outsource-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> <span>/</span> <Link to="/services">Services</Link>{" "}
          <span>/</span> <span aria-current="page">Outsource Mobile App Development to Pakistan</span>
        </nav>

        <section className="hero">
          <h1>Outsource Mobile App Development to Pakistan</h1>
          <p className="hero-sub">
            Ship native or cross-platform apps at 50-70% lower cost than a US or UK agency, without
            handing off ownership of your product decisions. QllmSoft embeds a dedicated iOS, Android,
            React Native, or Flutter team directly into your workflow.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="btn-primary">Get a Free Scoping Call</Link>
            <Link to="/mobile-app-development-cost-in-pakistan" className="btn-secondary">
              See Cost Estimates
            </Link>
          </div>
        </section>

        <section className="content-section">
          <h2>Why Companies Outsource Mobile App Development to Pakistan</h2>
          <p>
            Pakistan has become one of the top five outsourcing destinations globally for software
            development, driven by a large English-speaking engineering talent pool, hourly rates
            roughly a third of US/UK equivalents, and a maturing ecosystem of teams that have shipped
            production apps for international clients across fintech, healthcare, and e-commerce.
          </p>
          <p>
            The cost advantage doesn't come from cutting corners — it comes from a lower cost of
            living translating into lower billing rates for developers with comparable experience to
            their Western counterparts. A senior React Native developer in Lahore or Karachi typically
            costs $20-$35/hour fully loaded, versus $80-$150/hour for the same seniority in the US.
          </p>
        </section>

        <section className="content-section">
          <h2>What We Build</h2>
          <div className="grid-3">
            <div className="grid-card">
              <h3>Native iOS &amp; Android</h3>
              <p>Swift and Kotlin builds for apps that need deep platform integration, hardware access, or maximum performance — camera-heavy apps, AR features, or offline-first apps with complex local storage.</p>
            </div>
            <div className="grid-card">
              <h3>Cross-Platform (React Native / Flutter)</h3>
              <p>One codebase, both platforms. The right call for most MVPs, internal tools, and content or marketplace apps where time-to-market matters more than squeezing out native-only APIs.</p>
            </div>
            <div className="grid-card">
              <h3>Backend &amp; API Integration</h3>
              <p>ASP.NET Core, Node.js, or Firebase backends, payment gateway integration (Stripe, JazzCash, Easypaisa for Pakistan-market apps), and third-party API work.</p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Engagement Models</h2>
          <table className="info-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Best for</th>
                <th>How billing works</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fixed-price project</td>
                <td>Well-defined MVP with a clear spec</td>
                <td>Agreed scope, milestone-based payment</td>
              </tr>
              <tr>
                <td>Dedicated team / hire</td>
                <td>Ongoing product development, evolving roadmap</td>
                <td>Monthly rate per developer, full control over priorities</td>
              </tr>
              <tr>
                <td>Staff augmentation</td>
                <td>You have a PM/lead already, need extra hands</td>
                <td>Hourly or monthly, developers join your existing sprint process</td>
              </tr>
            </tbody>
          </table>
          <p>
            Not sure which fits? See our <Link to="/hire-react-developers-pakistan">dedicated developer hiring page</Link>{" "}
            for rate cards, or go straight to a <Link to="/contact">scoping call</Link>.
          </p>
        </section>

        <section className="content-section">
          <h2>Our Process</h2>
          <ol className="process-list">
            <li><strong>Discovery call (free, 30 min):</strong> we scope your app, flag technical risks, and give a rough cost/timeline range on the call.</li>
            <li><strong>Proposal &amp; contract:</strong> fixed-price quote or dedicated-team rate card, plus NDA and IP assignment signed before any code is written.</li>
            <li><strong>Sprint 0:</strong> architecture decisions, tech stack lock-in, and a clickable prototype or wireframe review before full build starts.</li>
            <li><strong>Build in 1-2 week sprints:</strong> you get a working build to test at the end of every sprint, not just at the final handoff.</li>
            <li><strong>QA, app store submission, and handoff:</strong> we handle App Store/Play Store submission and provide full source code and documentation.</li>
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
          <h2>Get a scoped estimate this week</h2>
          <p>Tell us what you're building — we'll reply with a realistic cost range and timeline within one business day.</p>
          <Link to="/contact" className="btn-primary">Start the Conversation</Link>
        </section>
      </main>
    </>
  );
}
