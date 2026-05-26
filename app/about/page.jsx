"use client";

import { Users, Lightbulb, Target, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const teamMembers = [
  { name: "Omar Maulid", role: "CEO & Founder", image: "/profile2.jpg" },
  { name: "Liwa Watson", role: "CTO", image: "/profile3.jpg" },
  { name: "Evans Muriungi", role: "Lead Developer", image: "/profile4.jpg" },
  { name: "Sarah Joshua", role: "UX Designer", image: "/profile6.jpg" },
];

const values = [
  { icon: Users, title: "Collaboration.", description: "Teamwork and open communication drive everything we do." },
  { icon: Lightbulb, title: "Innovation.", description: "We constantly push the boundaries of what's possible in technology." },
  { icon: Target, title: "Client-centric.", description: "Our clients' success is at the heart of every decision." },
  { icon: Award, title: "Excellence.", description: "We strive for excellence in every project, every time." },
];

const faqs = [
  {
    q: "What makes NextTab different from other software companies?",
    a: "NextTab stands out due to our innovative approach, expert team, and commitment to delivering tailored solutions that drive real business value. We combine cutting-edge technology with deep industry insights.",
  },
  {
    q: "How does NextTab ensure the quality of its software?",
    a: "We maintain high standards through rigorous testing, code reviews, and continuous integration. Our team follows industry best practices to ensure every product we deliver is robust, secure, and scalable.",
  },
  {
    q: "What industries does NextTab serve?",
    a: "NextTab serves finance, healthcare, e-commerce, education, and more. Our versatile expertise allows us to adapt our solutions to the unique challenges of various sectors.",
  },
  {
    q: "How does NextTab approach project management?",
    a: "We employ agile methodologies — flexibility, transparency, and continuous delivery. This lets us adapt quickly to changing requirements and deliver value throughout the development process.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-canvas-soft border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// Who we are"}</p>
          <h1
            className="text-[48px] md:text-[56px] font-semibold text-ink leading-[1.05] mb-5 max-w-2xl"
            style={{ letterSpacing: "-2.4px" }}
          >
            About NextTab.
          </h1>
          <p className="text-lg text-body leading-7 max-w-lg">
            A software engineering studio serving startups, SMEs, commerce brands, and enterprise organisations — built in Nairobi, trusted worldwide.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-canvas border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// Our story"}</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2
                className="text-[32px] font-semibold text-ink leading-10 mb-8"
                style={{ letterSpacing: "-1.28px" }}
              >
                From a small team of builders to a full-service engineering studio.
              </h2>
            </div>
            <div className="space-y-5">
              <p className="text-base text-body leading-6">
                Founded in 2021, NextTab was built on a simple belief: every business — from an early-stage startup to a large enterprise — deserves access to world-class software engineering. We started with a small team of developers and a clear focus on delivering real business value through technology.
              </p>
              <p className="text-base text-body leading-6">
                Today we serve a diverse range of clients: startups finding product-market fit, SMEs digitising their operations, commerce brands scaling their online presence, and enterprise organisations modernising legacy systems and infrastructure.
              </p>
              <p className="text-base text-body leading-6">
                Across every engagement, our commitment is the same — understand your business deeply, engineer the right solution, and ship it with quality. Our team of developers, architects, and strategists work as an extension of your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-canvas-soft border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// What we stand for"}</p>
          <h2
            className="text-[32px] font-semibold text-ink leading-10 mb-12"
            style={{ letterSpacing: "-1.28px" }}
          >
            Our values.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-canvas border border-hairline rounded-[8px] p-6 flex flex-col gap-4"
                style={{ boxShadow: "0px 2px 2px #0000000a, 0px 8px 8px -8px #0000000a" }}
              >
                <div className="p-2 bg-canvas-soft rounded-[6px] w-fit">
                  <value.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-[20px] font-semibold text-ink leading-7"
                  style={{ letterSpacing: "-0.6px" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm text-body leading-5">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-canvas border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// The team"}</p>
          <h2
            className="text-[32px] font-semibold text-ink leading-10 mb-12"
            style={{ letterSpacing: "-1.28px" }}
          >
            Meet the people behind NextTab.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-3">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-canvas-soft-2 border border-hairline">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{member.name}</p>
                  <p className="text-xs text-mute mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-canvas-soft border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// FAQ"}</p>
          <h2
            className="text-[32px] font-semibold text-ink leading-10 mb-12"
            style={{ letterSpacing: "-1.28px" }}
          >
            Frequently asked questions.
          </h2>
          <Accordion type="single" collapsible className="max-w-2xl space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-canvas border border-hairline rounded-[8px] px-6 data-[state=open]:shadow-[0px_2px_2px_#0000000a,0px_8px_8px_-8px_#0000000a]"
              >
                <AccordionTrigger className="text-left font-semibold text-ink text-[15px] py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-body leading-5 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#171717] py-24">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2
            className="text-[32px] font-semibold text-white leading-10 mb-5 max-w-md mx-auto"
            style={{ letterSpacing: "-1.28px" }}
          >
            Ready to innovate with us?
          </h2>
          <p className="text-base text-white/60 max-w-sm mx-auto mb-10">
            Whether you're launching your first product or scaling an enterprise system — let's scope it together.
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
            Start your project
          </button>
        </div>
      </section>
    </main>
  );
}
