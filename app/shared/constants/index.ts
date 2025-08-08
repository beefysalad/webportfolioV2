const CONSTANTS = {
  LINKS: {
    GITHUB: "https://github.com/beefysalad",
    LINKEDIN: "https://www.linkedin.com/in/john-patrick-ryan-mandal-407bb8270/",
    MAILTO: "mailto:mandal.johnpatrickryan@gmail.com",
  },
  NAVIGATION: {
    NAV_ITEMS: {
      HOME: "home",
      ABOUT: "about",
      EXPERIENCE: "experience",
      EDUCATION: "education",
      PROJECTS: "projects",
      CONTACT: "contact",
    },
    NAV_ITEMS_ARRAY: [
      "home",
      "about",
      "experience",
      "education",
      "projects",
      "contact",
    ],
  },
  ABOUT: {
    TECH: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Node.js",
      "Express",
      "Next.js",
      "Nest.js",
      "PostgreSQL",
      "MongoDB",
    ],
    TECHSTACK_COLORS: {
      JavaScript: "text-yellow-500 border-yellow-500",
      TypeScript: "text-blue-500 border-blue-500",
      React: "text-cyan-400 border-cyan-400",
      Angular: "text-red-500 border-red-500",
      "Node.js": "text-green-500 border-green-500",
      Express: "text-gray-400 border-gray-400",
      "Next.js": "text-gray-200 border-gray-200",
      "Nest.js": "text-pink-500 border-pink-500",
      PostgreSQL: "text-blue-400 border-blue-400",
      MongoDB: "text-green-400 border-green-400",
      default: "text-gray-400 border-gray-400",
    },
  },
  EXPERIENCE: [
    {
      title: "Associate Technical Specialist - Software Engineer",
      company: "Alliance Software Inc.",
      period: "February 2025 - August 2025",
      description:
        "Independently developed and enhanced backend systems, focusing on migrating and modernizing legacy .NET applications to modern API architectures using Apigee and Express.js. Ensured seamless integration, performance optimization, and maintainability.",
      achievements: [
        "Migrated critical backend services from legacy .NET codebases to Apigee-managed APIs and Express.js applications",
        "Refactored outdated business logic for improved performance, scalability, and maintainability",
        "Collaborated with stakeholders to design and implement efficient API endpoints aligned with business requirements",
      ],
    },
    {
      title: "Technical Specialist - Software Engineer",
      company: "Alliance Software Inc.",
      period: "August 2023 - January 2025",
      description:
        "Built, maintained, and migrated diverse client projects using modern web technologies, including major projects for a well-known airline company. Collaborated with design teams to deliver pixel-perfect, high-quality interfaces and ensure optimal performance across applications.",
      achievements: [
        "Migrated legacy systems from 2016 SharePoint sites to SharePoint Online, improving maintainability and performance.",
        "Developed and integrated a custom web part into the SharePoint Online Master Page to extend functionality.",
        "Provided production support and resolved critical issues across multiple deployed applications with minimal downtime.",
        "Upgraded multiple applications to the latest versions of Angular, enhancing stability and security.",
        "Handled bug fixes and implemented enhancements for two booking engine websites of a major airline, ensuring smooth booking experiences for customers.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Sprobe",
      period: "June 2022 - August 2022",
      description:
        "Assisted in building an internal social platform using React and Chakra UI to enhance communication within the company.",
      achievements: [
        "Built and styled reusable UI components with React and Chakra UI.",
        "Integrated basic API calls to display dynamic content in the app.",
        "Fixed minor UI bugs and improved component responsiveness.",
      ],
    },
  ],
  EDUCATION: [
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "Cebu Institute of Technology - University",
      period: "2018-2023",
      description:
        "Graduated with focus on Software Engineering and Web Development",
      coursework: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Development",
        "Hardware Programming",
      ],
    },
  ],
  PROJECTS: [
    // TODO: CHANGE THESE DUMMY DATA TO ACTUAL PROJECT DATA
    {
      title: "TeknoyEMS",
      description:
        "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for data visualization with multiple chart types, real-time updates, and export capabilities.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#",
    },
  ],
};

export default CONSTANTS;
