"use client";

import { Code, Server, Smartphone, Globe, Shield, Cpu } from "lucide-react";
import { HeroSection } from "./_components/hero-section";
import { ServiceOverview } from "./_components/service-overview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Enterprise portals, SaaS platforms, and e-commerce storefronts — built to scale.",
    details:
      "We build web solutions for every business size: customer-facing storefronts for commerce brands, SaaS dashboards for startups, internal enterprise portals, and SME management systems. Built with React, Next.js, and Node.js — performant, secure, and maintainable.",
  },
  {
    icon: Server,
    title: "Cloud Solutions",
    description: "Mission-critical cloud infrastructure for enterprise and growing businesses.",
    details:
      "From startup deployments to enterprise-scale multi-region architectures on AWS, Azure, or GCP — we handle design, migration, security hardening, and ongoing cost optimisation. Suitable for regulated industries, high-availability systems, and data-intensive workloads.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Consumer apps, enterprise field tools, and commerce mobile experiences.",
    details:
      "We build iOS and Android apps for startups launching to market, enterprise teams needing field and operations tools, and commerce brands offering mobile-first shopping. Built with React Native and Flutter for native-quality performance across platforms.",
  },
  {
    icon: Globe,
    title: "API Development",
    description: "Headless commerce APIs, enterprise integrations, and third-party connectors.",
    details:
      "We design RESTful and GraphQL APIs that serve as the backbone of your digital ecosystem — powering your commerce stack, connecting enterprise systems (ERP, CRM, supply chain), and exposing clean integrations for partners and third-party platforms.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security audits and compliance hardening for regulated and enterprise environments.",
    details:
      "Critical for enterprise clients in finance, healthcare, and government — our cybersecurity practice covers penetration testing, vulnerability assessments, security architecture review, compliance gap analysis (ISO 27001, PCI-DSS, GDPR), and incident response planning.",
  },
  {
    icon: Cpu,
    title: "M-Pesa Integration",
    description: "Payment flows for commerce, SMEs, and enterprise billing across East Africa.",
    details:
      "We implement M-Pesa STK Push, C2B, B2C, and B2B flows tailored to your business model — whether you're an e-commerce platform collecting payments, an SME managing disbursements, or an enterprise running payroll and supplier settlements.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServiceOverview />

      {/* Detailed tabs */}
      <section className="py-24 bg-canvas-soft border-b border-hairline">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// Deep dive"}</p>
          <h2
            className="text-[32px] font-semibold text-ink leading-10 mb-12"
            style={{ letterSpacing: "-1.28px" }}
          >
            Explore our services.
          </h2>

          <Tabs defaultValue="web-development" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 mb-8 h-auto justify-start">
              {services.map((service) => (
                <TabsTrigger
                  key={service.title}
                  value={service.title.toLowerCase().replace(/\s+/g, "-")}
                  className="rounded-[64px] border border-hairline bg-canvas text-body text-sm font-medium px-4 py-1.5 h-auto data-[state=active]:bg-ink data-[state=active]:text-on-primary data-[state=active]:border-ink"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent
                key={service.title}
                value={service.title.toLowerCase().replace(/\s+/g, "-")}
              >
                <div
                  className="bg-canvas border border-hairline rounded-[8px] p-8 max-w-2xl"
                  style={{ boxShadow: "0px 2px 2px #0000000a, 0px 8px 16px -4px #0000000a" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-canvas-soft rounded-[6px]">
                      <service.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-[20px] font-semibold text-ink"
                      style={{ letterSpacing: "-0.6px" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-mute mb-3">{service.description}</p>
                  <p className="text-base text-body leading-6">{service.details}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className="bg-[#171717] py-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="font-mono text-xs text-white/40 mb-5">{"// Let's work together"}</p>
          <h2
            className="text-[32px] font-semibold text-white leading-10 mb-5 max-w-md mx-auto"
            style={{ letterSpacing: "-1.28px" }}
          >
            Ready to scope your next project?
          </h2>
          <p className="text-base text-white/60 leading-6 max-w-sm mx-auto mb-10">
            Whether you're a startup, an SME, a commerce brand, or an enterprise — let's talk about what you need to build.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdxnawwYNQcVElAvtYUi3yJ9H1itO-Wq0rtuy5iGOn-3CMihw/viewform",
                "_blank"
              )
            }
            className="inline-flex items-center bg-canvas text-ink font-medium text-base rounded-pill px-6 py-3 hover:opacity-90 transition-opacity duration-150"
          >
            Get a free consultation
          </button>
        </div>
      </section>
    </main>
  );
}
