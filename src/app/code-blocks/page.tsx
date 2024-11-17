import ImageGallery from "@/components/code-blocks/ImageGallery";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-bold mb-6 p-2">Animated Image Gallery</h1>
      <div className="size-[500px]">
        <ImageGallery />
      </div>
    </div>
  );
};

export default Page;
