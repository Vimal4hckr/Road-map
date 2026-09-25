export type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: string[];
  code?: string;
  quiz: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const lessons: Record<string, Lesson[]> = {
  html: [
    {
      id: "html-introduction",
      title: "Introduction to HTML",
      description:
        "Understand what HTML is and how a basic HTML document is structured.",
      duration: "15 min",

      content: [
        "HTML stands for HyperText Markup Language.",
        "HTML is used to create the structure of web pages.",
        "A web page is built using HTML elements.",
        "HTML elements are represented using tags.",
        "A typical HTML document contains html, head and body sections.",
      ],

      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>

<body>
    <h1>Hello World</h1>
    <p>Welcome to my website.</p>
</body>

</html>`,

      quiz: [
        {
          question: "What does HTML stand for?",
          options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Multi Language",
            "Home Tool Markup Language",
          ],
          answer: "HyperText Markup Language",
        },

        {
          question: "Which tag contains the visible page content?",
          options: [
            "<head>",
            "<body>",
            "<html>",
            "<title>",
          ],
          answer: "<body>",
        },
      ],
    },

    {
      id: "html-elements",
      title: "HTML Elements",
      description:
        "Learn how HTML elements are created and nested.",
      duration: "20 min",

      content: [
        "HTML elements normally contain an opening tag and closing tag.",
        "Elements can contain text or other HTML elements.",
        "HTML elements can be nested inside one another.",
        "Some elements are void elements and do not need closing tags.",
      ],

      code: `<h1>My Website</h1>

<p>
    This is a paragraph.
</p>

<img src="photo.jpg" alt="My photo">`,

      quiz: [
        {
          question: "Which tag creates a paragraph?",
          options: [
            "<h1>",
            "<p>",
            "<paragraph>",
            "<text>",
          ],
          answer: "<p>",
        },
      ],
    },

    {
      id: "html-forms",
      title: "HTML Forms",
      description:
        "Learn how to collect user input using HTML forms.",
      duration: "25 min",

      content: [
        "Forms are used to collect information from users.",
        "Common form controls include input, textarea, select and button.",
        "Labels improve form accessibility.",
        "Different input types are used for different kinds of data.",
      ],

      code: `<form>

    <label>Name</label>

    <input
        type="text"
        placeholder="Enter your name"
    >

    <button type="submit">
        Submit
    </button>

</form>`,

      quiz: [
        {
          question: "Which element is commonly used to submit a form?",
          options: [
            "<submit>",
            "<button>",
            "<send>",
            "<input-submit>",
          ],
          answer: "<button>",
        },
      ],
    },
  ],

  css: [
    {
      id: "css-introduction",
      title: "Introduction to CSS",
      description:
        "Learn how CSS controls the appearance of HTML elements.",
      duration: "15 min",

      content: [
        "CSS stands for Cascading Style Sheets.",
        "CSS is used to style HTML documents.",
        "CSS can control colors, spacing, typography and layout.",
        "CSS rules contain selectors and declarations.",
      ],

      code: `h1 {
    color: blue;
    font-size: 40px;
}

p {
    color: gray;
}`,

      quiz: [
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets",
          ],
          answer: "Cascading Style Sheets",
        },
      ],
    },

    {
      id: "css-box-model",
      title: "CSS Box Model",
      description:
        "Understand content, padding, border and margin.",
      duration: "20 min",

      content: [
        "Every HTML element can be treated as a box.",
        "The box model contains content, padding, border and margin.",
        "Padding creates space inside the border.",
        "Margin creates space outside the border.",
      ],

      code: `.card {
    width: 300px;
    padding: 20px;
    border: 1px solid black;
    margin: 20px;
}`,

      quiz: [
        {
          question:
            "Which property creates space outside an element?",
          options: [
            "padding",
            "margin",
            "border",
            "spacing",
          ],
          answer: "margin",
        },
      ],
    },

    {
      id: "css-flexbox",
      title: "CSS Flexbox",
      description:
        "Learn how to create flexible one-dimensional layouts.",
      duration: "30 min",

      content: [
        "Flexbox is a CSS layout system.",
        "It is useful for arranging elements in rows or columns.",
        "display: flex activates Flexbox.",
        "justify-content controls the main axis.",
        "align-items controls the cross axis.",
      ],

      code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}`,

      quiz: [
        {
          question:
            "Which property activates Flexbox?",
          options: [
            "display: flex",
            "flex: display",
            "layout: flex",
            "position: flex",
          ],
          answer: "display: flex",
        },
      ],
    },
  ],

  javascript: [
    {
      id: "javascript-introduction",
      title: "Introduction to JavaScript",
      description:
        "Understand what JavaScript is and why it is used on the web.",
      duration: "20 min",

      content: [
        "JavaScript is a programming language used to create interactive web applications.",
        "JavaScript can manipulate HTML and CSS.",
        "JavaScript can respond to user events.",
        "JavaScript can communicate with APIs.",
      ],

      code: `const message = "Hello JavaScript";

console.log(message);`,

      quiz: [
        {
          question:
            "What is JavaScript primarily used for?",
          options: [
            "Creating interactive web applications",
            "Only styling websites",
            "Only creating databases",
            "Only designing images",
          ],
          answer:
            "Creating interactive web applications",
        },
      ],
    },

    {
      id: "javascript-variables",
      title: "Variables",
      description:
        "Learn how JavaScript stores and works with data.",
      duration: "25 min",

      content: [
        "Variables are used to store values.",
        "JavaScript provides let, const and var.",
        "Modern JavaScript generally uses let and const.",
        "const is used when a variable should not be reassigned.",
      ],

      code: `let name = "Vimal";

const age = 25;

console.log(name);
console.log(age);`,

      quiz: [
        {
          question:
            "Which keyword creates a constant variable?",
          options: [
            "let",
            "var",
            "const",
            "constant",
          ],
          answer: "const",
        },
      ],
    },

    {
      id: "javascript-functions",
      title: "Functions",
      description:
        "Learn how to create reusable blocks of JavaScript code.",
      duration: "30 min",

      content: [
        "Functions allow us to organize reusable logic.",
        "Functions can accept parameters.",
        "Functions can return values.",
        "Functions help keep applications modular.",
      ],

      code: `function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);`,

      quiz: [
        {
          question:
            "What keyword is commonly used to define a function?",
          options: [
            "function",
            "method",
            "define",
            "func",
          ],
          answer: "function",
        },
      ],
    },
  ],

  react: [
    {
      id: "react-introduction",
      title: "Introduction to React",
      description:
        "Understand React and component-based development.",
      duration: "20 min",

      content: [
        "React is a JavaScript library for building user interfaces.",
        "React applications are built using components.",
        "Components are reusable pieces of UI.",
        "React uses JSX to describe UI structures.",
      ],

      code: `function Welcome() {
    return <h1>Hello React</h1>;
}

export default Welcome;`,

      quiz: [
        {
          question:
            "React is primarily used to build what?",
          options: [
            "User interfaces",
            "Operating systems",
            "Databases",
            "Network cables",
          ],
          answer: "User interfaces",
        },
      ],
    },

    {
      id: "react-components",
      title: "React Components",
      description:
        "Learn how to create reusable React components.",
      duration: "25 min",

      content: [
        "Components are reusable UI building blocks.",
        "A component usually returns JSX.",
        "Components can receive data using props.",
        "Components can contain other components.",
      ],

      code: `function Button() {
    return (
        <button>
            Click Me
        </button>
    );
}

export default Button;`,

      quiz: [
        {
          question:
            "What is a React component?",
          options: [
            "A reusable UI building block",
            "A database",
            "A CSS file",
            "A server",
          ],
          answer: "A reusable UI building block",
        },
      ],
    },

    {
      id: "react-state",
      title: "React State",
      description:
        "Learn how state allows components to manage changing data.",
      duration: "30 min",

      content: [
        "State represents data that can change inside a component.",
        "React provides the useState hook for managing state.",
        "Updating state causes React to render the component again.",
      ],

      code: `import { useState } from "react";

function Counter() {

    const [count, setCount] =
        useState(0);

    return (
        <button
            onClick={() =>
                setCount(count + 1)
            }
        >
            {count}
        </button>
    );
}`,

      quiz: [
        {
          question:
            "Which hook is commonly used to manage React state?",
          options: [
            "useState",
            "useData",
            "useValue",
            "useComponent",
          ],
          answer: "useState",
        },
      ],
    },
  ],
};