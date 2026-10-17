// QllmSoft Website Mock Data
import docControllerImg from '../assets/document-controller-qllm-soft.webp';
import financeImg from '../assets/qllm-soft-finance-management-system-11.webp';
import hrImg from '../assets/hr.webp';
import portfolioImg from '../assets/portfolio-profile.webp';
import inventory from '../assets/inventory-management .webp';
import digitalmarketing from '../assets/digitalmarketing.webp';
import CustomSoftwareDevelopment from "../assets/Custom-Software.webp";
import MobileAppDevelopment from "../assets/Mobile-app-development.webp";
import CustomWebImg from"../assets/Custom-web-developement.webp";
import APIsoftwareImg from "../assets/api-development.webp";
import systemModernization from "../assets/SystemModernization.webp";
import stickerSmashApp from "../assets/sticker-mobile-app.webp";
import webDesign from "../assets/web-design.webp";
import qllmDocs from "../assets/QllmDocs.webp";
import softwaredevelopmentimg from "../assets/Custom-Software.webp"
import HRMS from "../assets/HUMANResources.jpg"
import FinancialManagement from "../assets/FinancialManagement.jpg"
import Fleetmanagement from "../assets/fleetManagement.jpg"
import inventorymanagement from "../assets/inventorymanagement.jpg"
export const companyInfo = {
  name: "QllmSoft",
  tagline: "Best for your business",
  description: "We specialize in providing custom solutions for web, mobile, and desktop applications to meet your business needs.",
  phone: "+92 334 8229288",
  email: "qllmsoft@gmail.com",
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
  { name: "Contact", path: "/contact" },
  { name: "Write for Us", path: "/write-for-us" }
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
    name: "Custom Software Development",
    description:
      "Tailored enterprise solutions and scalable core software engineered to automate complex workflows and accelerate organizational growth.",
    image: softwaredevelopmentimg,
    link: "/custom-software-development-services"
  },
  {
    id: 2,
    name: "Custom Web Development",
    description:
      "End-to-end modern web applications designed for performance, user experience, and long-term business growth.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/website-development-services"
  },
  
  {
    id: 3,
    name: "Mobile App Development",
    description:
      "High-performance iOS and Android applications crafted with seamless UX and robust functional architecture.",
    image:
      "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/mobile-app-development"
  },
  {
    id: 4,
    name: "API & Enterprise Integration",
    description:
      "Robust RESTful API development and secure third-party integrations to connect your business ecosystem.",
    image:
      "https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/api-development-services"
  },
  {
    id: 5,
    name: "AI Supported Solutions",
    description:
      "Integrating smart automation to optimize workflows and data-driven decision making.",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/ai-powered-software-solutions"
  },
  {
    id: 6,
    name: "Web Design Services",
    description:
      "Modern UI/UX focused website designs crafted to improve engagement, user experience, and brand credibility.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/web-design-services"
  },
  {
    id: 7,
    name: "WordPress Development",
    description:
      "Professional WordPress websites, business portals, and custom theme solutions optimized for speed, SEO, and scalability.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/wordpress-development-services"
  },
  {
    id: 8,
    name: "Digital Marketing & SEO",
    description:
      "SEO, social media marketing, and performance-driven digital campaigns designed to increase visibility and generate leads.",
    image:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "/digital-marketing-services"
  }
];

export const servicesData = [
  {
    id: 1,
    name: "Custom Web Application Development",
    description: "We develop scalable custom web applications using modern cloud technologies. Our solutions include business dashboards, enterprise portals, SaaS platforms, and high-performance web systems built for security and scalability.",
    image: CustomWebImg,
    features: [
      "Modern Front & Backend Frameworks",
      "SaaS platform development",
      "Enterprise web portals",
      "Cloud ready architectures",
      "High performance scalable systems"
    ],
    link: "/web-application-development-services"
  },
  {
    id: 2,
    name: "Web Design & UI/UX Services",
    description: "We create modern, responsive, and user-focused websites with premium UI/UX design principles. Our solutions are optimized for performance, mobile responsiveness, user engagement, and seamless digital experiences across all devices.",
    image: webDesign,
    features: [
      "Modern UI/UX design systems",
      "Fully responsive web layouts",
      "Mobile first user experience",
      "Interactive & conversion-focused interfaces"
    ],
    link: "/responsive-web-design-services"
  },
  {
    id: 3,
    name: "Mobile App Development (iOS & Android)",
    slug: "mobile-app-development",
    description: "Our mobile app development services deliver high performance iOS and Android applications for startups and businesses. We build cross-platform and native mobile apps using modern frameworks such as Flutter and React Native.",
    image: MobileAppDevelopment,
    features: [
      "iOS and Android app development",
      "Cross platform Flutter apps",
      "React Native mobile applications",
      "Secure mobile backend APIs",
      "Performance optimized mobile UI/UX"
    ],
    link: "/mobile-app-development"
  },
  {
    id: 4,
    name: "Enterprise & Custom Software Development",
    slug: "enterprise-custom-software-development",
    description: "We build enterprise-grade software systems including ERP platforms, CRM solutions, and business automation tools. Our enterprise applications are designed for scalability, performance, and seamless integration with existing systems.",
    image: CustomSoftwareDevelopment,
    features: [
      "ERP & CRM software development",
      "Business process automation",
      "Enterprise dashboards",
      "Secure multi-user systems",
      "Integration with third-party tools"
    ],
    link: "/custom-software-development-services"
    
  },
  {
    id: 5,
    name: "API Development & System Integration",
    slug: "api-development-system-integration",
    description: "Our API development services enable seamless communication between web applications, mobile apps, and third-party systems. We build secure REST APIs and integrate external platforms to automate workflows and data synchronization.",
    image: APIsoftwareImg,
    features: [
      "REST/SOAP/GraphQL API development",
      "Third party API integration",
      "Secure authentication systems",
      "Payment gateway integration",
      "Real time data synchronization"
    ],
    link: "/api-development-services"
    
  },
  {
    id: 6,
    name: "Legacy Software Modernization",
    description: "We modernize outdated legacy systems by migrating them to modern architectures such as ASP.NET Core and cloud-ready environments. This improves performance, scalability, and long-term maintainability.",
    image: systemModernization,
    features: [
      "Legacy application migration",
      "ASP.NET Core modernization",
      "Cloud infrastructure migration",
      "Codebase refactoring",
      "Performance optimization"
    ],
    link: "/legacy-software-modernization"

  },
  {
    id: 7,
    name: "Digital Marketing & SEO",
    description: "We help businesses grow their online presence through data-driven digital marketing and SEO strategies. From improving search engine rankings to generating qualified leads, our approach focuses on measurable results and long-term growth.",
    image: CustomSoftwareDevelopment,
    features: [
      "Search engine optimization (SEO)",
      "On page & technical SEO",
      "Keyword research & strategy",
      "Social media marketing",
      "Performance tracking & analytics"
    ],
    link: "/digital-marketing-services"

  }
];

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=85`;

export const projectsData = [
  {
    id: 1,
    slug: "ai-document-management-system",
    image: qllmDocs,
    title: "QllmDocs: AI-Powered Document Management System",
    shape: "orb",
    accent: "#edb702",
    shortDescription: "QllmDocs is QllmSoft's own cloud document management product, bringing secure storage, metadata organization, and AI-powered document search into one workspace.",
    productUrl: "https://qllmdocs.com",
    stack: ["C#", "ASP.NET Core", ".NET 10", "MVC", "EF Core", "SQL Server", "Azure", "AI Chatbot", "RAG"],
    category: "QllmSoft Product | AI & Document Management",
    problem: "Organizations needed a centralized way to securely store, search, and retrieve large volumes of business documents. Traditional document search made it difficult to find relevant information across unstructured files.",
    approach: "QllmSoft created QllmDocs as its own cloud document management product. It combines a centralized repository with structured metadata, category and attribute filters, role-based access, encryption, two-factor authentication, and ASKAI for natural-language and voice search across documents.",
    result: "QllmDocs gives teams one workspace to organize, protect, find, and retrieve business documents. Users can search with metadata filters or ask ASKAI in plain language, then export document metadata to Excel or CSV when needed.",
    listTitle: "Key capabilities:",
    list: ["Centralized cloud document repository", "Structured metadata, categories, and custom tags", "ASKAI natural-language and voice search", "Advanced filtering by document attributes", "Role-based access controls", "Encryption and two-factor authentication", "Excel and CSV metadata export"],
    impact: ["QllmSoft-owned product available at QllmDocs.com", "Documents organized and searchable in one workspace", "AI-assisted retrieval with access controls"],
  },
  {
    id: 2,
    slug: "biometric-attendance-management-system",
    image: img("1563986768609-322da13575f3"),
    title: "Biometric Attendance Management System",
    shape: "gyro",
    accent: "#4299e1",
    shortDescription: "Real-time biometric log processing with configurable shift rules for 1,000+ active users.",
    stack: ["C#", "ASP.NET Core/MVC", "SQL Server", "JavaScript", "Telerik Controls", "Workflow Engine", "GitHub"],
    category: "Workforce Operations",
    problem: "Managing biometric attendance data across a large workforce required continuous processing of attendance logs, complex shift rules, and consistent enforcement of organizational policies.",
    approach: "QllmSoft developed a centralized attendance management platform capable of processing real-time biometric logs for 1,000+ active users. The system included configurable shift rules, automated workflows, attendance calculations, and business-rule enforcement.",
    result: "The system provided a centralized platform for processing biometric attendance data and applying configurable workforce policies across the organization.",
    listTitle: "Key capabilities:",
    list: ["Real-time biometric log processing", "Configurable shift rules", "Automated workflows", "Business-rule enforcement"],
    impact: ["1,000+ active users", "One platform for attendance data", "Configurable workforce policies"],
  },
  {
    id: 3,
    slug: "human-resource-management-system",
    image: HRMS,
    title: "Human Resource Management System (HRMS)",
    shape: "layers",
    accent: "#63b3ed",
    shortDescription: "Position-based employee management, career progression, and integrated HR reporting.",
    stack: ["ASP.NET MVC", "C#", "jQuery", "Telerik Controls", "Entity Framework", "LINQ", "SQL Server", "Microsoft Reporting", "IIS"],
    category: "People Operations",
    problem: "HR teams needed to manage employee information, organizational structures, career progression, and reporting through a unified system instead of maintaining disconnected records.",
    approach: "QllmSoft developed an enterprise HR platform supporting position-based employee management, job progression tracking, organizational hierarchy mapping, and integrated reporting. Entity Framework and LINQ were used for data access and business operations.",
    result: "The platform centralized employee and organizational data while providing structured workflows and reporting capabilities for HR operations.",
    listTitle: "Key capabilities:",
    list: ["Position-based employee management", "Job progression tracking", "Organizational hierarchy mapping", "Integrated reporting"],
    impact: ["Centralized employee data", "Structured HR workflows", "Built-in reporting"],
  },
  {
    id: 4,
    slug: "payroll-management-system",
    image: img("1554224154-26032ffc0d07"),
    title: "Payroll Management System",
    shape: "cube",
    accent: "#edb702",
    shortDescription: "Class and grade-based deductions, branch categorization, and an API layer for integrations.",
    stack: ["ASP.NET MVC/Web API", "C#", "jQuery", "Entity Framework", "LINQ", "SQL Server", "IIS", "Telerik Controls"],
    category: "Payroll & Compliance",
    problem: "Payroll processing involved complex tax deductions, employee classifications, branch-level categorization, and supporting document management.",
    approach: "QllmSoft developed a payroll management platform with a web application and API layer supporting class and grade-based deductions, branch categorization, payroll processing, and file integration with cloud storage services.",
    result: "The platform centralized payroll operations and exposed supporting functionality through APIs for integration with other applications and mobile clients.",
    listTitle: "Key capabilities:",
    list: ["Class and grade-based deductions", "Branch categorization", "Payroll processing", "Cloud storage file integration", "API layer for apps and mobile clients"],
    impact: ["Centralized payroll operations", "API-ready for other applications", "Mobile client support"],
  },
  {
    id: 5,
    slug: "financial-management-system",
    image: FinancialManagement,
    title: "Financial Management System",
    shape: "pyramid",
    accent: "#4299e1",
    shortDescription: "Applicant scoring, automated credit evaluation, dashboards, and audit trails.",
    stack: ["C#", "ASP.NET MVC", "JavaScript", "SQL Server", "Telerik Controls", "Azure"],
    category: "Finance & Audit",
    problem: "Financial organizations needed a structured way to evaluate applicants, manage financial information, and maintain consistent decision-making and audit records.",
    approach: "QllmSoft developed a financial management platform with applicant scoring workflows, automated credit evaluation, financial dashboards, custom reporting, and audit trails.",
    result: "The system provided a centralized workflow for financial evaluation, reporting, and audit tracking.",
    listTitle: "Key capabilities:",
    list: ["Applicant scoring workflows", "Automated credit evaluation", "Financial dashboards", "Custom reporting", "Audit trails"],
    impact: ["Consistent decision-making", "Audit-ready records", "Centralized evaluation workflow"],
  },
  {
    id: 6,
    slug: "logistics-fleet-management-system",
    image: Fleetmanagement,
    title: "Logistics & Fleet Management System",
    shape: "helix",
    accent: "#63b3ed",
    shortDescription: "Shipment tracking, multi-warehouse stock movement, and carrier manifests in one interface.",
    stack: ["C#", "ASP.NET MVC", "Angular", "JavaScript", "SQL Server", "Telerik Controls", "GitHub"],
    category: "Logistics Intelligence",
    problem: "Logistics operations required visibility across shipments, warehouses, inventory movements, and carrier documentation.",
    approach: "QllmSoft developed a logistics management platform supporting shipment tracking, multi-warehouse stock movement, carrier manifests, and inventory monitoring through a centralized web interface.",
    result: "The platform brought shipment and warehouse operations together, providing centralized visibility into logistics activities and inventory movement.",
    listTitle: "Key capabilities:",
    list: ["Shipment tracking", "Multi-warehouse stock movement", "Carrier manifests", "Inventory monitoring"],
    impact: ["Centralized logistics visibility", "Shipments and warehouses together", "Tracked inventory movement"],
  },
  {
    id: 7,
    slug: "inventory-management-system",
    image: inventorymanagement,
    title: "Inventory Management System",
    shape: "cube",
    accent: "#63b3ed",
    shortDescription: "1,000+ SKUs with automated stock records, monitoring, and low-stock alerts.",
    stack: ["C#", "ASP.NET Core", "JavaScript", "SQL Server", "Telerik Controls", "GitHub"],
    category: "Inventory Control",
    problem: "Managing a large product catalog required accurate stock movement tracking and timely identification of inventory shortages.",
    approach: "QllmSoft developed a web-based inventory management system supporting 1,000+ SKUs, automated stock movement records, inventory monitoring, and low-stock alerting.",
    result: "The system provided centralized inventory visibility and automated monitoring of stock levels and movements.",
    listTitle: "Key capabilities:",
    list: ["1,000+ SKU catalog", "Automated stock movement records", "Inventory monitoring", "Low-stock alerting"],
    impact: ["Centralized inventory visibility", "Automated stock monitoring", "Timely shortage alerts"],
  },
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
  heroTitle: "Custom Software Development Company Specializing in ASP.NET & Enterprise Web Applications",
  heroSubtitle: "QllmSoft is a software development company delivering scalable ASP.NET web applications, secure APIs, and modern enterprise systems for startups and businesses worldwide.",
  mainContent: `QllmSoft is a trusted technology partner, delivering advanced web development, mobile app creation, and custom enterprise-level software solutions designed to boost efficiency and accelerate growth. Established in 2015, our mission has been clear, to help businesses adapt, compete, and excel in today's rapidly evolving digital world.

Based in Lalamusa, Gujrat, Pakistan, our team of skilled ASP.NET experts and full-stack developers works tirelessly to craft scalable, secure, and innovative IT solutions. We proudly serve businesses across Pakistan and around the globe, ensuring every project we deliver is tailored to meet unique objectives and drive measurable success.

Our approach centers on long-term partnerships, collaborating closely with clients to develop strategies and solutions that align perfectly with their vision, goals, and market demands.`,
  whatSetsUsApart: `At QllmSoft, we go beyond software development, we create enduring partnerships built on trust, creativity, and measurable outcomes. We start by thoroughly understanding your business's unique challenges, objectives, and future aspirations. This thorough understanding allows us to create personalized software solutions, flexible web platforms, and adaptive mobile apps that meet your present requirements and scale seamlessly as your business evolves.

By leveraging powerful development frameworks like ASP.NET and the latest in web and mobile technologies, we have helped clients in Lalamusa, Gujrat, and across the globe turn complex ideas into high-performance, results-driven digital solutions.`,
  services: [
    {
      title: "Tailored Web & App Development Solutions",
      description: "Every business is unique. We offer custom web, mobile, and software solutions designed to align with your goals, from dynamic websites to robust desktop applications ensuring measurable growth."
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
  vision: "Our vision is to become a trusted global software development company known for building innovative and scalable digital platforms that empower businesses worldwide.",
  mission: "Our mission is to design and deliver secure, scalable, and user-focused software solutions including web applications, enterprise systems, APIs, and cloud-ready platforms."
};

export const projects = [
  {
    id: 1,
    name: "QllmDocs",
    slug: "document-controller",
    description: "Save, Organize, Edit, Retrieve Documents",
    image: qllmDocs,
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
  {
  id: 5,
  name: "Warehouse & Inventory Automation",
  slug: "warehouse-inventory-automation",
  description: "Manage stock, track inventory, automate orders, and optimize warehouse operations",
  image: inventory, // make sure to import the image
  },
  {
    id: 6,
    name: "Sticker Smasher App",
    slug: "sticker-smash-photo-editor-app",
    description: "Sticker Smash is a modern mobile photo editing application that allows users to customize their pictures.",
    image: stickerSmashApp, // make sure to import the image
    }
];

export const trustedPartners = [
  {
    name: "Freelancer",
    logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
    url: "https://www.freelancer.com/u/mrprogrmmr"
  },
  {
    name: "Upwork",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg",
    url: "https://www.upwork.com/freelancers/zainulabedinpk"
  }
];
