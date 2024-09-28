export interface Project {
  title: string;
  desc: string;
  image: string;
  body: string;
  link: string;
}

export interface ProjectDetailsMap {
  [key: string]: Project;
}

export const projects = [
  {
    date: "22 Feb 2024",
    link: "Acme-EStore",
    title: "Acme EStore",
    description:
      "Utilized Vite and TailwindCSS for rapid development and streamlined styling. Implemented NestJS for a modular, scalable architecture, with high-performance caching and session management using Redis.",
  },
  {
    date: "15 Oct 2023",
    link: "LangBridge",
    title: "LangBridge",
    description:
      "Saas application built using Next.js for its responsive and efficient front-end, Supabase for data storage and management, and Stripe for secure and convenient payment processing.",
  },
  {
    date: "12 Jan 2023",
    link: "Flavorful-Finds",
    title: "Flavorful Finds",
    description:
      "A responsive recipe website using React, Firebase, and Firestore, allowing users to search for, view, and save their favorite recipes with detailed information provided by Spoonacular API",
  },
  {
    date: "22 Aug 2022",
    link: "WebDev-IDE",
    title: "WebDev IDE",
    description:
      "A cross-platform IDE for web development using PyQt in Python, featuring a built-in browser window and support for syntax highlighting in HTML, CSS & Javascript.",
  },
];

export const projectDetails: ProjectDetailsMap = {
  "WebDev-IDE": {
    title: "WebDev IDE",
    desc: `A cross-platform IDE for web development using PyQt in Python, featuring a built-in browser window and support for syntax highlighting in HTML, CSS & Javascript.`,
    image: "/webdev.png",
    body: `WebDev IDE is a powerful and versatile integrated development environment designed specifically for web development. Utilizing PyQt in Python, this cross-platform IDE provides a seamless development experience with a built-in browser window, allowing developers to preview their projects in real-time. The IDE supports syntax highlighting for HTML, CSS, and JavaScript, enhancing code readability and reducing errors. Whether you are developing a simple website or a complex web application, WebDev IDE streamlines your workflow and boosts productivity.`,
    link: "https://github.com/Ashmit-cpp/WebDevIDE",
  },
  LangBridge: {
    title: "LangBridge",
    desc: `Saas application built using Next.js for its responsive and efficient front-end, Supabase for data storage and management, and Stripe for secure and convenient payment processing.`,
    image: "/langbridge.png",
    body: `LangBridge is an innovative SaaS application designed to bridge communication gaps between different languages. The application is built using Next.js, providing a highly responsive and efficient front-end experience. For data storage and management, LangBridge leverages Supabase, ensuring reliable and scalable database solutions. Additionally, the integration with Stripe enables secure and convenient payment processing for users. LangBridge aims to make translation and communication seamless, accessible, and efficient for businesses and individuals alike.`,
    link: "https://github.com/Ashmit-cpp/LangBridge",
  },
  "Acme-EStore": {
    title: "Acme EStore",
    desc: `Utilized Vite and TailwindCSS for rapid development and streamlined styling. Implemented NestJS for a modular, scalable architecture, with high-performance caching and session management using Redis.`,
    image: "/acmemouse.png",
    body: `Acme EStore is a cutting-edge e-commerce platform developed to offer a superior online shopping experience. The project utilized Vite and TailwindCSS, enabling rapid development and streamlined styling, resulting in a visually appealing and user-friendly interface. The backend is powered by NestJS, providing a modular and scalable architecture that can handle extensive traffic and data. High-performance caching and session management are achieved through Redis, ensuring a smooth and responsive user experience. Acme EStore combines modern technologies to deliver a robust, efficient, and scalable online marketplace.`,
    link: "https://github.com/Ashmit-cpp/vite-ecommerce",
  },

  "Flavorful-Finds": {
    title: "Flavorful Finds",
    desc: `A responsive recipe website using React, Firebase, and Firestore, allowing users to search for, view, and save their favorite recipes with detailed information provided by Spoonacular API.`,
    image: "/flavorful-finds.png",
    body: `Flavorful Finds is a responsive and interactive recipe website designed to help users discover and save their favorite recipes. Built with React, the website offers a dynamic and engaging user experience. Firebase and Firestore are used for backend services, providing real-time data synchronization and storage capabilities. Users can search for, view, and save detailed recipe information sourced from the Spoonacular API, which offers a vast collection of recipes with nutritional information, cooking instructions, and more. Flavorful Finds aims to be the ultimate digital cookbook, making it easy for users to explore and enjoy new culinary delights.`,
    link: "https://github.com/Ashmit-cpp/Flavorful-Finds",
  },
};
