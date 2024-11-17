import ImageGridCarousel from "@/components/code-blocks/ImageGridCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dialogCode } from "@/lib/const";
import { CodeBlock, dracula } from "@react-email/code-block";

const Page = () => {
  return (
    <div className="w-full">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-primary">Image Grid Carousel</h1>
        <p className="">
          {` A reusable, customizable component built with
          ShadCN and Framer Motion. It displays images in a grid layout
          with smooth animations and supports opening a dialog that contains an
          image carousel for viewing images in a larger, interactive format. Ideal
          for galleries, portfolios, or image collections.`}
        </p>
      </div>
      <div className="flex w-full px-4">
        <Tabs defaultValue="preview" className="w-[800px] overflow-auto">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <Separator />
          <TabsContent value="preview">
            <div className="p-2 bg-secondary">
              <ImageGridCarousel />
            </div>
          </TabsContent>
          <TabsContent value="code">
            <ScrollArea className="h-[400px] overflow-auto p-2 bg-secondary">
              <CodeBlock code={dialogCode} theme={dracula} language="tsx" />
            </ScrollArea>
          </TabsContent>
        </Tabs>{" "}
      </div>
    </div>
  );
};

export default Page;
