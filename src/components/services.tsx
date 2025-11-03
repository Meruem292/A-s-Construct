import { Building, HardHat, Wrench, Bot } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const services = [
  {
    icon: <Building className="h-10 w-10 text-accent" />,
    title: "Commercial Construction",
    description:
      "Building large-scale commercial properties from the ground up, tailored to your business needs.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-accent" />,
    title: "Residential Construction",
    description:
      "Crafting high-quality custom homes and residential complexes with attention to detail and craftsmanship.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-accent" />,
    title: "Renovations & Remodeling",
    description:
      "Transforming existing spaces with modern upgrades, historic restorations, and functional improvements.",
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: "Automation & Robotic Systems",
    description:
      "Implementing advanced automation to streamline operations and boost productivity in industrial and commercial settings.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We provide a comprehensive range of construction and automation services.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 100}>
              <Card className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  {service.icon}
                  <CardTitle className="font-headline text-xl mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
