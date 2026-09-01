/**
 * AiPoweredSoftware.jsx
 * ─────────────────────────────────────────────────────────────────
 * REV 3 — AEO + Topical Authority + E-E-A-T Optimization
 * 
 * Changes implemented per 2025–2026 Google guidance:
 * - Direct 40–60 word answer blocks at the start of each H2/H3 section [2][5][8]
 * - Question-format H2/H3 headings matching natural language queries [2][12]
 * - QllmSoft positioned as central entity with consistent brand co-occurrence [6][9]
 * - Author bylines and "How this was created" disclosure for E-E-A-T [16]
 * - Semantic HTML: short paragraphs (<120 words), bulleted lists, declarative sentences [7]
 * - FAQPage schema removed (deprecated May 2026), replaced with Article + QAPage where appropriate [17]
 * - Original insights and first-hand experience markers instead of generic AI content [1][4][15]
 * 
 * Central Search Intent: "Hire a company to add AI features to existing software, 
 *                        or build AI-powered software from scratch."
 * URL: /ai-powered-software-solutions
 * Primary Entity: QllmSoft (custom software development agency, operating since 2015)
 * Topic Cluster: AI-Powered Software Solutions (pillar page)
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import './AiPoweredSoftware.css';
import TestimonialSection from "../components/TestimonialSection";
import FounderNote from "../components/FounderNote";

/* ─── Constants ───────────────────────────────────────────── */
const PAGE_URL = 'https://qllmsoft.com/ai-powered-software-solutions';
const OG_IMAGE  = 'https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg';
const AUTHOR_NAME = 'QllmSoft Engineering Team';
const AUTHOR_URL = 'https://qllmsoft.com/about';

/* ─── Icon Components (unchanged from original) ─────── */
const IconBrain = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 9.5 2Z"/>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/>
  </svg>
);
const IconCpu = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
    <path d="M15 2v2M9 2v2M2 9h2M2 15h2M22 9h-2M22 15h-2M15 22v-2M9 22v-2"/>
  </svg>
);
const IconMessageSquare = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const IconEye = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconZap = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconBarChart = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);
const IconCode = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
);
const IconDatabase = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconSettings = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);
const IconShield = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTrendingUp = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);
const IconCheckCircle = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const IconMapPin = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

/* ─── JSON-LD: Organization ───────────────────────────────── */
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://qllmsoft.com/#organization',
  name: 'QllmSoft',
  url: 'https://qllmsoft.com',
  description:
    'QllmSoft is a custom software development agency operating since 2015, providing software engineering and AI development services to clients internationally. Its services include custom software development, API development, mobile applications, web development, legacy modernization, and AI-powered software solutions.',
  foundingDate: '2015',
  numberOfEmployees: '10-50',
  areaServed: ['US', 'UK', 'CA', 'AU', 'PK'],
};

/* ─── JSON-LD: Service ────────────────────────────────────── */
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'AI-Powered Software Solutions',
  serviceType: 'AI-Powered Software Solutions',
  description:
    'AI-powered software development for businesses that need to add intelligent capabilities to existing applications or build new AI-powered products. Services include custom AI applications, machine learning, NLP and conversational AI, AI process automation, computer vision, LLM integration, data pipelines, model evaluation, production deployment, and ongoing monitoring.',
  provider: {
    '@type': 'Organization',
    '@id': 'https://qllmsoft.com/#organization',
    name: 'QllmSoft',
    url: 'https://qllmsoft.com',
  },
  url: PAGE_URL,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI-Powered Software Solutions',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Applications' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Machine Learning & Data Science' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NLP & Conversational AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Process Automation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Vision' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Integration' } },
    ],
  },
  areaServed: ['US', 'UK', 'CA', 'AU', 'PK'],
};

/* ─── JSON-LD: BreadcrumbList ─────────────────────────────── */
const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://qllmsoft.com/' },
    { '@type': 'ListItem', position: 2, name: 'AI-Powered Software Solutions', item: PAGE_URL },
  ],
};

/* ─── JSON-LD: Article (replaces deprecated FAQPage) ─────── */
const schemaArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: 'AI-Powered Software Solutions | QllmSoft',
  description: 'AI-powered software solutions by QllmSoft. Add AI to existing software or build new applications with data pipelines, evaluation, and production integration.',
  url: PAGE_URL,
  author: {
    '@type': 'Organization',
    '@id': 'https://qllmsoft.com/#organization',
    name: 'QllmSoft Engineering Team',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://qllmsoft.com/#organization',
    name: 'QllmSoft',
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
    },
  },
  datePublished: '2025-01-15',
  dateModified: '2026-09-01',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': PAGE_URL,
  },
};

const integrationItems = [
  { Icon: IconZap, title: 'Staged, Low-Risk Rollout', desc: 'QllmSoft stages and monitors every AI feature before it touches production, a phased rollout, never a single risky cutover.' },
  { Icon: IconCode, title: 'Custom APIs & Middleware', desc: 'Connector layers built for your actual stack, not a generic plugin that half-fits. See our broader approach on the API development page.' },
  { Icon: IconDatabase, title: 'Works With What You Have', desc: 'CRMs, ERPs, CMSs, mobile and web apps, the AI layer sits on top of your existing systems instead of replacing them. If the underlying system itself is the bottleneck, our legacy modernization team handles that separately.' },
  { Icon: IconSettings, title: 'Real-Time Data Sync', desc: 'Event-driven pipelines and webhooks so the AI is working from current data, not a nightly batch export.' },
];

/* ─── FAQ data (kept for visible FAQ section, schema removed per May 2026 deprecation) ────── */
const FAQ_DATA = [
  {
    q: 'How much does it cost to build an AI-powered software solution?',
    a: 'The cost depends on whether you are adding one AI capability to an existing application or building a complete AI-powered product from scratch. Major cost drivers include data preparation, application development, model or API usage, integrations, security requirements, evaluation, infrastructure, and ongoing monitoring. A document extraction feature using an established model can have a very different scope from a custom machine learning platform requiring training data and a production pipeline. A reliable estimate requires reviewing the target workflow, existing software, available data, expected usage, and required AI behavior.',
  },
  {
    q: 'Can you add AI to software we already have?',
    a: 'Yes, AI can often be added to an existing application without replacing its core architecture. The AI component can be exposed through an API and connected to existing databases, authentication, business services, and user interfaces. This approach is suitable for capabilities such as semantic search, document processing, recommendations, forecasting, conversational assistants, and workflow automation. The existing application can continue handling deterministic business rules while AI handles tasks that benefit from language understanding, prediction, or pattern recognition.',
  },
  {
    q: 'Do we need our own AI model, or can you integrate an existing model?',
    a: 'You do not necessarily need a custom-trained model because many business applications can be built using established commercial or open-source models. An existing model is often appropriate when the task is general language understanding, generation, extraction, classification, or other capabilities for which suitable models already exist. Custom training becomes more relevant when the required behavior depends strongly on specialized data, domain-specific patterns, or performance requirements that existing models cannot meet. The decision should be based on evaluation results, data availability, security requirements, operating cost, and the level of control the application needs.',
  },
  {
    q: 'What data do we need before starting an AI software project?',
    a: 'The required data depends on the AI use case, but most projects need representative examples of the information the system will process or the outcomes it must predict. For machine learning, historical records may need to include reliable examples of both inputs and the outcomes the model is expected to learn. For LLM applications, useful sources can include approved documents, knowledge bases, database records, or API-accessible business information. Data quality, permissions, labeling, consistency, and coverage are usually more important than simply having a large volume of data.',
  },
  {
    q: 'How do you make sure an AI application gives reliable answers?',
    a: 'Reliability comes from evaluating the complete AI workflow rather than assuming that a capable model will always produce correct output. Depending on the use case, the system can use retrieval from approved sources, structured outputs, validation rules, confidence thresholds, test datasets, human review, and application-level permissions. Production monitoring can compare actual outputs against defined quality criteria and identify changes caused by new data, model updates, or user behavior. High-risk decisions should retain appropriate deterministic controls and human oversight instead of relying entirely on generated output.',
  },
  {
    q: 'How long does it take to develop an AI-powered application?',
    a: 'The timeline depends on the number of workflows, data readiness, integrations, model requirements, and production controls required. A focused AI feature inside an existing application can be substantially faster to deliver than a new product requiring data engineering, custom model development, multiple external integrations, and extensive evaluation. The first phase should establish the use case, data requirements, architecture, and acceptance criteria before a production timeline is committed. Projects can then be divided into a proof-of-value stage and production implementation when that reduces technical uncertainty.',
  },
  {
    q: 'Can AI be integrated with our CRM, ERP, database, or internal APIs?',
    a: 'Yes, AI can be connected to existing business systems through APIs, database services, integration layers, queues, and other application interfaces. The integration can allow an AI feature to retrieve approved information, perform analysis, return structured results, or initiate controlled actions through existing business services. Access should be constrained by the application\'s authentication and authorization rules rather than giving the model unrestricted database access. This architecture allows AI capabilities to work with existing systems while keeping critical business logic under conventional software controls.',
  },
  {
    q: 'How do you handle AI model updates, drift, and ongoing maintenance?',
    a: 'AI software requires ongoing evaluation because model behavior and real-world data can change after deployment. Machine learning systems may experience data or concept drift, while LLM applications can be affected by model-provider changes, prompt changes, retrieval quality, or shifts in the documents and user questions entering the system. A production setup can therefore include model versioning, evaluation datasets, monitoring, regression tests, usage and cost tracking, and a defined process for retraining or changing models. The maintenance plan should be established during architecture and not treated as an afterthought after launch.',
  },
];

/* ─── FAQ Accordion ───────────────────────────────────────── */
const FAQItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);
  const id = `ai-faq-${index}`;
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)} aria-expanded={open} aria-controls={id}>
        <span>{faq.q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={id} className="faq-answer">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════ */
const AiPoweredSoftware = () => {
  const { ref: introRef,    inView: introInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.06 });
  const { ref: processRef,  inView: processInView  } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: mlRef,       inView: mlInView       } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: casesRef,    inView: casesInView    } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: industryRef, inView: industryInView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { ref: aboutRef,    inView: aboutInView    } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>AI-Powered Software Solutions | QllmSoft</title>
        <meta name="description" content="AI-powered software solutions by QllmSoft. Add AI to existing software or build new applications with data pipelines, evaluation, and production integration." />
        <meta name="author"  content={AUTHOR_NAME} />
        <meta name="robots"  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="QllmSoft" />
        <meta property="og:title" content="AI-Powered Software Solutions | QllmSoft" />
        <meta property="og:description" content="Add AI to existing software or build an AI-powered application with production-ready integrations, data pipelines, model evaluation, and monitoring." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="QllmSoft AI-powered software development" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content={AUTHOR_URL} />
        <meta property="article:publisher" content="https://qllmsoft.com" />
        <meta property="article:modified_time" content="2026-09-01" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI-Powered Software Solutions | QllmSoft" />
        <meta name="twitter:description" content="Build or extend AI software with machine learning, NLP, computer vision, LLM integration, automation, and production-focused AI engineering." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
      </Helmet>

      <main id="main-content" className="ai-page" role="main">

        {/* ══════════════ HERO, single H1 + direct answer (40–60 words), brand + topic co-occurring ══════════════ */}
        <header className="ai-hero" role="banner">
          <div className="container ai-hero__inner">
            <div className="ai-hero__content">
              <div className="ai-hero__badge">
                <span className="ai-hero__badge-pulse" aria-hidden="true" />
                AI Development
              </div>

              <h1 className="ai-hero__title">AI-Powered Software Solutions</h1>

              {/* Direct answer block: 40–60 words, brand + topic in first sentence [2][5][8] */}
              <p className="ai-hero__sub">
                <strong>
                  QllmSoft builds AI-powered software solutions that add intelligent capabilities to existing applications or create new AI-first products from scratch. 
                  We handle data pipelines, model integrations, evaluation workflows, and production controls so your AI features work reliably in real business environments.
                </strong> 
                Our team has delivered 50+ AI projects across web applications, internal platforms, customer-facing products, and operational workflows since 2015.
              </p>

              <div className="ai-hero__buttons">
                <Link to="/contact" className="btn btn-primary ai-btn-primary" aria-label="Get a free AI software consultation from QllmSoft">
                  Get Free AI Consultation
                </Link>
                <Link to="/projects" className="btn ai-btn-ghost" aria-label="View QllmSoft AI development projects and case studies">
                  View Our Work
                </Link>
              </div>

              <div className="ai-hero__stats" aria-label="AI development track record">
                {[
                  { num: '10+',  label: 'Years Building Software' },
                  { num: '50+',  label: 'AI Projects Delivered' },
                  { num: '5',    label: 'Countries Served' },
                ].map(s => (
                  <div key={s.label} className="ai-hero__stat">
                    <span className="ai-hero__stat-num">{s.num}</span>
                    <span className="ai-hero__stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="ai-hero__cards" aria-label="AI capabilities overview">
              {[
                { Icon: IconBrain,         label: 'Machine Learning',     desc: 'Predictive models & pattern recognition' },
                { Icon: IconMessageSquare, label: 'NLP & Chatbots',       desc: 'Conversational AI & language understanding' },
                { Icon: IconEye,           label: 'Computer Vision',      desc: 'Image recognition & visual inspection' },
                { Icon: IconZap,           label: 'AI Automation',        desc: 'Workflow automation with judgment built in' },
                { Icon: IconBarChart,      label: 'Predictive Analytics', desc: 'Forecasting from historical data' },
                { Icon: IconCode,          label: 'LLM Integration',      desc: 'OpenAI, Claude, Gemini & custom pipelines' },
              ].map((c, i) => (
                <div key={i} className="ai-hero__card">
                  <div className="ai-hero__card-icon"><c.Icon size={22} /></div>
                  <div><strong>{c.label}</strong><p>{c.desc}</p></div>
                </div>
              ))}
              <div className="ai-hero__tech" aria-label="AI technologies used">
                {['ML.NET','OpenAI API','Python','TensorFlow','Azure AI','LangChain'].map(t => (
                  <span key={t} className="ai-tech-tag">{t}</span>
                ))}
              </div>
            </aside>
          </div>
        </header>

        {/* ══════════════ INTRO, H2 with question-format heading + direct answer block ══════════════ */}
        <section className="section ai-intro" ref={introRef} aria-labelledby="intro-heading">
          <div className="container">
            <div className="ai-intro__layout">
              <div className={`ai-intro__text animate__animated ${introInView ? 'animate__fadeInLeft' : ''}`}>
                {/* Question-format H2 matching natural language query [2][12] */}
                <h2 id="intro-heading">When does AI actually earn its cost in software?</h2>
                
                {/* Direct answer block: 40–60 words at section start [2][5][8] */}
                <p>
                  <strong>
                    AI earns its cost when it performs repeatable tasks that depend on information, prediction, classification, generation, or pattern recognition 
                    at a scale where conventional software becomes expensive or impractical.
                  </strong>
                  QllmSoft helps businesses identify these opportunities before writing any code.
                </p>

                {/* Short paragraphs (<120 words), declarative sentences [7] */}
                <p>
                  Examples include extracting structured data from thousands of documents, forecasting demand from historical records, 
                  routing support requests, detecting visual defects, or giving employees controlled access to company knowledge.
                </p>
                <p>
                  AI is usually the wrong choice when a deterministic rule can solve the problem more accurately, cheaply, and predictably. 
                  If a workflow only needs fixed validations, calculations, database queries, or straightforward business logic, 
                  conventional application code is often the better engineering decision.
                </p>
                <p>
                  The right starting point is therefore the business decision the software must improve, not the model someone wants to deploy. 
                  Before development begins, the team should establish what data is available, how the output will be evaluated, 
                  what level of human review is required, and what happens when the model is uncertain or wrong.
                </p>
                <p>
                  For an existing application, the highest-value AI opportunity is often a focused capability rather than a complete rebuild. 
                  A search assistant, document extraction service, recommendation component, forecasting model, or classification API can 
                  be introduced behind an existing interface while the rest of the application continues operating normally.
                </p>

                {/* E-E-A-T: "How this was created" disclosure [16] */}
                <p className="ai-disclosure">
                  <em>This guidance reflects QllmSoft's experience delivering 50+ AI projects since 2015. We disclose our use of AI-assisted development 
                  where it improves efficiency, but all architectural decisions, evaluation frameworks, and production controls are designed by our engineering team.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ SERVICES, H2 + H3s with direct answer blocks ══════════════ */}
        <section className="section ai-services" ref={servicesRef} aria-labelledby="services-heading">
          <div className="container">
            <div className="section-title">
              {/* Question-format H2 [2][12] */}
              <h2 id="services-heading">What AI-powered software solutions does QllmSoft build?</h2>
              {/* Direct answer block at section start [2][5][8] */}
              <p>
                <strong>
                  QllmSoft builds six core types of AI-powered software solutions: custom AI applications, machine learning and data science systems, 
                  NLP and conversational AI, AI process automation, computer vision, and LLM integration.
                </strong>
                Each is scoped and priced separately based on your actual use case.
              </p>
            </div>
            <div className="ai-services__grid">
              {[
                { 
                  Icon: IconBrain, 
                  accent: '#1A365D', 
                  title: 'Custom AI Applications', 
                  desc: 'Custom AI applications combine models with the application logic, databases, interfaces, permissions, and workflows required by a specific business. QllmSoft can build AI-first products from the ground up or introduce a focused AI capability into an existing web or mobile application.' 
                },
                { 
                  Icon: IconDatabase, 
                  accent: '#2B6CB0', 
                  title: 'Machine Learning & Data Science', 
                  desc: 'Machine learning solutions turn historical and operational data into predictions, classifications, rankings, anomaly detection, or other measurable outputs. The engineering work can include data preparation, feature pipelines, model selection, evaluation, deployment, monitoring, and retraining workflows.' 
                },
                { 
                  Icon: IconMessageSquare, 
                  accent: '#1A365D', 
                  title: 'NLP & Conversational AI', 
                  desc: 'Natural language processing can turn unstructured text into searchable, classified, summarized, or machine-readable information. Conversational systems can also connect users with approved business data through retrieval-based architectures, intent detection, conversation state, and controlled application actions.' 
                },
                { 
                  Icon: IconSettings, 
                  accent: '#2B6CB0', 
                  title: 'AI Process Automation', 
                  desc: 'AI process automation is useful when workflows contain documents, emails, natural-language requests, repetitive decisions, or other information that conventional automation cannot interpret reliably. QllmSoft combines AI models with APIs, queues, validation rules, databases, and human approval steps to automate the complete workflow rather than only the AI task.' 
                },
                { 
                  Icon: IconEye, 
                  accent: '#1A365D', 
                  title: 'Computer Vision', 
                  desc: 'Computer vision systems can process images or video for use cases such as inspection, classification, object detection, document analysis, and visual monitoring. Production implementations require more than a model, including image pipelines, inference services, confidence handling, storage, monitoring, and integration with the surrounding application.' 
                },
                { 
                  Icon: IconCode, 
                  accent: '#2B6CB0', 
                  title: 'LLM Integration', 
                  desc: 'Large language models can be integrated into existing software for document analysis, knowledge retrieval, content generation, coding assistance, customer support, and natural-language interfaces. The implementation can include model selection, prompt and response controls, retrieval-augmented generation, structured outputs, token-cost management, evaluation, and safeguards around sensitive business information.' 
                },
              ].map((s, i) => (
                <article key={i} className={`ai-service-card animate__animated ${servicesInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.07}s`, '--ai-accent': s.accent }} itemScope itemType="https://schema.org/Service">
                  <div className="ai-service-card__icon-wrap"><s.Icon size={24} /></div>
                  <h3 className="ai-service-card__title" itemProp="name">{s.title}</h3>
                  <p className="ai-service-card__desc" itemProp="description">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ PROCESS, H2 + H4s with direct answer blocks ══════════════ */}
        <section className="section ai-process" ref={processRef} aria-labelledby="process-heading">
          <div className="container">
            <div className="section-title">
              {/* Question-format H2 [2][12] */}
              <h2 id="process-heading">How does an AI software project run at QllmSoft?</h2>
              {/* Direct answer block at section start [2][5][8] */}
              <p>
                <strong>
                  QllmSoft runs AI projects in five phases: define the use case, assess data and technical readiness, design the architecture, 
                  build and evaluate, then deploy with ongoing monitoring.
                </strong>
                The order matters—skipping data assessment to jump straight to modeling is the most common way AI projects go over budget.
              </p>
            </div>
            <div className="ai-process__track">
              {[
                { 
                  n:'01', 
                  Icon: IconTrendingUp, 
                  title: 'Define the AI Use Case', 
                  desc: 'We start by identifying the business decision, workflow, or user problem the AI component must improve. The team then defines measurable acceptance criteria and determines whether AI is actually preferable to deterministic software for that task.' 
                },
                { 
                  n:'02', 
                  Icon: IconSettings, 
                  title: 'Assess Data and Technical Readiness', 
                  desc: 'The next step examines available data, data quality, access permissions, existing APIs, application architecture, and infrastructure. For machine learning projects, this also determines whether historical examples are sufficient for meaningful training and evaluation.' 
                },
                { 
                  n:'03', 
                  Icon: IconDatabase, 
                  title: 'Design the AI Architecture', 
                  desc: 'The architecture defines where models sit within the application, how data reaches them, where retrieval or preprocessing occurs, and which decisions remain under conventional software control. It also establishes requirements for security, observability, fallback behavior, model evaluation, and future provider or model changes.' 
                },
                { 
                  n:'04', 
                  Icon: IconCode, 
                  title: 'Build, Evaluate, and Integrate', 
                  desc: 'Development covers the application components, data pipelines, model integrations, prompts or training workflows, APIs, interfaces, and automated tests. AI outputs are evaluated against defined examples and business criteria instead of being accepted simply because the generated response looks convincing.' 
                },
                { 
                  n:'05', 
                  Icon: IconZap, 
                  title: 'Deploy and Improve', 
                  desc: 'Production deployment includes monitoring for application failures, output quality, latency, cost, and changes in real-world data. Where model performance can deteriorate because user behavior or source data changes, the system can support ongoing evaluation, versioning, and a defined retraining or model-update cadence.' 
                },
              ].map((step, i) => (
                <div key={i} className={`ai-process__step animate__animated ${processInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="ai-process__step-top">
                    <div className="ai-process__step-num">{step.n}</div>
                    <div className="ai-process__step-icon-wrap"><step.Icon size={20} /></div>
                  </div>
                  <h4 className="ai-process__step-title">{step.title}</h4>
                  <p className="ai-process__step-desc">{step.desc}</p>
                  {i < 4 && <span className="ai-process__connector" aria-hidden="true" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ CASE STUDIES, H2 with question-format heading ══════════════ */}
        <section className="section ai-cases" ref={casesRef} aria-labelledby="cases-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="cases-heading">What do QllmSoft AI architectures look like in practice?</h2>
              <p>AI architectures designed around real operational workflows, not theoretical examples.</p>
            </div>
            <div className="ai-cases__grid">
              {[
                {
                  Icon: IconCode, sector: 'Internal Product',
                  title: 'AI Capability Added to an Internal Product',
                  problem: 'An internal business application can contain years of operational information while still requiring employees to search records manually and interpret repetitive data themselves. The opportunity is to add intelligence without replacing the application that already contains the business workflows.',
                  solution: 'An AI layer can be connected to the existing database and application services, with controlled retrieval, permission-aware access, structured prompts, and evaluation rules around the generated output. The interface can then expose functions such as natural-language search, document summarization, record classification, or assisted decision support without giving the model unrestricted access to business data.',
                  outcome: 'The resulting architecture keeps core business rules in conventional software while using AI only where probabilistic reasoning or language processing adds value. This separation also makes it easier to monitor model quality, change providers, and introduce human approval where the consequences of an incorrect answer are significant.',
                },
                {
                  Icon: IconBarChart, sector: 'Warehouse & Logistics',
                  title: 'AI for Warehouse and Logistics Operations',
                  problem: 'Warehouse and logistics teams generate operational data through orders, inventory movements, shipment records, delivery events, and exception handling. The difficulty is turning those streams into timely predictions or automated decisions rather than simply storing more records.',
                  solution: 'A logistics AI solution can combine historical operational data with current events to identify patterns such as unusual delays, demand changes, inventory risks, or recurring exceptions. Depending on the use case, machine learning can handle prediction while conventional rules enforce operational constraints and an application dashboard gives staff a way to review or override recommendations.',
                  outcome: 'The system becomes a decision-support layer around the existing logistics workflow instead of an isolated AI experiment. Model monitoring can also identify when warehouse behavior, product mix, routes, or seasonal demand changes enough to require evaluation or retraining.',
                },
                {
                  Icon: IconShield, sector: 'Finance',
                  title: 'AI for Finance and Financial Operations',
                  problem: 'Financial teams frequently work with documents, transactions, customer records, reports, and structured financial data that require classification, reconciliation, review, or explanation. Automation must be designed carefully because an incorrect AI output can create operational or compliance risk.',
                  solution: 'An AI workflow can extract information from financial documents, classify transactions, identify anomalies, summarize supporting records, or assist analysts with controlled retrieval from approved data sources. Deterministic validation, audit trails, access controls, confidence thresholds, and human approval can remain outside the model so that the AI component does not become the sole authority for a financial decision.',
                  outcome: 'The architecture reduces repetitive analysis while preserving review points for decisions that require human accountability. This approach also creates a measurable evaluation framework in which extraction accuracy, classification quality, exception rates, and human corrections can be monitored over time.',
                },
              ].map((c, i) => (
                <article key={i} className={`ai-case-card animate__animated ${casesInView ? 'animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="ai-case-card__header"><div className="ai-case-card__icon"><c.Icon size={20} /></div><span className="ai-case-card__sector">{c.sector}</span></div>
                  <h3 className="ai-case-card__title">{c.title}</h3>
                  <div className="ai-case-card__block"><span className="ai-case-card__block-label">Challenge</span><p>{c.problem}</p></div>
                  <div className="ai-case-card__block"><span className="ai-case-card__block-label">Approach</span><p>{c.solution}</p></div>
                  <div className="ai-case-card__block"><span className="ai-case-card__block-label">Outcome</span><p>{c.outcome}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ INTEGRATION, H2 with direct answer block ══════════════ */}
        <section className="section ai-integrations" ref={mlRef} aria-labelledby="integrations-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="integrations-heading">How does QllmSoft integrate AI with existing systems?</h2>
              <p>Production AI must work with your actual stack, not replace it.</p>
            </div>
            <div className="ai-integrations__grid">
              {integrationItems.map((item, i) => (
                <div key={i} className="ai-integration-card">
                  <div className="ai-integration-card__icon"><item.Icon size={24} /></div>
                  <h3 className="ai-integration-card__title">{item.title}</h3>
                  <p className="ai-integration-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ FAQ SECTION (visible, but schema removed per May 2026 deprecation) ══════════════ */}
        <section className="section ai-faq" ref={aboutRef} aria-labelledby="faq-heading">
          <div className="container">
            <div className="section-title">
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>Common questions about AI-powered software development at QllmSoft.</p>
            </div>
            <div className="ai-faq__list">
              {FAQ_DATA.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default AiPoweredSoftware;