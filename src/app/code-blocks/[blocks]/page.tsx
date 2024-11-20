import ImageGridCarousel from "@/components/code-blocks/ImageGridCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { dialogCode } from "@/lib/const";
import { CodeBlock, dracula } from "@react-email/code-block";

const Page = () => {
  return (
    <div className="w-full">
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4">
          Carousel <span className="text-primary">Dialog</span>
        </h1>{" "}
        <p className="">
          {` A reusable, customizable component built with
          ShadCN and Framer Motion. It displays images in a grid layout
          with smooth animations and supports opening a dialog that contains an
          image carousel for viewing images in a larger, interactive format. Ideal
          for galleries, portfolios, or image collections. It is still work in progress.`}
        </p>
      </div>
      <div className="flex w-full px-4">
        <Tabs
          defaultValue="preview"
          className="w-[90%] md:w-[80%] h-full overflow-auto"
        >
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
            <ScrollArea className="h-[500px] overflow-y-auto p-2 bg-secondary">
              <CodeBlock code={dialogCode} theme={dracula} language="tsx" />
            </ScrollArea>
          </TabsContent>
        </Tabs>{" "}
      </div>
    </div>
  );
};

export default Page;
