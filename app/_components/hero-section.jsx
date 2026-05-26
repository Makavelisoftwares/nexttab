import Link from "next/link";
import { Globe, Server, Smartphone, Cpu } from "lucide-react";

const meshGradient = [
  "radial-gradient(ellipse 65% 55% at 65% -5%, rgba(0,124,240,0.14) 0%, transparent 100%)",
  "radial-gradient(ellipse 55% 45% at 95% 15%, rgba(0,223,216,0.10) 0%, transparent 100%)",
  "radial-gradient(ellipse 45% 55% at 88% 55%, rgba(121,40,202,0.09) 0%, transparent 100%)",
  "radial-gradient(ellipse 35% 45% at 55% 85%, rgba(255,0,128,0.07) 0%, transparent 100%)",
  "radial-gradient(ellipse 50% 35% at 20% 30%, rgba(249,203,40,0.06) 0%, transparent 100%)",
].join(", ");

const codeLines = [
  { type: "comment", text: "// nexttabsolutions deploy" },
  { type: "key",     text: "✓", suffix: " Compiling client components" },
  { type: "key",     text: "✓", suffix: " Optimising bundle (Next.js 14)" },
  { type: "key",     text: "✓", suffix: " Running build checks" },
  { type: "dim",     text: "" },
  { type: "success", text: "▲  Deployed to Production" },
  { type: "url",     text: "https://nexttabsolutions.com" },
  { type: "dim",     text: "" },
  { type: "dim",     text: "Ready in  892ms" },
];

const capabilityCards = [
  {
    icon: Globe,
    title: "Web & Commerce",
    description: "Enterprise portals · SaaS · Storefronts",
    floatDuration: "4s",
    floatDelay: "0s",
    floatAnim: "nt-float",
  },
  {
    icon: Server,
    title: "Cloud & Infra",
    description: "AWS · Azure · GCP",
    floatDuration: "4.8s",
    floatDelay: "0.6s",
    floatAnim: "nt-float-b",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS · Android · React Native",
    floatDuration: "5.2s",
    floatDelay: "1.1s",
    floatAnim: "nt-float",
  },
  {
    icon: Cpu,
    title: "Payments & Fintech",
    description: "M-Pesa · Stripe · Enterprise billing",
    floatDuration: "4.4s",
    floatDelay: "0.3s",
    floatAnim: "nt-float-b",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative bg-canvas-soft overflow-hidden">
      {/* Mesh gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: meshGradient }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy & CTAs ── */}
          <div>
            {/* Announcement badge */}
            <div className="flex mb-8">
              <span className="inline-flex items-center gap-2 bg-canvas border border-hairline rounded-pill text-sm text-body px-4 py-1 shadow-[0px_1px_1px_#00000005,0px_2px_2px_#0000000a]">
                <span className="font-mono text-xs text-mute">Serving</span>
                <span className="w-px h-3 bg-hairline" />
                Enterprise · Startups · SMEs · Commerce
                <span className="text-mute">→</span>
              </span>
            </div>

            <h1
              className="text-[44px] md:text-[52px] lg:text-[56px] font-semibold leading-[1.05] text-ink mb-6"
              style={{ letterSpacing: "-2.4px" }}
            >
              Software engineering for businesses that mean business.
            </h1>

            <p className="text-lg text-body leading-7 max-w-lg mb-10">
              From fast-moving startups to established enterprises — NextTab
              delivers web, mobile, cloud, and commerce solutions tailored
              to your scale and industry.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center bg-ink text-on-primary font-medium text-base rounded-pill px-6 py-3 hover:opacity-80 transition-opacity duration-150"
              >
                Start your project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-canvas text-ink font-medium text-base rounded-pill px-6 py-3 border border-hairline hover:border-hairline-strong shadow-[0px_1px_1px_#00000005,0px_2px_2px_#0000000a] transition-colors duration-150"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* ── Right: animated visual panel ── */}
          <div
            className="hidden lg:flex flex-col gap-4"
            style={{ animation: "nt-fade-up 0.7s ease-out both" }}
          >
            {/* 2×2 floating capability cards */}
            <div className="grid grid-cols-2 gap-4">
              {capabilityCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-canvas border border-hairline rounded-[8px] p-5 flex flex-col gap-3 shadow-[0px_2px_2px_#0000000a,0px_8px_8px_-8px_#0000000a]"
                  style={{
                    animation: `${card.floatAnim} ${card.floatDuration} ease-in-out ${card.floatDelay} infinite`,
                  }}
                >
                  <div className="p-2 bg-canvas-soft rounded-[6px] w-fit">
                    <card.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink mb-0.5">
                      {card.title}
                    </p>
                    <p className="text-xs text-mute leading-4">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal mockup */}
            <div
              className="rounded-[8px] overflow-hidden border border-hairline shadow-[0px_2px_2px_#0000000a,0px_8px_16px_-4px_#0000000a]"
              style={{ animation: "nt-fade-up 0.9s ease-out 0.2s both" }}
            >
              <div className="bg-[#171717] flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="ml-3 font-mono text-[11px] text-white/40 uppercase tracking-widest">
                  terminal
                </span>
              </div>
              <div className="bg-[#171717] px-5 py-4">
                {codeLines.map((line, i) => (
                  <div key={i} className="font-mono text-[13px] leading-5">
                    {line.type === "comment" && (
                      <span className="text-white/30">{line.text}</span>
                    )}
                    {line.type === "key" && (
                      <span>
                        <span className="text-[#50e3c2]">{line.text}</span>
                        <span className="text-white/70">{line.suffix}</span>
                      </span>
                    )}
                    {line.type === "success" && (
                      <span className="text-white font-medium">{line.text}</span>
                    )}
                    {line.type === "url" && (
                      <span className="text-[#0070f3]">{line.text}</span>
                    )}
                    {line.type === "dim" && (
                      <span className="text-white/20">{line.text || " "}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
