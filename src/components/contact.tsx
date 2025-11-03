"use client";

import { Building, Facebook, Phone, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "./fade-in";

export default function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a project in mind? Let's talk. Reach out to us directly or visit our office.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn className="md:col-span-1 space-y-6">
             <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary"/>
               </div>
               <div>
                  <h3 className="font-headline text-lg font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">0946-615-7868</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Facebook className="w-6 h-6 text-primary"/>
               </div>
               <div>
                  <h3 className="font-headline text-lg font-semibold">Message me</h3>
                  <Link href="https://www.facebook.com/ariel.romero.99324" target="_blank" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                    Ariel Romero
                    <LinkIcon className="w-4 h-4"/>
                  </Link>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                  <Building className="w-6 h-6 text-primary"/>
               </div>
               <div>
                  <h3 className="font-headline text-lg font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">San Luis 1 Dasmariñas City Cavite</p>
               </div>
             </div>
          </FadeIn>
          <FadeIn delay={200} className="md:col-span-2">
            <Card className="shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.770932263032!2d120.95408587483486!3d14.38260798608053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3eb813deef5%3A0xc63b156715878cb1!2sSan%20Luis%201%20Rd%2C%20Dasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1724610173295!5m2!1sen!2sph" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
