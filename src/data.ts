import { Project, SkillCategory, EducationItem, SocialLink, ContactInfo, AgencyInfo } from "./types";

export const developerProfile = {
  name: "Muhammad Noman Saeed",
  role: "Full Stack Developer | Web Developer | AI Specialist",
  tagline: "Building modern web experiences with clean code and creative solutions.",
  bio: "I am Muhammad Noman Saeed, currently pursuing BS Artificial Intelligence (5th Semester) at IUB. I specialize in Website Development and enjoy creating modern, responsive, and user-friendly web applications. My goal is to continuously improve my development skills and build impactful digital solutions. I am also an active, proud Member and Full Stack Developer at Creative Stack Agency, contributing to real-world technical solutions.",
  avatar: "/src/assets/images/pic.jpg",
  cvUrl: "#", // Standard placeholder for CV download
};

export const creativeStackAgency: AgencyInfo = {
  name: "Creative Stack Agency",
  tagline: "Collaborative Powerhouse of Modern Tech, Elegant Design, & Smart Digital Marketing Solutions",
  roleTitle: "Associate Full-Stack Developer & AI Specialist",
  roleDescription: "In this position, I lead the development of highly interactive frontend layouts, engineer custom backend endpoints, manage relational database integrity, and integrate smart machine learning algorithms. I work side-by-side with senior designers and strategists to deploy commercial web applications with premium fidelity.",
  aboutAgency: "Creative Stack Agency is a premium technical and creative firm comprising specialized professionals who build high-performance products. We empower digital transformations through comprehensive engineering cycles, visual layouts, SEO campaigns, and smart database-backed automation systems.",
  coreServices: [
    "Full-Stack Web & Mobile App Development",
    "UI/UX Design & Architectural Engineering",
    "AI Integration & Intelligent Automation Pipelines",
    "Custom Business Management Portals & CMS Solutions",
    "Search Engine Optimization (SEO) & Lead Generation Engines",
    "Creative Branding & Comprehensive Video Production"
  ],
  keyStats: [
    { value: "50+", label: "Projects Deployed" },
    { value: "15+", label: "Expert Professionals" },
    { value: "100%", label: "Responsive Designs" },
    { value: "98%", label: "Client Satisfaction" }
  ]
};

export const contactInfo: ContactInfo = {
  email: "muhammadnomansaeed62@gmail.com",
  phone: "03261619179",
  whatsapp: "03261619179",
  location: "Dunyapur, Punjab, Pakistan", // Professional location
};

export const educationTimeline: EducationItem[] = [
  {
    degree: "BS Artificial Intelligence",
    institution: "IUB (The Islamia University of Bahawalpur)",
    duration: "2024 - Present",
    semester: "5th Semester",
    description: "Immersive theoretical and practical studies in complex cognitive network models, neural networks, machine learning algorithms, computer vision pipelines, and web engineering integrations.",
    achievements: [
      "Demonstrating consistent academic merit in machine learning and data metrics.",
      "Engineered computer vision signature models and linked them successfully with React web apps.",
      "Acquiring advanced understanding of data warehousing and optimization schemas."
    ]
  },
  {
    degree: "FSC",
    institution: "PGC Dunyapur (Punjab Group of Colleges, Dunyapur)",
    duration: "2022 - 2024",
    description: "Completed Intermediate education with focused training in structural computer architectures, modern algorithmic logic, mathematical theory, and electronic fundamentals.",
    achievements: [
      "Secured prestigious grades under Punjab curriculum guidelines.",
      "Represented the college at regional coding challenges and analytics seminars."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90, icon: "ReactIcon" },
      { name: "Tailwind CSS", level: 95, icon: "Wind" },
      { name: "JavaScript (ES6+)", level: 88, icon: "Cpu" },
      { name: "HTML5", level: 98, icon: "HtmlIcon" },
      { name: "CSS3", level: 92, icon: "CssIcon" },
      { name: "Bootstrap", level: 85, icon: "Layout" }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 82, icon: "Server" },
      { name: "Express.js", level: 85, icon: "Terminal" },
      { name: "Python", level: 88, icon: "Code2" },
      { name: "Flask", level: 80, icon: "Zap" },
      { name: "MySQL", level: 84, icon: "Database" },
      { name: "MongoDB", level: 78, icon: "HardDrive" }
    ]
  },
  {
    title: "Tools & Architectures",
    skills: [
      { name: "Git", level: 90, icon: "GitBranch" },
      { name: "GitHub", level: 92, icon: "Github" },
      { name: "VS Code", level: 95, icon: "Smartphone" },
      { name: "Figma", level: 75, icon: "PenTool" }
    ]
  }
];

export const projectsList: Project[] = [
  {
    id: "ai-signature-verification",
    title: "AI Signature Verification System",
    description: "An advanced desktop and web-based application utilizing Deep Learning (CNN) to verify signatures against forgies, designed for banking and document authentication.",
    longDescription: "This state-of-the-art system was designed to address high-level document forgery. Built using TensorFlow/Keras and OpenCV, it analyzes fine geometrical coordinates and lines of a signature. The backend processes the pre-trained convolutional neural network to output real-time match confidence coefficients.",
    image: "https://picsum.photos/seed/sigverify/600/400",
    tags: ["Python", "Flask", "TensorFlow", "OpenCV", "Machine Learning"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    category: "AI & Web Integration"
  },
  {
    id: "e-commerce-system",
    title: "E-Commerce Website",
    description: "A secure, fully functional online shopping store with a polished customer dashboard, dynamic cart manager, smart product filters, and checkout system.",
    longDescription: "A modern e-commerce application equipped with elegant animation feeds, micro-state persistence, dynamic routing, inventory control systems, and Stripe-like sandbox checkout validation. Designed with extreme responsiveness to guarantee seamless mobile navigation.",
    image: "https://picsum.photos/seed/ecommerce/600/400",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    category: "Full Stack"
  },
  {
    id: "personal-portfolio",
    title: "Animated Premium Portfolio",
    description: "Muhammad Noman Saeed's personal portfolio featuring elegant glassmorphism widgets, interactive particles, dark mode toggler, and detailed GitHub integrations.",
    longDescription: "Built with high performance in mind, this custom layout utilizes a self-rendering canvas canvas particle system, localized Framer Motion gestures, type-simulating scripts, and a localStorage contact inbox manager of outstanding sleekness.",
    image: "https://picsum.photos/seed/portfolio/600/400",
    tags: ["React.js", "Tailwind CSS", "Motion", "Canvas API", "Vite"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    category: "Frontend"
  },
  {
    id: "creative-ops-web",
    title: "Full Stack Business Portal",
    description: "A collaborative portal for modern developer workflows, allowing tasks distribution, dynamic reporting graphs, and agency portfolio showcases.",
    longDescription: "Developed for high-throughput teams, this enterprise app leverages Express backend controllers, MySQL relational indexing, secure sessions, and custom charts rendering statistics with interactive tooltips.",
    image: "https://picsum.photos/seed/creativeops/600/400",
    tags: ["Node.js", "Express.js", "MySQL", "Bootstrap", "EJS/React"],
    liveUrl: "https://github.com/",
    githubUrl: "https://github.com/",
    category: "Full Stack"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-noman-b15968362",
    iconName: "Linkedin",
    color: "hover:bg-[#0077b5] hover:text-white hover:shadow-cyan-500/20"
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/abna_adam0",
    iconName: "Instagram",
    color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:shadow-pink-500/20"
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/share/18pktwAtKH/",
    iconName: "Facebook",
    color: "hover:bg-[#1877f2] hover:text-white hover:shadow-blue-500/20"
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@abnaadam04",
    iconName: "Music2", // Music/TikTok style
    color: "hover:bg-[#010101] hover:text-cyan-400 hover:shadow-cyan-400/20"
  },
  {
    platform: "GitHub",
    url: "https://github.com/",
    iconName: "Github",
    color: "hover:bg-[#24292e] hover:text-white hover:shadow-gray-500/20"
  }
];
