"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { sendEmail } from "@/app/actions/contact";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleSubmit = async (data: ContactFormSchema) => {
    try {
      setIsLoading(true);
      const response = await sendEmail(data);
      toast.success("Message sent successfully");
      form.reset();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:emmanuelodii80@gmail.com"
                  className="hover:underline"
                >
                  emmanuelodii80@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <a href="tel:+2347088564380" className="hover:underline">
                  +234-708-856-4380
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span>Rivers Port-Harcourt, Nigeria</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <Controller
                  control={form.control}
                  name="name"
                  render={({ field, fieldState: { error } }) => (
                    <div className="space-y-1">
                      <Input {...field} placeholder="Your Name" />
                      <p
                        className={cn(
                          "text-red-500 text-sm transition-all duration-300 ease-in-out",
                          error ? "max-h-[100px] opacity-100" : "h-0 opacity-0"
                        )}
                      >
                        {error?.message}
                      </p>
                    </div>
                  )}
                />

                <Controller
                  control={form.control}
                  name="email"
                  render={({ field, fieldState: { error } }) => (
                    <div className="space-y-1">
                      <Input {...field} type="email" placeholder="Your Email" />
                      <p
                        className={cn(
                          "text-red-500 text-sm transition-all duration-300 ease-in-out",
                          error ? "max-h-[100px] opacity-100" : "h-0 opacity-0"
                        )}
                      >
                        {error?.message}
                      </p>
                    </div>
                  )}
                />

                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState: { error } }) => (
                    <div className="space-y-1">
                      <Textarea
                        {...field}
                        placeholder="Your Message"
                        rows={4}
                      />
                      <p
                        className={cn(
                          "text-red-500 text-sm transition-all duration-300 ease-in-out",
                          error ? "max-h-[100px] opacity-100" : "h-0 opacity-0"
                        )}
                      >
                        {error?.message}
                      </p>
                    </div>
                  )}
                />

                <Button disabled={isLoading} type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
