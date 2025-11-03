"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Building, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/actions";
import { contactFormSchema } from "@/lib/schemas";
import { FadeIn } from "./fade-in";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const result = await submitContactForm(values);
    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Have a project in mind? Let's talk. Fill out the form below or reach out to us directly.
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
                  <p className="text-muted-foreground">(123) 456-7890</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary"/>
               </div>
               <div>
                  <h3 className="font-headline text-lg font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">contact@constructview.com</p>
               </div>
             </div>
             <div className="flex items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                  <Building className="w-6 h-6 text-primary"/>
               </div>
               <div>
                  <h3 className="font-headline text-lg font-semibold">Our Office</h3>
                  <p className="text-muted-foreground">123 Construction Ave, Metropolis</p>
               </div>
             </div>
          </FadeIn>
          <FadeIn delay={200} className="md:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
