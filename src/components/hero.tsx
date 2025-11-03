import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full pt-0 sm:pt-0">
      <div className="absolute inset-0 z-0">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Tomorrow's Smart Home, Today
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          From intelligent lighting to automated gates, we bring your home to life with seamless smart automation, tailored just for you.
        </p>
        <div className="mt-10 flex gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-background/80">
            <Link href="#portfolio">Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
