export type TopicDetails = {
  title: string;
  roadmap: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  concepts: string[];
  subtopics: {
    title: string;
    description: string;
  }[];
  resources: {
    title: string;
    type: string;
  }[];
  practice: string[];
};

export const topicDetails: Record<string, TopicDetails> = {

  html: {
    title: "HTML",
    roadmap: "frontend-developer",
    description:
      "Learn HTML and understand how web pages are structured using semantic and accessible markup.",
    difficulty: "Beginner",
    estimatedTime: "2-3 weeks",

    concepts: [
      "HTML document structure",
      "Elements and attributes",
      "Semantic HTML",
      "Forms",
      "Tables",
      "Accessibility",
    ],

    subtopics: [
      {
        title: "HTML Basics",
        description:
          "Understand HTML documents, elements, tags and attributes.",
      },
      {
        title: "Semantic HTML",
        description:
          "Learn how semantic elements improve structure, accessibility and SEO.",
      },
      {
        title: "Forms",
        description:
          "Build forms using inputs, labels, buttons and validation.",
      },
      {
        title: "Accessibility",
        description:
          "Learn how to create websites that can be used by everyone.",
      },
    ],

    resources: [
      {
        title: "HTML Documentation",
        type: "Documentation",
      },
      {
        title: "HTML Reference",
        type: "Reference",
      },
      {
        title: "HTML Practice",
        type: "Practice",
      },
    ],

    practice: [
      "Create a personal profile page",
      "Build a registration form",
      "Create a product table",
      "Build a semantic blog page",
    ],
  },

  css: {
    title: "CSS",
    roadmap: "frontend-developer",
    description:
      "Learn how to style websites, create responsive layouts and build modern interfaces.",
    difficulty: "Beginner",
    estimatedTime: "3-4 weeks",

    concepts: [
      "Selectors",
      "Box Model",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "Animations",
    ],

    subtopics: [
      {
        title: "Selectors",
        description:
          "Learn how to target HTML elements using CSS selectors.",
      },
      {
        title: "Box Model",
        description:
          "Understand content, padding, border and margin.",
      },
      {
        title: "Flexbox",
        description:
          "Create flexible one-dimensional layouts.",
      },
      {
        title: "CSS Grid",
        description:
          "Build powerful two-dimensional layouts.",
      },
      {
        title: "Responsive Design",
        description:
          "Create websites that work across mobile, tablet and desktop.",
      },
    ],

    resources: [
      {
        title: "CSS Documentation",
        type: "Documentation",
      },
      {
        title: "Flexbox Guide",
        type: "Guide",
      },
      {
        title: "Grid Guide",
        type: "Guide",
      },
    ],

    practice: [
      "Build a responsive landing page",
      "Create a navigation bar",
      "Build a dashboard layout",
      "Create a responsive portfolio",
    ],
  },

  javascript: {
    title: "JavaScript",
    roadmap: "frontend-developer",
    description:
      "Learn JavaScript programming and use it to create interactive web applications.",
    difficulty: "Beginner",
    estimatedTime: "5-8 weeks",

    concepts: [
      "Variables",
      "Data Types",
      "Functions",
      "Arrays",
      "Objects",
      "DOM",
      "Events",
      "Async JavaScript",
    ],

    subtopics: [
      {
        title: "JavaScript Fundamentals",
        description:
          "Learn variables, operators, conditions and loops.",
      },
      {
        title: "Functions",
        description:
          "Understand functions, parameters, return values and scope.",
      },
      {
        title: "Arrays and Objects",
        description:
          "Work with collections of data and structured objects.",
      },
      {
        title: "DOM Manipulation",
        description:
          "Use JavaScript to dynamically change web pages.",
      },
      {
        title: "Async JavaScript",
        description:
          "Learn promises, async/await and API requests.",
      },
    ],

    resources: [
      {
        title: "JavaScript Documentation",
        type: "Documentation",
      },
      {
        title: "JavaScript Guide",
        type: "Guide",
      },
      {
        title: "JavaScript Exercises",
        type: "Practice",
      },
    ],

    practice: [
      "Build a calculator",
      "Build a Todo application",
      "Create a weather application",
      "Build a quiz application",
      "Consume a public API",
    ],
  },

  react: {
    title: "React",
    roadmap: "frontend-developer",
    description:
      "Learn React and build modern component-based frontend applications.",
    difficulty: "Intermediate",
    estimatedTime: "4-6 weeks",

    concepts: [
      "Components",
      "JSX",
      "Props",
      "State",
      "Hooks",
      "Forms",
      "Context",
      "API Integration",
    ],

    subtopics: [
      {
        title: "Components",
        description:
          "Learn how to split applications into reusable components.",
      },
      {
        title: "Props",
        description:
          "Pass data between React components.",
      },
      {
        title: "State",
        description:
          "Manage changing application data using state.",
      },
      {
        title: "Hooks",
        description:
          "Learn useState, useEffect and other React hooks.",
      },
      {
        title: "API Integration",
        description:
          "Connect React applications to backend APIs.",
      },
    ],

    resources: [
      {
        title: "React Documentation",
        type: "Documentation",
      },
      {
        title: "React Learn",
        type: "Course",
      },
      {
        title: "React Exercises",
        type: "Practice",
      },
    ],

    practice: [
      "Build a Todo application",
      "Build a movie application",
      "Create a dashboard",
      "Build an e-commerce interface",
    ],
  },

  git: {
    title: "Git & GitHub",
    roadmap: "frontend-developer",
    description:
      "Learn version control and how professional developers collaborate using Git and GitHub.",
    difficulty: "Beginner",
    estimatedTime: "1-2 weeks",

    concepts: [
      "Repositories",
      "Commits",
      "Branches",
      "Merge",
      "Pull Requests",
      "Remote Repositories",
    ],

    subtopics: [
      {
        title: "Git Basics",
        description:
          "Understand repositories, commits and the Git workflow.",
      },
      {
        title: "Branches",
        description:
          "Work on multiple features without affecting the main branch.",
      },
      {
        title: "GitHub",
        description:
          "Host repositories and collaborate with other developers.",
      },
      {
        title: "Pull Requests",
        description:
          "Submit and review changes professionally.",
      },
    ],

    resources: [
      {
        title: "Git Documentation",
        type: "Documentation",
      },
      {
        title: "GitHub Docs",
        type: "Documentation",
      },
    ],

    practice: [
      "Create a Git repository",
      "Create and merge branches",
      "Push a project to GitHub",
      "Create a pull request",
    ],
  },
};