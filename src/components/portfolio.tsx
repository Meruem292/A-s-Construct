"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./fade-in";

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "Modern Residential Home",
    category: "Residential Construction",
    description:
      "A ground-up construction of a modern family home, featuring sustainable materials and an open-concept design.",
    details:
      "This project involved a full-cycle construction process from foundation to finishing. We worked closely with the architects to ensure every detail was executed to perfection, delivering a high-quality, energy-efficient home on time and within budget.",
  },
  {
    id: "portfolio-2",
    title: "Commercial Office Complex",
    category: "Commercial Construction",
    description:
      "Development of a state-of-the-art office complex, creating a dynamic and productive workspace for over 500 employees.",
    details:
      "Our team managed the large-scale construction, including structural steelwork, modern glass facades, and complete interior fit-out. The project was completed in phases to allow for early tenant occupancy, showcasing our project management capabilities.",
  },
  {
    id: "portfolio-3",
    title: "Historic Building Renovation",
    category: "Renovation & Restoration",
    description:
      "Sensitive restoration and modernization of a landmark historic building, preserving its heritage while upgrading its facilities.",
    details:
      "This complex renovation required careful preservation of historical elements while integrating modern amenities. We collaborated with conservation specialists to restore the original facade and interiors, successfully blending the old with the new.",
  },
];

type PortfolioItem = (typeof portfolioItems)[0];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Craft in Action
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our portfolio of successfully completed construction projects that stand as a testament to our commitment to quality.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => {
            const image = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <FadeIn key={item.id} delay={index * 100}>
                <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  {image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.category}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => setSelectedItem(item)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      View Project
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedItem && (
            <>
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="font-headline text-2xl">{selectedItem.title}</DialogTitle>
                <DialogDescription>{selectedItem.category}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <PlayCircle className="h-16 w-16 text-muted-foreground/50" />
                   <p className="absolute bottom-2 text-sm text-muted-foreground">Video demonstration coming soon</p>
                </div>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                    <h3 className="font-headline text-lg text-foreground mb-2">Project Details</h3>
                    <p>{selectedItem.details}</p>
                </div>
              </div>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
