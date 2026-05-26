import { Code, Server, Smartphone, Globe, Shield, Cpu } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "Web development.",
    description:
      "Custom web platforms for e-commerce, SaaS, enterprise portals, and SME dashboards — built to scale from day one.",
  },
  {
    icon: Server,
    title: "Cloud solutions.",
    description:
      "Enterprise-grade cloud infrastructure on AWS, Azure, or GCP — architecture, migration, security, and cost optimisation.",
  },
  {
    icon: Smartphone,
    title: "Mobile development.",
    description:
      "iOS and Android apps for startups launching fast and enterprises reaching customers on every device.",
  },
  {
    icon: Globe,
    title: "API development.",
    description:
      "Robust, documented APIs that connect your systems, power your commerce stack, and integrate with third-party platforms.",
  },
  {
    icon: Shield,
    title: "Cybersecurity.",
    description:
      "Penetration testing, vulnerability assessments, and compliance hardening — critical for enterprise and regulated industries.",
  },
  {
    icon: Cpu,
    title: "M-Pesa integration.",
    description:
      "Seamless M-Pesa payment flows for commerce and SMEs — collections, disbursements, and full reconciliation.",
  },
];

export const Services = () => {
  return (
    <section className="bg-canvas py-24 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Eyebrow */}
        <p className="font-mono text-xs text-mute mb-5">{"// Our expertise"}</p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2
            className="text-[32px] font-semibold text-ink leading-10 max-w-sm"
            style={{ letterSpacing: "-1.28px" }}
          >
            End-to-end solutions for every business.
          </h2>
          <Link
            href="/services"
            className="text-sm font-medium text-link hover:text-link-deep transition-colors duration-150 shrink-0 underline underline-offset-2"
          >
            View all services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-canvas border border-hairline rounded-[8px] p-6 flex flex-col gap-4"
              style={{
                boxShadow:
                  "0px 2px 2px #0000000a, 0px 8px 8px -8px #0000000a, inset 0 0 0 1px transparent",
              }}
            >
              <div className="p-2 bg-canvas-soft rounded-[6px] w-fit">
                <service.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
              </div>
              <div>
                <h3
                  className="text-[20px] font-semibold text-ink mb-2 leading-7"
                  style={{ letterSpacing: "-0.6px" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-body leading-5">{service.description}</p>
              </div>
              <Link
                href="/services"
                className="mt-auto text-sm font-medium text-link hover:text-link-deep underline underline-offset-2 transition-colors duration-150"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
