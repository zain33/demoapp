import React from "react";
import { Helmet } from "react-helmet-async";
import "./service-pages.css";

export default function CustomSchoolManagementSoftwareDevelopment() {
  return (
    <div className="svc-page">
      <Helmet>
        <title>Custom School Management Software Development | QllmSoft</title>
        <meta
          name="description"
          content="Custom school management software from QllmSoft: admissions, attendance, fees, gradebooks, and parent access in one system built around how your school actually runs."
        />
        <link rel="canonical" href="https://qllmsoft.com/custom-school-management-software-development" />
      </Helmet>

      <header className="svc-hero">
        <p className="svc-hero__kicker">Education Software</p>
        <h1 className="svc-hero__title">One system for admissions, attendance, fees, and grades</h1>
        <p className="svc-hero__lede">
          Most schools end up running five separate tools for enrollment, attendance,
          billing, and grading, and reconciling all of it by hand. We build a single
          system around how your school actually operates, not a generic template with
          your logo on it.
        </p>
        <div className="svc-hero__actions">
          <a className="svc-btn svc-btn--primary" href="/contact">Discuss your school's setup</a>
          <a className="svc-btn svc-btn--ghost" href="/education-software-development-pakistan">See our education work</a>
        </div>
      </header>

      <section className="svc-section">
        <h2>What the system can cover</h2>
        <p className="svc-section__intro">
          Every school picks a different subset of this depending on size and what they're
          already using. Nothing here is bundled in as filler.
        </p>
        <dl className="svc-offerings">
          <div>
            <dt>Admissions and enrollment</dt>
            <dd>Application intake, document collection, and seat allocation tracked in one place.</dd>
          </div>
          <div>
            <dt>Attendance</dt>
            <dd>Daily attendance by class or subject, with automatic alerts for patterns you set.</dd>
          </div>
          <div>
            <dt>Fee management</dt>
            <dd>Fee structures by grade or program, installment tracking, and receipts, without a separate spreadsheet.</dd>
          </div>
          <div>
            <dt>Gradebook and report cards</dt>
            <dd>Grade entry by teacher, weighted by your own grading policy, exported as report cards on your schedule.</dd>
          </div>
          <div>
            <dt>Parent and student portal</dt>
            <dd>Attendance, grades, and fee status visible to parents without a phone call to the office.</dd>
          </div>
          <div>
            <dt>Staff and timetable management</dt>
            <dd>Class assignments and timetables kept in the same system as everything else, so changes propagate automatically.</dd>
          </div>
        </dl>
      </section>

      <section className="svc-section svc-section--mist">
        <div className="svc-section__inner">
          <h2>How we build it</h2>
          <div className="svc-process">
            <div className="svc-step">
              <div>
                <h3>Map your current process</h3>
                <p>We sit with admin staff and teachers to see how admissions, attendance, and fees actually work today, including the workarounds.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Design around your terms</h3>
                <p>Grading scales, fee cycles, and academic terms are configured to match your school, not the other way around.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Pilot with one class or grade</h3>
                <p>A small rollout first, so staff get comfortable and we catch anything the design missed before it's everywhere.</p>
              </div>
            </div>
            <div className="svc-step">
              <div>
                <h3>Roll out school-wide with training</h3>
                <p>Admin, teacher, and parent-facing training included, so adoption doesn't stall after handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="svc-cta">
        <div className="svc-cta__inner">
          <div>
            <h2>Still running your school on spreadsheets and paper?</h2>
            <p>Tell us your current setup and we'll map out what a single system would replace.</p>
          </div>
          <a className="svc-btn svc-btn--primary" href="/contact">Start the conversation</a>
        </div>
      </div>
    </div>
  );
}
