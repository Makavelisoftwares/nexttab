import Link from "next/link";

const meshGradient = [
  "radial-gradient(ellipse 65% 55% at 65% -5%, rgba(0,124,240,0.12) 0%, transparent 100%)",
  "radial-gradient(ellipse 45% 55% at 90% 50%, rgba(121,40,202,0.08) 0%, transparent 100%)",
  "radial-gradient(ellipse 35% 45% at 20% 80%, rgba(249,203,40,0.06) 0%, transparent 100%)",
].join(", ");

export const HeroSection = () => {
  return (
    <section className="relative bg-canvas-soft overflow-hidden border-b border-hairline">
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: meshGradient }} />
      <div className="relative max-w-[1400px] mx-auto px-6 py-24 text-center">
        <p className="font-mono text-xs text-mute mb-5">{"// What we build"}</p>
        <h1
          className="text-[48px] md:text-[56px] font-semibold text-ink leading-[1.05] mb-5 max-w-2xl mx-auto"
          style={{ letterSpacing: "-2.4px" }}
        >
          Solutions engineered for your scale.
        </h1>
        <p className="text-lg text-body leading-7 max-w-lg mx-auto mb-10">
          Whether you're a startup finding product-market fit, an SME digitising operations, a commerce brand scaling online, or an enterprise modernising legacy systems — we build it.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-ink text-on-primary font-medium text-base rounded-pill px-6 py-3 hover:opacity-80 transition-opacity duration-150"
          >
            Get a free consultation
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center bg-canvas text-ink font-medium text-base rounded-pill px-6 py-3 border border-hairline hover:border-hairline-strong shadow-[0px_1px_1px_#00000005,0px_2px_2px_#0000000a] transition-colors duration-150"
          >
            About NextTab
          </Link>
        </div>
      </div>
    </section>
  );
};
