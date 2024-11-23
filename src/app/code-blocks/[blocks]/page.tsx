import ClipboardButton from "@/components/ClipboardButton";
import ImageGridCarousel from "@/components/code-blocks/ImageGridCarousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { carouselDialogCode, dialogCode } from "@/lib/const";
import { CodeBlock, dracula } from "@react-email/code-block";

const CarouselDialogPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">
        Carousel <span className="text-primary">Dialog</span>
      </h1>
      <p>
        {` A reusable, customizable component built with
          ShadCN and Framer Motion. It displays images in a grid layout
          with smooth animations and supports opening a dialog that contains an
          image carousel for viewing images in a larger, interactive format. Ideal
          for galleries, portfolios, or image collections. It is still work in progress.`}
      </p>
      <Tabs
        defaultValue="preview"
        className="mt-2 max-w-[700px] md:max-w-[900px]"
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
          <ScrollArea className="h-[500px]">
            <CodeBlock
              style={{ position: "relative" }}
              code={dialogCode}
              theme={dracula}
              language="tsx"
            />
            <ClipboardButton text={dialogCode} />
          </ScrollArea>
        </TabsContent>
      </Tabs>
      <div className="flex flex-col mt-4">
        <h1 className="text-3xl font-bold mb-2">Usage</h1>
        <p>{`Copy and paste the following code into your project and update the import paths to match your project setup.`}</p>
        <ScrollArea className="h-[500px] max-w-[700px] md:max-w-[900px]">
          <CodeBlock code={carouselDialogCode} theme={dracula} language="tsx" />
          <ClipboardButton text={carouselDialogCode} />
        </ScrollArea>
      </div>
    </div>
  );
};

export default CarouselDialogPage;
