"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { sampleImages } from "@/lib/const";
import { AspectRatio } from "../ui/aspect-ratio";

export default function AnimatedImageGallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null); // Track the selected image id for Dialog

  return (
    <div>
      <Dialog>
        <div className="grid grid-cols-3 gap-1">
          {sampleImages.map((image) => (
            <DialogTrigger
              key={image.title}
              setSelectedId={setSelectedId}
              layoutId={image.title}
            >
              <Image src={image.src} alt={image.alt} width={500} height={500} />
            </DialogTrigger>
          ))}
        </div>

        {selectedId && (
          <DialogContent layoutId={selectedId}>
            <DialogHeader>
              <div className="bg-black/50 p-2 rounded">
                <h2 className="text-xl font-bold text-white">
                  {sampleImages.find((img) => img.title === selectedId)?.title}
                </h2>
                <p className="text-sm text-white">
                  {
                    sampleImages.find((img) => img.title === selectedId)
                      ?.description
                  }
                </p>
              </div>
            </DialogHeader>
            <AspectRatio>
              <Image
                src={
                  sampleImages.find((img) => img.title === selectedId)?.src ||
                  ""
                }
                alt={
                  sampleImages.find((img) => img.title === selectedId)?.alt ||
                  ""
                }
                fill
                className="h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]"
              />
            </AspectRatio>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
