"use client";
import ClipboardButton from "@/components/ClipboardButton";
import ImageGridCarousel from "@/components/code-blocks/ImageGridCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { carouselDialogCode, dialogCode } from "@/lib/const";
import { CodeBlock, dracula } from "@react-email/code-block";
import { ArrowLeft, Code2, Eye, Copy, Zap, Component } from "lucide-react";
import { useRouter } from "next/navigation";

const CarouselDialogPage = () => {
  const router = useRouter();

  return (
    <ScrollArea className="h-[80vh] md:h-[100vh]">
      <div className="min-h-screen">
        {/* Header Section */}
        <div className="py-8 px-6 lg:px-12 border-b border-border/20">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.push("/code-blocks")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Components
              </Button>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Component className="w-4 h-4" />
                  ShadCN Component
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                  <Zap className="w-3 h-3" />
                  React
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                  TypeScript
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Carousel <span className="text-primary">Dialog</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
                {"A reusable, customizable component built with ShadCN and Framer Motion. It displays images in a grid layout with smooth animations and supports opening a dialog that contains an image carousel for viewing images in a larger, interactive format."}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Component Preview & Code */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card/50 to-muted/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <Tabs defaultValue="preview" className="w-full">
                  <div className="p-8 pb-0">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                      <h2 className="text-3xl font-bold">Component Preview</h2>
                      <TabsList className="grid w-full sm:w-auto grid-cols-2">
                        <TabsTrigger value="preview" className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Preview
                        </TabsTrigger>
                        <TabsTrigger value="code" className="flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Code
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </div>

                  <TabsContent value="preview" className="mt-0">
                    <div className="p-8 pt-4">
                      <div className="bg-secondary/50 rounded-xl p-8 border border-border/20">
                        <ImageGridCarousel />
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="code" className="mt-0">
                    <div className="p-8 pt-4">
                      <div className="relative">
                        <ScrollArea className="h-[500px] w-full rounded-xl border border-border/20 bg-[#282a36] p-4">
                          <CodeBlock
                            code={dialogCode}
                            theme={dracula}
                            language="tsx"
                          />
                        </ScrollArea>
                        <div className="absolute top-4 right-4 z-10">
                          <ClipboardButton text={dialogCode} />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Usage Instructions */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card/30 to-muted/10 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Installation & Usage</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      {"Copy and paste the following code into your project and update the import paths to match your project setup."}
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <Copy className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">1. Copy Code</h3>
                      <p className="text-sm text-muted-foreground">
                        {"Copy the component code from below"}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <Component className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">2. Update Imports</h3>
                      <p className="text-sm text-muted-foreground">
                        {"Adjust import paths for your setup"}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">3. Use Component</h3>
                      <p className="text-sm text-muted-foreground">
                        {"Start using in your project"}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <ScrollArea className="h-[500px] w-full rounded-xl border border-border/20 bg-[#282a36] p-6">
                                             <CodeBlock 
                         code={carouselDialogCode} 
                         theme={dracula} 
                         language="tsx"
                       />
                    </ScrollArea>
                    <div className="absolute top-4 right-4 z-10">
                      <ClipboardButton text={carouselDialogCode} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features & Benefits */}
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Component Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border/20">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Responsive Grid</h3>
                    <p className="text-sm text-muted-foreground">
                      {"Automatically adapts to different screen sizes"}
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border/20">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Smooth Animations</h3>
                    <p className="text-sm text-muted-foreground">
                      {"Built with Framer Motion for fluid transitions"}
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-xl bg-background/50 border border-border/20">
                    <Component className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Customizable</h3>
                    <p className="text-sm text-muted-foreground">
                      {"Easy to customize and extend for your needs"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default CarouselDialogPage;
