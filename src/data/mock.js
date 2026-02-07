// QllmSoft Website Mock Data
import docControllerImg from '../assets/document-controller-qllm-soft.webp';
import financeImg from '../assets/qllm-soft-finance-management-system-11.webp';
import hrImg from '../assets/hr.webp';
import portfolioImg from '../assets/portfolio-profile.webp';
export const companyInfo = {
  name: "QllmSoft",
  tagline: "Best for your business",
  description: "We specialize in providing custom solutions for web, mobile, and desktop applications to meet your business needs.",
  phone: "+92 334 8229288",
  email: "info@qllmsoft.com",
  address: "H # 181, Camping Ground, Lalamusa, Pakistan",
  whatsappLink: "https://wa.me/923348229288?text=Hi%20QllmSoft,%20I%27d%20like%20to%20discuss%20a%20project!",
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/qllmsoft/",
    facebook: "https://www.facebook.com/qllmsoft/",
    instagram: "https://www.instagram.com/qllmsoft/",
    youtube:  "https://www.youtube.com/@QllmSoft",
    twitter:  "https://x.com/qllmsoft"
  },
  founded: "2015",
  location: "Lalamusa, Gujrat, Pakistan"
};

export const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" }
];

export const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80",
    title: "QllmSoft",
    subtitle: "Best for your business",
    ctaText: "Learn More",
    ctaLink: "/about"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    title: "Custom Software Solutions",
    subtitle: "Tailored for your success",
    ctaText: "Our Services",
    ctaLink: "/services"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80",
    title: "Web & Mobile Development",
    subtitle: "Transform your ideas into reality",
    ctaText: "View Projects",
    ctaLink: "/projects"
  }
];

export const homeServices = [
  {
    id: 1,
    name: "Web Applications",
    description: "We are expert in crafting and managing web applications with sleek interfaces and powerful back-end solutions.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    link: "/services"
  },
  {
    id: 2,
    name: "Desktop Applications",
    description: "Building dynamic desktop applications for you that optimize workflows and can elevate your business performance.",
    image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=600&q=80",
    link: "/services"
  },
  {
    id: 3,
    name: "Mobile Applications",
    description: "Designing sleek and user-friendly mobile apps for you that captivate your audience and can elevate your brand.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    link: "/services"
  },
  {
    id: 4,
    name: "API Development Services",
    description: "At QllmSoft, we build powerful APIs that streamline your systems and enable seamless integrations.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    link: "/services"
  }
];

export const servicesData = [
  {
    id: 1,
    name: "Custom Web Application Development",
    description: "Our web application development services transform complex workflows into intuitive, browser-based platforms. We build high-availability portals that offer seamless performance across all devices.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    features: [
      "Cloud-native scalability for high traffic.",
      "Intuitive UX to reduce training costs.",
      "Rapid deployment via Agile methodologies."
    ]
  },
  {
    id: 2,
    name: "Mobile App Development (iOS & Android)",
    description: "Strategic mobile app development services focused on business-critical tools. We specialize in cross-platform and native solutions that prioritize security and user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    features: [
      "Offline-first capabilities for field teams.",
      "Biometric security and data encryption.",
      "High-performance Flutter & React Native builds."
    ]
  },
  {
    id: 3,
    name: "Enterprise & Custom Software Development",
    description: "We architect robust enterprise software development solutions, including ERP, CRM, and HRMS platforms designed to centralize business intelligence and operational control.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    features: [
      "Granular role-based access control (RBAC).",
      "Scalable architecture for global deployments.",
      "Modular design for long-term maintainability."
    ]
  },
  {
    id: 4,
    name: "API Development & System Integration",
    description: "Eliminate silos with our API development services. We create secure REST/GraphQL layers that enable real-time data synchronization between your disparate software tools.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    features: [
      "Secure third-party API orchestration.",
      "Automated cross-platform data mapping.",
      "Reduced manual entry and data duplication."
    ]
  },
  {
    id: 5,
    name: "Legacy Software Modernization",
    description: "Future-proof your investment through legacy application modernization. We transition outdated systems to modern frameworks, eliminating technical debt without disrupting core operations.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    features: [
      "Codebase refactoring for 2x performance.",
      "Cloud migration (AWS/Azure/GCP).",
      "Modern UI/UX skins for legacy logic."
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Finance Management System",
    description: "An intelligent financial platform for SMEs featuring budgeting, real-time analytics, expense tracking, and integration with QuickBooks & Xero—built with .NET Core and Angular.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    technologies: [".NET Core", "Angular"]
  },
  {
    id: 2,
    title: "Document Controller – Secure & Intelligent DMS",
    description: "A robust document management system that centralizes storage, controls access, tracks versions, and automates workflows for improved compliance and collaboration.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    technologies: ["Cloud", "API Integration"]
  },
  {
    id: 3,
    title: "HR Management System",
    description: "An all-in-one HR platform automating payroll, attendance, leave management, and performance reviews—designed for efficiency, compliance, and employee engagement.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    technologies: ["API Services", "Cloud"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Custom portfolio websites with responsive layouts, modern design, image grids, carousels, and SEO optimization—perfect for professionals and creatives to showcase their work.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
    technologies: ["Responsive Design", "SEO Optimization"]
  },
  {
    id: 5,
    title: "Warehouse & Inventory Automation",
    description: "We help factories digitize and control their warehouse operations based on how their business already works — not generic software. Our warehouse automation solutions are designed around your existing SOPs.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    technologies: ["Custom Software", "Automation"]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Why Custom Software is the Future?",
    description: "Discover why custom software development is the future of business innovation and how it can transform your operations.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80",
    date: "January 15, 2026",
    category: "Technology Trends",
    slug: "why-custom-software-is-the-future"
  },
  {
    id: 2,
    title: "Top 5 Tools for Agile Teams",
    description: "Empower your dev process with these powerful tools that streamline collaboration and boost productivity.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    date: "January 12, 2026",
    category: "Development",
    slug: "top-5-tools-for-agile-teams"
  },
  {
    id: 3,
    title: "How We Build Secure Web Apps",
    description: "Security is a priority at QllmSoft. Here's how we approach building secure, robust web applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    date: "January 10, 2026",
    category: "Security",
    slug: "how-we-build-secure-web-apps"
  },
  {
    id: 4,
    title: "GitHub Actions vs Azure DevOps: Which CI/CD Tool Should You Choose?",
    description: "In today's fast-moving software development world, automating your build, test, and deployment process isn't optional.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    date: "January 8, 2026",
    category: "DevOps",
    slug: "github-actions-vs-azure-devops"
  },
  {
    id: 5,
    title: "How Local Businesses in Pakistan Can Go Global",
    description: "In an increasingly connected world, Pakistani businesses no longer need to be limited to local markets.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    date: "January 5, 2026",
    category: "Business",
    slug: "local-businesses-go-global"
  },
  {
    id: 6,
    title: "What Makes a Great Mobile App in 2026?",
    description: "Learn what defines a great mobile app in 2026. Explore how UX, performance, and AI shape user engagement.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    date: "January 3, 2026",
    category: "Mobile Development",
    slug: "what-makes-a-great-mobile-app"
  }
];

export const aboutContent = {
  heroTitle: "Empowering Businesses with Smart Digital Solutions",
  heroSubtitle: "Explore our specialized services in API development, software modernization, and enterprise-grade web apps—crafted for scalability, performance, and impact.",
  mainContent: `QllmSoft is a trusted technology partner, delivering advanced web development, mobile app creation, and custom enterprise-level software solutions designed to boost efficiency and accelerate growth. Established in 2015, our mission has been clear, to help businesses adapt, compete, and excel in today's rapidly evolving digital world.

Based in Lalamusa, Gujrat, Pakistan, our team of skilled ASP.NET experts and full-stack developers works tirelessly to craft scalable, secure, and innovative IT solutions. We proudly serve businesses across Pakistan and around the globe, ensuring every project we deliver is tailored to meet unique objectives and drive measurable success.

Our approach centers on long-term partnerships, collaborating closely with clients to develop strategies and solutions that align perfectly with their vision, goals, and market demands.`,
  whatSetsUsApart: `At QllmSoft, we go beyond software development, we create enduring partnerships built on trust, creativity, and measurable outcomes. We start by thoroughly understanding your business's unique challenges, objectives, and future aspirations. This thorough understanding allows us to create personalized software solutions, flexible web platforms, and adaptive mobile apps that meet your present requirements and scale seamlessly as your business evolves.

By leveraging powerful development frameworks like ASP.NET and the latest in web and mobile technologies, we have helped clients in Lalamusa, Gujrat, and across the globe turn complex ideas into high-performance, results-driven digital solutions.`,
  services: [
    {
      title: "Tailored Web & App Development Solutions",
      description: "Every business is unique. We offer custom web, mobile, and software solutions designed to align with your goals, from dynamic websites to robust desktop applications — ensuring measurable growth."
    },
    {
      title: "Global Experience with Local Expertise",
      description: "Proudly based in Lalamusa, Gujrat, Pakistan, we blend international standards with local market insights, delivering solutions for clients across various industries worldwide."
    },
    {
      title: "Expert Web and Mobile Development Team",
      description: "Our ASP.NET specialists and full-stack developers use cutting-edge tools to create secure, scalable, and reliable applications that meet the highest industry standards."
    },
    {
      title: "Personalized Attention with an Agile Team",
      description: "As a small, agile team, we provide direct communication, faster turnaround, and highly personalized service without unnecessary bureaucracy."
    },
    {
      title: "Reliable and Efficient Solutions",
      description: "We are problem-solvers at heart — focused on delivering solutions that last, whether you need a high-performance website, a powerful mobile app, or a custom software product."
    },
    {
      title: "Continuous Support & Maintenance",
      description: "We provide ongoing support and maintenance services to ensure your software stays up-to-date, secure, and performs optimally as your business evolves."
    }
  ],
  vision: "We aim to grow into a trusted global name in intelligent, innovative, and sustainable digital solutions. Our goal is to build a connected world where technology supports human growth, strengthens businesses, and unlocks new possibilities for everyone.",
  mission: "Our mission is to design, develop, and deliver secure, scalable, and user-friendly digital products that align perfectly with our clients' business goals. Whether it's a web application, enterprise-level system, or mobile app, we create solutions that inspire growth and innovation."
};

export const projects = [
  {
    id: 1,
    name: "Document Controller",
    slug: "document-controller",
    description: "Save, Organize, Edit, Retrieve Documents",
    image: docControllerImg,
  },
  {
    id: 2,
    name: "Finance Management System",
    slug: "finance-management-system",
    description: "Finance, Income/Expenses, Automation",
    image: financeImg,
  },
  {
    id: 3,
    name: "HR Management",
    slug: "hr-management",
    description: "Finance, HR, Industrial",
    image: hrImg,
  },
  {
    id: 4,
    name: "Portfolio Website",
    slug: "portfolio-website",
    description: "Professional Profile, Personal Website",
    image: portfolioImg,
  },
];

export const trustedPartners = [
  {
    name: "Freelancer",
    logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg"
  },
  {
    name: "Upwork",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg"
  }
];
