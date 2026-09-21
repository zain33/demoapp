import React from "react";
import { Helmet } from "react-helmet-async";
import "./service-pages.css";

export default function CustomBusinessAutomationSolutions() {
  return (
    <div className="svc-page">
      <Helmet>
        <title>Custom Business Automation Solutions | QllmSoft</title>
        <meta
          name="description"
          content="Custom business automation software from QllmSoft: replace manual approvals, spreadsheet handoffs, and repeated data entry with one connected system."
        />
        <link rel="canonical" href="https://qllmsoft.com/custom-business-automation-solutions" />
      </Helmet>

      <header className="svc-hero">
        <p className="svc-hero__kicker">Business Automation</p>
        <h1 className="svc-hero__title">Replace the spreadsheet relay race with one system</h1>
        <p className="svc-hero__lede">
          If a task moves between three people, two spreadsheets, and an email thread
          before it's done, that's not a training problem, it's a tooling problem. We
          build software that runs the process itself, so approvals, updates, and reports
          happen without someone chasing them.
        </p>
        <div className="svc-hero__actions">
          <a className="svc-btn svc-btn--primary" href="/contact">Describe your process</a>
          <a className="svc-btn svc-btn--ghost" href="/ai-powered-software-solutions">See our AI-powered work</a>
        </div>
      </header>

      <section className="svc-section">
        <h2>Where automation usually pays off first</h2>
        <p className="svc-section__intro">
          These are the processes clients most often ask us to take off their hands.
        </p>
        <dl className="svc-offerings">
          <div>
            <dt>Approval workflows</dt>
            <dd>Purchase requests, leave, and sign-offs routed to the right person automatically, with a visible status.</dd>
          </div>
          <div>
            <dt>Data entry and syncing</dt>
            <dd>Information typed once and pushed everywhere it's needed, instead of copied between tools by hand.</dd>
          </div>
          <div>
            <dt>Reporting and dashboards</dt>
            <dd>Numbers pulled live from your systems instead of rebuilt in a spreadsheet every week.</dd>
          </div>
          <div>
            <dt>Notifications and reminders</dt>
            <dd>The right person alerted when something needs attention, instead of finding out it was missed.</dd>
          </div>
          <div>
            <dt>Third-party integrations</dt>
            <dd>Your CRM, accounting tool, and internal systems connected so they share data instead of guarding it.</dd>
          </div>
          <div>
            <dt>Internal tools</dt>
            <dd>A small purpose-built app for a process that doesn't fit any off-the-shelf software you've tried.</dd>
          </div>
        </dl>
      </section>

      <section className="svc-section svc-section--mist">
        <div className="svc-section__inner">
          <h2>How we scope this</h2>
          <div className="svc-process">
            <div className="svc-step">
              <div>
                <h3>Trace the process as it runs today</h3>
                <p>We follow one task from start to finish, including every handoff and workaround, before proposing anything.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Pick the highest-friction step first</h3>
                <p>We automate the part costing the most time first, rather than rebuilding everything at once.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Build and run it alongside the old process</h3>
                <p>The new system runs in parallel until your team trusts it, so nothing falls through during the switch.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Retire the manual version</h3>
                <p>Once the automated process is holding up on its own, the spreadsheets and manual steps come off the workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-cta">
        <div className="svc-cta__inner">
          <div>
            <h2>Know exactly which process is wasting your time?</h2>
            <p>Tell us how it works today and we'll tell you what's realistic to automate first.</p>
          </div>
          <a className="svc-btn svc-btn--primary" href="/contact">Talk to us</a>
        </div>
      </div>
    </div>
  );
}
