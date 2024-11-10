import React from "react";

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

export const PATHS = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
  "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
  "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
  "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
  "M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787",
  "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
  "M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771",
  "M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763",
  "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
  "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
  "M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739",
  "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
  "M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723",
  "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
  "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
  "M-226 -365C-226 -365 -158 40 306 167C770 294 838 699 838 699",
  "M-219 -373C-219 -373 -151 32 313 159C777 286 845 691 845 691",
  "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
  "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
  "M-198 -397C-198 -397 -130 8 334 135C798 262 866 667 866 667",
  "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
  "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
  "M-177 -421C-177 -421 -109 -16 355 111C819 238 887 643 887 643",
  "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
  "M-163 -437C-163 -437 -95 -32 369 95C833 222 901 627 901 627",
  "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
  "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
  "M-142 -461C-142 -461 -74 -56 390 71C854 198 922 603 922 603",
  "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
  "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
  "M-121 -485C-121 -485 -53 -80 411 47C875 174 943 579 943 579",
  "M-114 -493C-114 -493 -46 -88 418 39C882 166 950 571 950 571",
  "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
  "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
  "M-93 -517C-93 -517 -25 -112 439 15C903 142 971 547 971 547",
  "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
  "M-79 -533C-79 -533 -11 -128 453 -1C917 126 985 531 985 531",
  "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
  "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
  "M-58 -557C-58 -557 10 -152 474 -25C938 102 1006 507 1006 507",
  "M-51 -565C-51 -565 17 -160 481 -33C945 94 1013 499 1013 499",
  "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
  "M-37 -581C-37 -581 31 -176 495 -49C959 78 1027 483 1027 483",
];
