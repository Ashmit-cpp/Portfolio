import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { useParams } from "next/navigation";

interface Author {
  name: string;
  role: string;
  image: string;
}

interface Project {
  title: string;
  body: string;
  image: string;
  author: Author;
}

interface ProjectDetailsMap {
  [key: string]: Project;
}

const projectDetails: ProjectDetailsMap = {
  "WebDev-IDE": {
    title: "WebDev IDE",
    body: `A cross-platform IDE for web development using PyQt in Python, featuring a built-in browser window and support for syntax highlighting in HTML, CSS & Javascript.`,
    image:
      "https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png",
    author: {
      name: "Jese Leos",
      role: "Graphic Designer, educator & CEO Flowbite",
      image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
  },
  LangBridge: {
    title: "LangBridge",
    body: `Saas application built using Next.js for its responsive and efficient front-end, Supabase for data storage and management, and Stripe for secure and convenient payment processing.`,
    image: "https://example.com/langbridge-image.png",
    author: {
      name: "Alex Smith",
      role: "Lead Developer, LangBridge",
      image: "https://example.com/profile-alex-smith.jpg",
    },
  },
  "Acme-EStore": {
    title: "Acme EStore",
    body: `Utilized Vite and TailwindCSS for rapid development and streamlined styling. Implemented NestJS for a modular, scalable architecture, with high-performance caching and session management using Redis.`,
    image: "https://example.com/acme-estore-image.png",
    author: {
      name: "Jane Doe",
      role: "Product Manager, Acme E-Store",
      image: "https://example.com/profile-jane-doe.jpg",
    },
  },
  "Flavorful-Finds": {
    title: "Flavorful Finds",
    body: `A responsive recipe website using React, Firebase, and Firestore, allowing users to search for, view, and save their favorite recipes with detailed information provided by Spoonacular API.`,
    image: "https://example.com/flavorful-finds-image.png",
    author: {
      name: "John Doe",
      role: "Culinary Expert",
      image: "https://example.com/profile-john-doe.jpg",
    },
  },
};

function ProjectDetails() {
  const params = useParams<{ myprojects: string }>();

  const project = projectDetails[params.myprojects];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="">
      <ScrollArea className="text-muted-foreground body-font h-[90vh] lg:h-[100vh]">
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <header className="mb-4 lg:mb-6 not-format">
                <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl">
                  {project.title}
                </h1>
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src={project.author.image}
                      alt={project.author.name}
                    />
                    <div>
                      <a href="#" rel="author" className="text-xl font-bold">
                        {project.author.name}
                      </a>
                      <p className="text-base">{project.author.role}</p>
                    </div>
                  </div>
                </address>
              </header>
              <p className="lead">
                {project.body.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </p>
              <figure>
                <img src={project.image} alt="" />
                <figcaption>Digital art by Anonymous</figcaption>
              </figure>
            </article>
          </div>
        </main>
      </ScrollArea>
    </div>
  );
}

export default ProjectDetails;
