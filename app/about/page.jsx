// about-page
"use client";

import { useState } from "react";
import { Menu, X, Users, Lightbulb, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Omar Maulid",
      role: "CEO & Founder",
      image: "/profile2.jpg?height=400&width=400",
    },
    {
      name: "Liwa Watson",
      role: "CTO",
      image: "/profile3.jpg?height=400&width=400",
    },
    {
      name: "Evans Muriungi",
      role: "Lead Developer",
      image: "/profile4.jpg?height=400&width=400",
    },
    {
      name: "Sarah Joshua",
      role: "UX Designer",
      image: "/profile6.jpg?height=400&width=400",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly push the boundaries of what's possible in technology.",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Our clients' success is at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake.",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      {/* Hero Section */}
      <section className="bg-sky-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NextTab</h1>
          <p className="text-xl md:text-2xl mb-8 text-sky-200 max-w-3xl mx-auto">
            Pioneering the future of software engineering with passion,
            innovation, and expertise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Story
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
            <div className="md:w-[800px] m-auto">
              <p className="text-lg mb-6">
                Founded in 2021, NextTab emerged from a vision to revolutionize
                the software engineering landscape. Our journey began with a
                small team of passionate developers, driven by the belief that
                technology could solve complex business challenges and transform
                industries.
              </p>
              <p className="text-lg mb-6">
                Over the years, we've grown into a dynamic force in the tech
                world, delivering cutting-edge solutions to clients across the
                the globe. Our commitment to innovation, quality, and client
                success has been the cornerstone of our growth and reputation.
              </p>
              <p className="text-lg">
                Today, NextTab stands at the forefront of digital
                transformation, continually pushing the boundaries of what's
                possible in software engineering. Our team of expert developers,
                designers, and strategists work tirelessly to turn visionary
                ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-sky-50 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="flex flex-col items-center">
                  <div className="p-2 bg-sky-100 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-center">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="absolute z-10 inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-sky-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What makes NextTab different from other software companies?
              </AccordionTrigger>
              <AccordionContent>
                NextTab stands out due to our innovative approach, expert team,
                and commitment to delivering tailored solutions that drive real
                business value. We combine cutting-edge technology with deep
                industry insights to create software that not only meets but
                exceeds our clients' expectations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How does NextTab ensure the quality of its software?
              </AccordionTrigger>
              <AccordionContent>
                We maintain high quality standards through rigorous testing
                processes, code reviews, and continuous integration practices.
                Our team follows industry best practices and uses the latest
                tools to ensure that every piece of software we deliver is
                robust, secure, and scalable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What industries does NextTab serve?
              </AccordionTrigger>
              <AccordionContent>
                NextTab serves a wide range of industries including finance,
                healthcare, e-commerce, education, and more. Our versatile
                expertise allows us to adapt our solutions to meet the unique
                challenges of various sectors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How does NextTab approach project management?
              </AccordionTrigger>
              <AccordionContent>
                We employ agile methodologies in our project management
                approach, ensuring flexibility, transparency, and continuous
                delivery. This allows us to adapt quickly to changing
                requirements and deliver value to our clients throughout the
                development process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Innovate with Us?
          </h2>
          <p className="text-xl mb-10 text-sky-200 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life and drive your
            business forward with cutting-edge technology.
          </p>
          <Button
            size="lg"
            className="bg-white text-sky-900 hover:bg-sky-100 transition-colors duration-300 text-lg px-8 py-3 rounded-full"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxnawwYNQcVElAvtYUi3yJ9H1itO-Wq0rtuy5iGOn-3CMihw/formResponse",
                "_blank"
              )
            }
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
