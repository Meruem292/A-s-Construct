import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./fade-in";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full pt-0 sm:pt-0">
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
        <FadeIn>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Building Your Vision, Brick by Brick
          </h1>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-6 max-w-3xl text-lg text-foreground/90 md:text-xl">
            We deliver top-quality construction services for residential and commercial projects, turning your ideas into reality with precision and passion.
          </p>
        </FadeIn>
        <FadeIn delay={400}>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/80">
              <Link href="#portfolio">Our Work</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
