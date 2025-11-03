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
    title: "Automated Gate & Security",
    category: "Residential Automation",
    description:
      "A comprehensive security and access control system for a private residence, featuring automated gates and integrated surveillance.",
    details:
      "The project involved installing a custom automated gate system with remote access via a mobile app. We integrated this with high-definition security cameras and motion-activated lighting for a complete home security solution.",
  },
  {
    id: "portfolio-2",
    title: "Intelligent Lighting System",
    category: "Commercial Automation",
    description:
      "Deployed a smart, energy-efficient lighting system for a modern office space, reducing energy consumption by 40%.",
    details:
      "We installed a network of sensors and programmable LED fixtures that adjust based on natural light levels and room occupancy. Employees can also control lighting scenes in meeting rooms from a central tablet.",
  },
  {
    id: "portfolio-3",
    title: "Full Smart Home Integration",
    category: "Residential Tech",
    description:
      "Full-scale smart home automation for a luxury residential complex, providing seamless control over lighting, climate, security, and entertainment.",
    details:
      "Our team designed a centralized control system accessible via custom-branded touch panels and a mobile app. The system integrates products from various manufacturers into a single, intuitive user interface, offering residents unparalleled convenience and energy efficiency.",
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
              Smart Automation in Action
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore our portfolio of innovative smart home projects that are shaping the future of living.
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
