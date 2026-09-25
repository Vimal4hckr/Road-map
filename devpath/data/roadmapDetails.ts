export type RoadmapNode = {
  id: string;
  title: string;
  description: string;
  topics: string[];
  type?: "start" | "normal" | "milestone";
};

export type RoadmapDetails = {
  title: string;
  slug: string;
  description: string;
  level: string;
  duration: string;
  topics: number;
  nodes: RoadmapNode[];
};

export const roadmapDetails: Record<string, RoadmapDetails> = {
  "frontend-developer": {
    title: "Frontend Developer",
    slug: "frontend-developer",
    description:
      "Learn everything you need to become a modern frontend developer, from HTML and CSS to JavaScript, React and deployment.",
    level: "Beginner",
    duration: "4-6 months",
    topics: 32,

    nodes: [
      {
        id: "internet",
        title: "Internet",
        description:
          "Understand how the internet works before learning frontend development.",
        topics: [
          "How the Internet Works",
          "HTTP / HTTPS",
          "Browsers",
          "DNS",
          "Hosting",
          "Web Servers",
        ],
        type: "start",
      },

      {
        id: "html",
        title: "HTML",
        description:
          "Learn the structure and semantics of modern web pages.",
        topics: [
          "HTML Basics",
          "Elements",
          "Attributes",
          "Forms",
          "Tables",
          "Semantic HTML",
          "Accessibility",
        ],
      },

      {
        id: "css",
        title: "CSS",
        description:
          "Learn how to style and create responsive web interfaces.",
        topics: [
          "Selectors",
          "Box Model",
          "Colors",
          "Typography",
          "Flexbox",
          "Grid",
          "Responsive Design",
          "Animations",
        ],
      },

      {
        id: "javascript",
        title: "JavaScript",
        description:
          "Learn programming fundamentals and modern JavaScript for the web.",
        topics: [
          "Variables",
          "Data Types",
          "Functions",
          "Arrays",
          "Objects",
          "DOM",
          "Events",
          "Async JavaScript",
          "Fetch API",
          "ES6+",
        ],
      },

      {
        id: "git",
        title: "Git & GitHub",
        description:
          "Learn version control and professional collaboration workflows.",
        topics: [
          "Git Basics",
          "Repositories",
          "Branches",
          "Commits",
          "Merge",
          "Pull Requests",
          "GitHub",
        ],
      },

      {
        id: "typescript",
        title: "TypeScript",
        description:
          "Add type safety and better developer tooling to JavaScript applications.",
        topics: [
          "Types",
          "Interfaces",
          "Functions",
          "Generics",
          "Type Narrowing",
          "Advanced Types",
        ],
      },

      {
        id: "react",
        title: "React",
        description:
          "Build modern component-based frontend applications.",
        topics: [
          "Components",
          "JSX",
          "Props",
          "State",
          "Hooks",
          "Forms",
          "Context",
          "API Integration",
        ],
        type: "milestone",
      },

      {
        id: "nextjs",
        title: "Next.js",
        description:
          "Learn modern full-featured React development using Next.js.",
        topics: [
          "App Router",
          "Layouts",
          "Pages",
          "Server Components",
          "Client Components",
          "API Routes",
          "Metadata",
        ],
      },

      {
        id: "testing",
        title: "Testing",
        description:
          "Learn how to test frontend applications and maintain code quality.",
        topics: [
          "Unit Testing",
          "Integration Testing",
          "Jest",
          "Testing Library",
          "End-to-End Testing",
        ],
      },

      {
        id: "projects",
        title: "Projects",
        description:
          "Build real projects to apply everything you have learned.",
        topics: [
          "Portfolio Website",
          "Weather Application",
          "Task Manager",
          "E-commerce UI",
          "Dashboard",
          "Full Stack Application",
        ],
        type: "milestone",
      },

      {
        id: "deployment",
        title: "Deployment",
        description:
          "Learn how to publish your applications for real users.",
        topics: [
          "Production Builds",
          "Environment Variables",
          "Domains",
          "Hosting",
          "CI/CD",
          "Performance",
        ],
        type: "milestone",
      },
    ],
  },

  "backend-developer": {
    title: "Backend Developer",
    slug: "backend-developer",
    description:
      "Learn servers, APIs, databases, authentication, security and deployment.",
    level: "Intermediate",
    duration: "5-7 months",
    topics: 38,

    nodes: [
      {
        id: "internet",
        title: "Internet",
        description:
          "Understand networking fundamentals required for backend development.",
        topics: [
          "HTTP",
          "HTTPS",
          "DNS",
          "TCP/IP",
          "Request / Response",
        ],
        type: "start",
      },
      {
        id: "programming",
        title: "Programming",
        description:
          "Build strong programming fundamentals.",
        topics: [
          "Variables",
          "Conditions",
          "Loops",
          "Functions",
          "OOP",
          "Data Structures",
        ],
      },
      {
        id: "git",
        title: "Git & GitHub",
        description:
          "Learn version control and collaboration.",
        topics: [
          "Git",
          "GitHub",
          "Branches",
          "Pull Requests",
          "Merge",
        ],
      },
      {
        id: "nodejs",
        title: "Node.js",
        description:
          "Build server-side applications using JavaScript.",
        topics: [
          "Node.js",
          "NPM",
          "Modules",
          "File System",
          "Async Programming",
        ],
        type: "milestone",
      },
      {
        id: "express",
        title: "Express.js",
        description:
          "Create REST APIs and backend applications.",
        topics: [
          "Routes",
          "Middleware",
          "Controllers",
          "REST API",
          "Error Handling",
        ],
      },
      {
        id: "database",
        title: "Databases",
        description:
          "Learn relational and NoSQL database systems.",
        topics: [
          "SQL",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Database Design",
        ],
      },
      {
        id: "authentication",
        title: "Authentication",
        description:
          "Build secure user authentication systems.",
        topics: [
          "Sessions",
          "JWT",
          "OAuth",
          "Passwords",
          "Authorization",
        ],
      },
      {
        id: "deployment",
        title: "Deployment",
        description:
          "Deploy backend applications to production.",
        topics: [
          "Linux",
          "Docker",
          "Cloud",
          "CI/CD",
          "Monitoring",
        ],
        type: "milestone",
      },
    ],
  },
};