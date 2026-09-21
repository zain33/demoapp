import React from "react";
import { Helmet } from "react-helmet-async";
import "./service-pages.css";

export default function WordPressDevelopmentServices() {
  return (
    <div className="svc-page">
      <Helmet>
        <title>WordPress Development Services | QllmSoft</title>
        <meta
          name="description"
          content="Custom WordPress themes, plugin development, Elementor builds, and site migrations from QllmSoft. Sites your team can actually edit, without breaking them."
        />
        <link rel="canonical" href="https://qllmsoft.com/wordpress-development-services" />
      </Helmet>

      <header className="svc-hero">
        <p className="svc-hero__kicker">WordPress Development</p>
        <h1 className="svc-hero__title">WordPress sites built to be edited, not feared</h1>
        <p className="svc-hero__lede">
          Most WordPress problems aren't WordPress's fault, they're the fault of a theme
          nobody understands and a plugin stack nobody can update safely. We build and
          rebuild WordPress sites your own team can maintain after we hand them over.
        </p>
        <div className="svc-hero__actions">
          <a className="svc-btn svc-btn--primary" href="/contact">Talk to us about your site</a>
          <a className="svc-btn svc-btn--ghost" href="/software-development-cost-calculator">Estimate the cost</a>
        </div>
      </header>

      <section className="svc-section">
        <h2>What we take on</h2>
        <p className="svc-section__intro">
          From a single stuck plugin to a full rebuild, here's where clients usually bring us in.
        </p>
        <dl className="svc-offerings">
          <div>
            <dt>Custom theme development</dt>
            <dd>A theme built for your content and brand, not a page builder's default grid.</dd>
          </div>
          <div>
            <dt>Elementor and page-builder builds</dt>
            <dd>Fast, editable pages for teams who want to make small updates without a developer.</dd>
          </div>
          <div>
            <dt>Plugin development and fixes</dt>
            <dd>Custom functionality when an off-the-shelf plugin almost does what you need, but not quite.</dd>
          </div>
          <div>
            <dt>Site migrations</dt>
            <dd>Moving hosts, themes, or from another CMS entirely, without losing your rankings or your content.</dd>
          </div>
          <div>
            <dt>Speed and security hardening</dt>
            <dd>Trimming plugin bloat, fixing slow queries, and closing the holes bad plugins leave open.</dd>
          </div>
          <div>
            <dt>Ongoing maintenance</dt>
            <dd>Core and plugin updates handled on a schedule, so nothing breaks quietly in the background.</dd>
          </div>
        </dl>
      </section>

      <section className="svc-section svc-section--mist">
        <div className="svc-section__inner">
          <h2>How a project usually runs</h2>
          <div className="svc-process">
            <div className="svc-step">
              <div>
                <h3>Audit the current site</h3>
                <p>We check what the theme and plugins are actually doing before touching anything, so nothing gets rebuilt that didn't need to be.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Scope the build</h3>
                <p>You get a fixed list of pages, functionality, and content types, with a cost and timeline attached to it.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Build on staging</h3>
                <p>Your live site stays untouched while we build, so there's no downtime and nothing for visitors to see mid-way.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Hand over with documentation</h3>
                <p>You get a short guide to editing your own site, not just a login and a shrug.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-cta">
        <div className="svc-cta__inner">
          <div>
            <h2>Have a WordPress site that's fighting you?</h2>
            <p>Tell us what's broken or what you're trying to build. We'll tell you honestly what it takes to fix it.</p>
          </div>
          <a className="svc-btn svc-btn--primary" href="/contact">Get in touch</a>
        </div>
      </div>
    </div>
  );
}
