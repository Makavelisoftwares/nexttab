"use client";

const featureLines = [
  {
    label: "Stack",
    value: "Laravel · Adonisjs · Spring Boot · Django · Chi",
  },
  { label: "Deploy", value: "Vercel · AWS · GCP" },
  { label: "Mobile", value: "React Native · Flutter" },
  { label: "Payments", value: "M-Pesa · Stripe" },
  { label: "Status", value: "Production ✓" },
];

export const CTA = () => {
  return (
    <section className="bg-[#171717] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="font-mono text-xs text-white/40 mb-5">
              {"// Your technology partner"}
            </p>
            <h2
              className="text-[32px] font-semibold text-white leading-10 mb-5"
              style={{ letterSpacing: "-1.28px" }}
            >
              Enterprise-grade engineering, startup-friendly speed.
            </h2>
            <p className="text-base text-white/60 leading-6 mb-10 max-w-sm">
              Whether you're launching an MVP, scaling an SME platform, or
              modernising enterprise infrastructure — we scope it, build it, and
              ship it.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdxnawwYNQcVElAvtYUi3yJ9H1itO-Wq0rtuy5iGOn-3CMihw/viewform",
                    "_blank",
                  )
                }
                className="inline-flex items-center bg-canvas text-ink font-medium text-base rounded-pill px-6 py-3 hover:opacity-90 transition-opacity duration-150"
              >
                Request a quotation
              </button>
              <a
                href="/services"
                className="inline-flex items-center text-base font-medium text-white/70 hover:text-white transition-colors duration-150"
              >
                View services →
              </a>
            </div>
          </div>

          {/* Code editor mockup */}
          <div
            className="bg-canvas-soft-2 rounded-[8px] border border-white/10 overflow-hidden"
            style={{
              boxShadow: "0px 2px 2px #0000000a, 0px_8px_16px_-4px_#ffffff08",
            }}
          >
            <div className="bg-[#1a1a1a] border-b border-white/10 px-4 py-2.5 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[11px] text-white/30 uppercase tracking-widest">
                nexttab.config
              </span>
            </div>
            <div className="p-6 bg-[#111111]">
              <table className="w-full">
                <tbody>
                  {featureLines.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="font-mono text-[13px] text-white/30 py-2.5 pr-6 w-24">
                        {row.label}
                      </td>
                      <td className="font-mono text-[13px] text-white/80 py-2.5">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
