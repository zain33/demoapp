/**
 * schema.js — Central Entity, single source of truth
 * ─────────────────────────────────────────────────────────────
 * KORAY / SEMANTIC SEO PRINCIPLE: one Central Entity, one set of
 * facts. Every page imports FROM HERE instead of redefining its
 * own Organization/Founder/Website block. This is what stops
 * Google from seeing "50 projects" on one URL and "200 projects"
 * on another for the same @id.
 *
 * CANONICAL FACTS (update in exactly ONE place if they change):
 */
export const FACTS = {
  foundingYear: 2015,
  yearsExperience: "10+",
  projectsDelivered: "50+",
  globalClients: "50+",
  upworkScore: "100%",
  freelancerRating: "5",
  reviewCount: "47+",
  phone: "+92-334-8229288",
  email: "qllmsoft@gmail.com",
};

export const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://qllmsoft.com/#organization",
  name: "QllmSoft",
  url: "https://qllmsoft.com",
  logo: {
    "@type": "ImageObject",
    url: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo.webp",
    width: 200,
    height: 60,
  },
  image: "https://qllmsoft.com/images/qllmsoft-web-desktop-mobile-app-logo-hd.jpg",
  description:
    "QllmSoft is a custom software development company delivering enterprise web applications, mobile apps, business automation platforms, API integrations, and AI-powered software for clients worldwide since 2015.",
  foundingDate: `${FACTS.foundingYear}-01-01`,
  telephone: FACTS.phone,
  email: FACTS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "H # 181, Camping Ground",
    addressLocality: "Lalamusa",
    addressRegion: "Punjab",
    postalCode: "50350",
    addressCountry: "PK",
  },
  founder: { "@id": "https://qllmsoft.com/#founder" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  knowsAbout: [
    "Custom Software Development",
    "Enterprise Web Application Development",
    "Mobile App Development",
    "Business Process Automation",
    "AI-Powered Software Solutions",
    "API Development",
    "Cloud Solutions",
    "Software Outsourcing",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: FACTS.freelancerRating,
    reviewCount: FACTS.reviewCount.replace("+", ""),
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.linkedin.com/company/qllmsoft",
    "https://www.freelancer.com/u/mrprogrmmr",
    "https://www.upwork.com/freelancers/~0170e20f8803389a86",
  ],
};

export const schemaFounder = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://qllmsoft.com/#founder",
  name: "Zain Ul Abedin",
  jobTitle: "Founder & CEO",
  worksFor: { "@id": "https://qllmsoft.com/#organization" },
  url: "https://www.linkedin.com/in/zain-ul-abedin-b09a613b/",
  sameAs: ["https://www.linkedin.com/in/zain-ul-abedin-b09a613b/"],
};

export const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://qllmsoft.com/#website",
  url: "https://qllmsoft.com",
  name: "QllmSoft",
  publisher: { "@id": "https://qllmsoft.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://qllmsoft.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/** Helper: consistent BreadcrumbList so every page doesn't hand-roll its own */
export const buildBreadcrumb = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

/** Helper: build a Service schema that always points back at the ONE organization @id */
export const buildServiceSchema = ({ id, name, description, offers, url }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": id,
  name,
  provider: { "@id": "https://qllmsoft.com/#organization" },
  areaServed: { "@type": "Place", name: "Worldwide" },
  serviceType: name,
  description,
  url,
  ...(offers && {
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${name} Catalog`,
      itemListElement: offers.map((o) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: o.name, url: o.url },
      })),
    },
  }),
});

/** Helper: FAQPage — only ever call this on ONE page per distinct question set */
export const buildFAQSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});
