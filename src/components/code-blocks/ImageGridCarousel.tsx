"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/carousel-dialog";
import { sampleImages } from "@/lib/const";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const ImageGridCarousel = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <Dialog>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
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
          {sampleImages.map((image, index) => (
            <div key={index}>
              <DialogHeader>
                <div className="p-1 flex flex-col justify-start">
                  <h2 className="text-lg font-bold">{image.title}</h2>
                  <p className="text-sm">{image.description}</p>
                </div>
              </DialogHeader>
              <AspectRatio ratio={4 / 3}>
                <Image src={image.src} alt={image.alt} fill />
              </AspectRatio>
            </div>
          ))}
        </DialogContent>
      )}
    </Dialog>
  );
};

export default ImageGridCarousel;
