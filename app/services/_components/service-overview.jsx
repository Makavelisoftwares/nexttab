import { Code, Server, Smartphone, Globe, Shield, Cpu } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development.", description: "Enterprise portals, SaaS platforms, e-commerce storefronts, and SME dashboards — built to scale." },
  { icon: Server, title: "Cloud Solutions.", description: "Mission-critical cloud infrastructure for enterprise workloads and cost-optimised setups for growing businesses." },
  { icon: Smartphone, title: "Mobile Development.", description: "Consumer and enterprise mobile apps for iOS and Android — field tools, commerce apps, and customer portals." },
  { icon: Globe, title: "API Development.", description: "Headless commerce APIs, enterprise system integrations, and third-party connector layers." },
  { icon: Shield, title: "Cybersecurity.", description: "Security audits, compliance hardening, and threat mitigation for regulated industries and enterprise environments." },
  { icon: Cpu, title: "M-Pesa Integration.", description: "Payment flows built for SMEs, commerce platforms, and enterprise billing systems across East Africa." },
];

export const ServiceOverview = () => {
  return (
    <section className="bg-canvas py-20 border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="font-mono text-xs text-mute mb-8">{"// Service catalogue"}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-canvas border border-hairline rounded-[8px] p-6 flex flex-col gap-3"
              style={{ boxShadow: "0px_2px_2px_#0000000a, 0px_8px_8px_-8px_#0000000a" }}
            >
              <div className="p-2 bg-canvas-soft rounded-[6px] w-fit">
                <service.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
              </div>
              <h3
                className="text-[20px] font-semibold text-ink leading-7"
                style={{ letterSpacing: "-0.6px" }}
              >
                {service.title}
              </h3>
              <p className="text-sm text-body leading-5">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
