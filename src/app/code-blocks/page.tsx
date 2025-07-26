import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Zap, Code, Smartphone, Heart, Eye, Users } from "lucide-react";
import Link from "next/link";

const WelcomePage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "No Extra Setup",
      description: "If you've already set up ShadCN, there's nothing more to install. Just copy and paste!"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Polished Animations",
      description: "Components come with smooth, professional animations to enhance the user experience."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Component-Based",
      description: "Modular and reusable components that can be easily customized to suit your needs."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "All components are mobile-first and responsive out of the box."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Open Source",
      description: "Freely available for anyone to use and contribute to."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessible",
      description: "Built with accessibility in mind for a more inclusive user experience."
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              <Eye className="w-4 h-4" />
              Open Source
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            ShadCN Blocks
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            An open-source collection of polished, reusable UI components built on top of ShadCN. 
            Copy, paste, and customize to build beautiful interfaces faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/code-blocks/carousel-dialog">
              <Button size="lg" className="px-8">
                Start Exploring <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">ShadCN Blocks</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern development practices and designed for maximum productivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started Section */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl lg:text-4xl font-bold text-center mb-4">
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                    Prerequisites
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"To get started with ShadCN Blocks, you should have a basic understanding of ReactJS/NextJS and Tailwind CSS. You'll also need a foundational knowledge of ShadCN UI."}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                    Integration
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {"If you're new to ShadCN, explore the official documentation first. Once you're comfortable, you can easily integrate ShadCN Blocks by copying components and pasting them where needed."}
                  </p>
                </div>
              </div>
              
              <div className="lg:pl-8 space-y-4">
                <div className="bg-card/80 rounded-lg p-6 border">
                  <h4 className="font-semibold mb-2 text-primary">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">React</span>
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">Next.js</span>
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">TypeScript</span>
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">Tailwind CSS</span>
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">ShadCN UI</span>
                    <span className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm font-medium">Framer Motion</span>
                  </div>
                </div>
                
                <div className="bg-card/80 rounded-lg p-6 border">
                  <h4 className="font-semibold mb-2 text-primary">Ready to Build?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start exploring our component library and build amazing interfaces in minutes.
                  </p>
                  <Link href="/code-blocks/carousel-dialog">
                    <Button className="w-full">
                      Browse Components <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WelcomePage;
