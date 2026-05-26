"use client";

import { useState } from "react";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-canvas border-b border-hairline py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="font-mono text-xs text-mute mb-5">{"// Stay current"}</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-sm">
            <h2
              className="text-[32px] font-semibold text-ink leading-10 mb-3"
              style={{ letterSpacing: "-1.28px" }}
            >
              Stay ahead of the curve.
            </h2>
            <p className="text-base text-body leading-6">
              Technology insights for founders, CTOs, and enterprise teams — industry trends, engineering best practices, and NextTab updates delivered weekly.
            </p>
          </div>

          {submitted ? (
            <div className="flex items-center gap-2 text-sm font-medium text-body">
              <span className="text-[#0070f3]">✓</span> You're subscribed. Thanks!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 h-10 px-3 text-sm text-ink bg-canvas border border-hairline rounded-[6px] focus:outline-none focus:border-hairline-strong placeholder:text-mute"
              />
              <button
                type="submit"
                className="h-10 px-4 bg-ink text-on-primary text-sm font-medium rounded-[6px] hover:opacity-80 transition-opacity duration-150 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
