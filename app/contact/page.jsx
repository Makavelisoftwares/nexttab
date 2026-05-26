"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, title: "Email", value: "nexttab@gmail.com", href: "mailto:nexttab@gmail.com" },
  { icon: Phone, title: "Phone", value: "+254 112 922 255", href: "tel:+254112922255" },
  { icon: MapPin, title: "Office", value: "Nairobi, Kenya", href: "#" },
];

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-canvas-soft border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs text-mute mb-5">{"// Reach out"}</p>
          <h1
            className="text-[48px] md:text-[56px] font-semibold text-ink leading-[1.05] mb-5 max-w-lg"
            style={{ letterSpacing: "-2.4px" }}
          >
            Let's build something together.
          </h1>
          <p className="text-lg text-body leading-7 max-w-md">
            Whether you're a startup founder, an SME owner, a commerce operator, or an enterprise CTO — we're ready to scope your next project and get it built.
          </p>
        </div>
      </section>

      {/* Contact info row */}
      <section className="bg-canvas border-b border-hairline py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-canvas border border-hairline rounded-[8px] p-6 flex items-start gap-4"
                style={{ boxShadow: "0px 1px 1px #00000005, 0px 2px 2px #0000000a" }}
              >
                <div className="p-2 bg-canvas-soft rounded-[6px] shrink-0">
                  <item.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-mono text-xs text-mute mb-1 uppercase tracking-widest">{item.title}</p>
                  <a href={item.href} className="text-sm font-medium text-ink hover:text-link transition-colors duration-150">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="bg-canvas-soft border-b border-hairline py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <p className="font-mono text-xs text-mute mb-5">{"// Send a message"}</p>
              <h2
                className="text-[32px] font-semibold text-ink leading-10 mb-8"
                style={{ letterSpacing: "-1.28px" }}
              >
                Tell us about your project.
              </h2>
              <form
                onSubmit={handleSubmit}
                className="bg-canvas border border-hairline rounded-[8px] p-7 space-y-4"
                style={{ boxShadow: "0px 2px 2px #0000000a, 0px 8px 16px -4px #0000000a" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-ink">Name</label>
                    <input
                      id="name"
                      placeholder="Your name"
                      required
                      className="w-full h-10 px-3 text-sm text-ink bg-canvas border border-hairline rounded-[6px] focus:outline-none focus:border-hairline-strong placeholder:text-mute"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-ink">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full h-10 px-3 text-sm text-ink bg-canvas border border-hairline rounded-[6px] focus:outline-none focus:border-hairline-strong placeholder:text-mute"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-ink">Subject</label>
                  <input
                    id="subject"
                    placeholder="What's this about?"
                    required
                    className="w-full h-10 px-3 text-sm text-ink bg-canvas border border-hairline rounded-[6px] focus:outline-none focus:border-hairline-strong placeholder:text-mute"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-ink">Message</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                    className="w-full px-3 py-2.5 text-sm text-ink bg-canvas border border-hairline rounded-[6px] focus:outline-none focus:border-hairline-strong placeholder:text-mute resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-ink text-on-primary font-medium text-sm rounded-pill px-5 py-2.5 hover:opacity-80 transition-opacity duration-150"
                >
                  Send message <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-5">
              <p className="font-mono text-xs text-mute">{"// Our location"}</p>
              <div className="flex-1 rounded-[8px] overflow-hidden border border-hairline" style={{ minHeight: "320px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31822.188466131308!2d36.8219463!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d43a1b46e1%3A0x7fb8a5f8bbd3ad11!2sNairobi!5e0!3m2!1sen!2ske!4v1631531756798!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block", minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  title="NextTab Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
