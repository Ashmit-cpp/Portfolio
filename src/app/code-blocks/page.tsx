import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full md:w-[90%] lg:w-[80%] flex-col  p-6">
      <header className="text-left">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to <span className="text-primary">ShadCN Blocks</span>
        </h1>
        <p className="text-lg">
          ShadCN Blocks is an open-source collection of polished, reusable UI
          components built on top of ShadCN
        </p>
      </header>

      <main className="mt-8  text-left">
        <div>
          <h2 className="text-2xl font-semibold text-secondary-foreground ">
            Key Features
          </h2>
          <ul className="mt-4 list-disc list-inside text-left space-y-2">
            <li>
              <strong className="text-secondary-foreground">
                No Extra Setup:
              </strong>{" "}
              {`If you’ve already set up ShadCN, there’s nothing more to install.
              Just copy and paste!`}
            </li>
            <li>
              <strong className="text-secondary-foreground">
                Polished Animations:
              </strong>{" "}
              Components come with smooth, professional animations to enhance
              the user experience.
            </li>
            <li>
              <strong className="text-secondary-foreground">
                Component-Based:
              </strong>{" "}
              Modular and reusable components that can be easily customized to
              suit your needs.
            </li>
            <li>
              <strong className="text-secondary-foreground">
                Responsive Design:
              </strong>{" "}
              All components are mobile-first and responsive out of the box.
            </li>
            <li>
              <strong className="text-secondary-foreground">
                Open Source:
              </strong>{" "}
              Freely available for anyone to use and contribute to.
            </li>
            <li>
              <strong className="text-secondary-foreground">Accessible:</strong>{" "}
              Built with accessibility in mind for a more inclusive user
              experience.
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-secondary-foreground ">
            Getting Started
          </h2>
          <p className="mt-4 leading-relaxed">
            {`To get started with ShadCN Blocks, you should have a basic
            understanding of ReactJS/NextJS and Tailwind CSS. You’ll also need a
            foundational knowledge of ShadCN UI.`}
          </p>
          <p className="mt-4 leading-relaxed">
            {`If you’re new to ShadCN, you can explore the official ShadCN UI
            documentation to get familiar with its components and setup process.
            Once you're comfortable, you can easily integrate ShadCN Blocks into
            your project by copying the components and pasting them where
            needed.`}
          </p>
        </div>
      </main>

      <div className="mt-4 w-full flex justify-center md:justify-end">
        <Link href="/code-blocks/carousel-dialog">
          <Button>
            Start Exploring <ChevronRight />
          </Button>
        </Link>
      </div>

      {/* <footer className="mt-12 text-sm text-gray-500">
        <p>© 2024 ShadCN Blocks. Open Source and Free to Use.</p>
      </footer> */}
    </div>
  );
};

export default WelcomePage;
