//services
"use client";
import { Code, Server, Smartphone, Globe, Shield, Cpu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroSection } from "./_components/hero-section";
import { ServiceOverview } from "./_components/service-overview";

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications tailored to your business needs.",
      details:
        "Our web development services encompass everything from responsive websites to complex web applications. We use cutting-edge technologies like React, Next.js, and Node.js to build scalable, high-performance solutions that drive your business forward.",
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure for your applications.",
      details:
        "We leverage cloud technologies to build robust, secure, and scalable infrastructures. Our expertise in AWS, Azure, and Google Cloud allows us to design and implement cloud solutions that optimize your operations and reduce costs.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Intuitive and powerful mobile experiences for iOS and Android.",
      details:
        "Our mobile development team creates engaging, high-performance apps for iOS and Android platforms. We use React Native and Flutter to build cross-platform applications that provide native-like experiences while reducing development time and costs.",
    },
    {
      icon: Globe,
      title: "API Development",
      description: "Robust and scalable APIs to power your digital ecosystem.",
      details:
        "We design and develop RESTful and GraphQL APIs that serve as the backbone of your digital infrastructure. Our APIs are built with scalability, security, and performance in mind, ensuring seamless integration across your applications.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets.",
      details:
        "Our cybersecurity services provide end-to-end protection for your digital infrastructure. From penetration testing and vulnerability assessments to implementing robust security protocols, we ensure your data and systems are safeguarded against evolving threats.",
    },
    {
      icon: Cpu,
      title: "Mpesa Intergration",
      description: "Mpesa transactions directed to your personal accounts.",
      details:
        "We harness the potential of mpesa intergration for our local clients to seamlessly transact and manage their businesses",
    },
  ];

  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview */}
      <ServiceOverview />

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Our Services
          </h2>
          <Tabs
            defaultValue={services[0].title.toLowerCase().replace(/\s+/g, "-")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              {services.map((service, index) => (
                <TabsTrigger
                  key={index}
                  value={service.title.toLowerCase().replace(/\s+/g, "-")}
                  className="text-sm md:text-base"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {services.map((service, index) => (
              <TabsContent
                className="mt-24"
                key={index}
                value={service.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <service.icon className="w-6 h-6 mr-2 text-sky-600" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{service.details}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl mb-10 text-sky-200 max-w-2xl mx-auto">
            Let's discuss how our services can drive innovation and growth for
            your company.
          </p>
          <Button
            size="lg"
            className="bg-white text-sky-900 hover:bg-sky-100 transition-colors duration-300 text-lg px-8 py-3 rounded-full"
            onClick={() =>
              window.open("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxnawwYNQcVElAvtYUi3yJ9H1itO-Wq0rtuy5iGOn-3CMihw/formResponse", "_blank")
            }
          >
            Get a Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
