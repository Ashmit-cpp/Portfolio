import React from "react";

export interface Project {
  title: string;
  desc: string;
  image: string;
  body: string;
  link: string;
  liveLink: string;
}

export interface ProjectDetailsMap {
  [key: string]: Project;
}

export const projects = [
  {
    date: "01 Aug 2025",
    link: "TypeCode-Tutor",
    title: "TypeCode Tutor",
    description:
      "Interactive code typing practice app inspired by Monkeytype. Allows users to type custom code snippets with live feedback on speed and accuracy.",
  },  
  {
    date: "25 May 2025",
    link: "TaskOrbit",
    title: "TaskOrbit",
    description:
      "Trello-like project management app built using React, Vite, Tailwind CSS v4, and ShadCN-style UI primitives. Features include authentication, drag-and-drop, and E2E testing.",
  },
  
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
  "TypeCode-Tutor": {
  title: "TypeCode Tutor",
  desc: `Interactive code typing practice app inspired by Monkeytype. Allows users to type custom code snippets with live feedback on speed and accuracy.`,
  image: "/typecode.png", // Update with the actual screenshot name
  body: `TypeCode Tutor is a developer-focused typing practice app designed to improve code typing speed and accuracy. Drawing inspiration from Monkeytype, it allows users to input their own code snippets and practice in a distraction-free interface. Built with modern tooling such as React, Vite, and Tailwind CSS, the app provides real-time feedback on typing accuracy and words per minute. The app supports light/dark themes and custom styling, offering an engaging way for developers to improve their muscle memory with real code.`,
  link: "https://github.com/Ashmit-cpp/typecode-tutor", // Replace if different
  liveLink: "https://typecode-tutor.vercel.app/",       // Replace if different
},

  "TaskOrbit": {
    title: "TaskOrbit",
    desc: `Trello-like project management app built using React, Vite, Tailwind CSS v4, and ShadCN-style UI primitives. Features include authentication, drag-and-drop, and E2E testing.`,
    image: "/taskorbit.png", 
    body: `TaskOrbit is a modern, Trello-inspired project management application built with React 19, Vite, and Tailwind CSS v4. It features a full suite of productivity tools including user authentication, responsive drag-and-drop interactions (powered by @hello-pangea/dnd), and intuitive task/list creation via contextual dialogs. Forms are schema-validated using Zod and React Hook Form. It uses Radix UI and ShadCN patterns for accessible custom components and supports theming with a light/dark mode toggle. Notifications are handled using Sonner, and the application is thoroughly tested with Cypress for end-to-end reliability.`,
    link: "https://github.com/Ashmit-cpp/trackier-trello",
    liveLink: "https://taskorbit-trello.vercel.app/",
  },
  "WebDev-IDE": {
    title: "WebDev IDE",
    desc: `A cross-platform IDE for web development using PyQt in Python, featuring a built-in browser window and support for syntax highlighting in HTML, CSS & Javascript.`,
    image: "/webdev.png",
    body: `WebDev IDE is a powerful and versatile integrated development environment designed specifically for web development. Utilizing PyQt in Python, this cross-platform IDE provides a seamless development experience with a built-in browser window, allowing developers to preview their projects in real-time. The IDE supports syntax highlighting for HTML, CSS, and JavaScript, enhancing code readability and reducing errors. Whether you are developing a simple website or a complex web application, WebDev IDE streamlines your workflow and boosts productivity.`,
    link: "https://github.com/Ashmit-cpp/WebDevIDE",  
    liveLink: "https://github.com/Ashmit-cpp/WebDevIDE",
  },
  LangBridge: {
    title: "LangBridge",
    desc: `Saas application built using Next.js for its responsive and efficient front-end, Supabase for data storage and management, and Stripe for secure and convenient payment processing.`,
    image: "/langbridge.png",
    body: `LangBridge is an innovative SaaS application designed to bridge communication gaps between different languages. The application is built using Next.js, providing a highly responsive and efficient front-end experience. For data storage and management, LangBridge leverages Supabase, ensuring reliable and scalable database solutions. Additionally, the integration with Stripe enables secure and convenient payment processing for users. LangBridge aims to make translation and communication seamless, accessible, and efficient for businesses and individuals alike.`,
    link: "https://github.com/Ashmit-cpp/LangBridge",
    liveLink: "https://langbridge.vercel.app/",
  },
  "Acme-EStore": {
    title: "Acme EStore",
    desc: `Utilized Vite and TailwindCSS for rapid development and streamlined styling. Implemented NestJS for a modular, scalable architecture, with high-performance caching and session management using Redis.`,
    image: "/acmemouse.png",
    body: `Acme EStore is a cutting-edge e-commerce platform developed to offer a superior online shopping experience. The project utilized Vite and TailwindCSS, enabling rapid development and streamlined styling, resulting in a visually appealing and user-friendly interface. The backend is powered by NestJS, providing a modular and scalable architecture that can handle extensive traffic and data. High-performance caching and session management are achieved through Redis, ensuring a smooth and responsive user experience. Acme EStore combines modern technologies to deliver a robust, efficient, and scalable online marketplace.`,
    link: "https://github.com/Ashmit-cpp/vite-ecommerce",
    liveLink: "https://acmemouse.vercel.app/",
  },

  "Flavorful-Finds": {
    title: "Flavorful Finds",
    desc: `A responsive recipe website using React, Firebase, and Firestore, allowing users to search for, view, and save their favorite recipes with detailed information provided by Spoonacular API.`,
    image: "/flavorful-finds.png",
    body: `Flavorful Finds is a responsive and interactive recipe website designed to help users discover and save their favorite recipes. Built with React, the website offers a dynamic and engaging user experience. Firebase and Firestore are used for backend services, providing real-time data synchronization and storage capabilities. Users can search for, view, and save detailed recipe information sourced from the Spoonacular API, which offers a vast collection of recipes with nutritional information, cooking instructions, and more. Flavorful Finds aims to be the ultimate digital cookbook, making it easy for users to explore and enjoy new culinary delights.`,
    link: "https://github.com/Ashmit-cpp/Flavorful-Finds",
    liveLink: "https://flavorful-finds.vercel.app/",
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

export const sampleImages = [
  {
    id: "img-001",
    src: "https://images.pexels.com/photos/3219954/pexels-photo-3219954.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 1",
    description: "Sample Image Description 1",
  },
  {
    id: "img-002",
    src: "https://images.pexels.com/photos/2693208/pexels-photo-2693208.png?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 2",
    description: "Sample Image Description 2",
  },
  {
    id: "img-003",
    src: "https://images.pexels.com/photos/1289669/pexels-photo-1289669.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 3",
    description: "Sample Image Description 3",
  },
  {
    id: "img-004",
    src: "https://images.pexels.com/photos/2792258/pexels-photo-2792258.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 4",
    description: "Sample Image Description 4",
  },
  {
    id: "img-005",
    src: "https://images.pexels.com/photos/3705001/pexels-photo-3705001.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 5",
    description: "Sample Image Description 5",
  },
  {
    id: "img-006",
    src: "https://images.pexels.com/photos/2439928/pexels-photo-2439928.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    title: "Image Title 6",
    description: "Sample Image Description 6",
  },
];

export const dialogCode = `export default function ImageGridCarousel() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Dialog>
      <div className="grid grid-cols-3 gap-1">
        {sampleImages.map((image) => (
          <DialogTrigger
            key={image.title}
            setSelectedId={setSelectedId}
            layoutId={image.id}
          >
            <Image src={image.src} alt={image.alt} width={500} height={500} />
          </DialogTrigger>
        ))}
      </div>

      {selectedId && (
        <DialogContent
          layoutId={selectedId}
          initialIndex={sampleImages.findIndex((img) => img.id === selectedId)}
        >
          {sampleImages.map((image) => (
            <>
              <DialogHeader>
                <div className="p-1">
                  <h2 className="text-lg font-bold">{image.title}</h2>
                  <p className="text-sm">{image.description}</p>
                </div>
              </DialogHeader>
              <AspectRatio ratio={4 / 3}>
                <Image src={image.src} alt={image.alt} fill />
              </AspectRatio>
            </>
          ))}
        </DialogContent>
      )}
    </Dialog>
  );
}`;

export const carouselDialogCode = `"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Dialog = DialogPrimitive.Root;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger> & {
    layoutId?: string; // Optional layoutId prop
    setSelectedId: (id: string | null) => void;
  }
>(({ className, layoutId, setSelectedId, ...props }, ref) => {
  const handleClick = () => {
    if (layoutId) {
      setSelectedId(layoutId);
    }
  };

  return (
    <motion.div layoutId={layoutId} onClick={handleClick}>
      <DialogPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
    </motion.div>
  );
});

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  layoutId?: string;
};
const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps & { initialIndex?: number }
>(({ className, children, initialIndex = 0, layoutId, ...props }, ref) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (api && initialIndex >= 0) {
      api.scrollTo(initialIndex);
    }
  }, [api, initialIndex]);

  return (
    <AnimatePresence>
      <DialogPortal>
        <DialogOverlay />
        <Carousel setApi={setApi}>
          <DialogPrimitive.Content
            ref={ref}
            className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] rounded-lg p-1"
            {...props}
          >
            <motion.div
              layoutId={layoutId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "grid gap-4 border bg-background p-3 shadow-lg  sm:rounded-lg",
                className
              )}
            >
              <CarouselContent>
                {/* Automatically wrap children in CarouselItem */}
                {React.Children.map(children, (child) => (
                  <div
                    role="group"
                    aria-roledescription="slide"
                    className="min-w-0 shrink-0 grow-0 basis-full "
                  >
                    {child}
                  </div>
                ))}
              </CarouselContent>{" "}
              <CarouselPrevious />
              <CarouselNext />
            </motion.div>
          </DialogPrimitive.Content>
        </Carousel>
      </DialogPortal>
    </AnimatePresence>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
`;
