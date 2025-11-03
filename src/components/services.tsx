import { Bot, Lightbulb, Home, DoorOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FadeIn } from "./fade-in";

const services = [
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: "Lighting Fixtures Automation",
    description:
      "Smart lighting solutions to create ambiance, improve security, and save energy in any setting.",
  },
  {
    icon: <DoorOpen className="h-10 w-10 text-accent" />,
    title: "Gate Automation",
    description:
      "Secure and convenient automated gate systems for residential and commercial properties.",
  },
  {
    icon: <Home className="h-10 w-10 text-accent" />,
    title: "Smart Home Integration",
    description:
      "Seamlessly connect and control your home's systems for ultimate comfort and efficiency.",
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: "Industrial Automation",
    description:
      "Implementing advanced robotic systems to streamline operations and boost productivity in industrial settings.",
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
