//contact
"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      {/* Hero Section */}
      <section className="bg-sky-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-200 max-w-3xl mx-auto">
            We're here to answer your questions and discuss how we can help your
            business thrive.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Mail className="w-12 h-12 text-sky-600 mb-4" />
                <CardTitle className="text-xl font-semibold">
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  <a
                    href="mailto:nexttab@gmail.com"
                    className="text-sky-600 hover:underline"
                  >
                    nexttab@gmail.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <Phone className="w-12 h-12 text-sky-600 mb-4" />
                <CardTitle className="text-xl font-semibold">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  <a
                    href="tel:+11234567890"
                    className="text-sky-600 hover:underline"
                  >
                    +254112922255
                  </a>
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <MapPin className="w-12 h-12 text-sky-600 mb-4" />
                <CardTitle className="text-xl font-semibold">
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>Nairobi ,KENYA</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Message subject" required />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white transition-colors duration-300"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31822.188466131308!2d36.8219463!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d43a1b46e1%3A0x7fb8a5f8bbd3ad11!2sNairobi!5e0!3m2!1sen!2ske!4v1631531756798!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="TechNova Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
