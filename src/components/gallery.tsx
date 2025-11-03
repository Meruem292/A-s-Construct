"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { PlaceHolderImages, type ImagePlaceholder } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { FadeIn } from "./fade-in";

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery-"));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<ImagePlaceholder | null>(null);

  return (
    <section id="gallery" className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Project Gallery
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A glimpse into the quality and scale of our completed work.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <FadeIn
              key={image.id}
              delay={idx * 50}
              className={cn(
                idx === 0 && "col-span-2 row-span-2"
              )}
            >
              <div
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-lg group"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-0 shadow-none">
          {selectedImage && (
             <div className="relative aspect-video">
                <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.description}
                    fill
                    className="object-contain"
                    data-ai-hint={selectedImage.imageHint}
                />
             </div>
          )}
           <DialogClose className="absolute -top-2 -right-2 md:-top-4 md:-right-4 rounded-full p-1 bg-background text-foreground opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
