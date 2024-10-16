"use client";

import { Code, Server, Smartphone, Globe, Shield, Cpu } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ServiceOverview = () => {
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
      title: "AI & Machine Learning",
      description:
        "Intelligent solutions that leverage the power of AI and ML.",
      details:
        "We harness the potential of artificial intelligence and machine learning to create intelligent systems that drive innovation. Our AI solutions range from predictive analytics and natural language processing to computer vision and deep learning models.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-col items-center">
                <div className="p-2 bg-sky-100 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-sky-600" />
                </div>
                <CardTitle className="text-xl font-semibold text-center">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
