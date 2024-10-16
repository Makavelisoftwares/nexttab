"use client";

import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-sky-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Ideas into Reality?
        </h2>
        <p className="text-xl mb-10 text-sky-200 max-w-2xl mx-auto">
          Get a personalized quote for your project and take the first step
          towards innovation.
        </p>
        <Button
          size="lg"
          className="bg-white text-sky-900 hover:bg-sky-100 transition-colors duration-300 text-lg px-8 py-3 rounded-full"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdxnawwYNQcVElAvtYUi3yJ9H1itO-Wq0rtuy5iGOn-3CMihw/viewform",
              "_blank"
            )
          }
        >
          Request Quotation
        </Button>
      </div>
    </section>
  );
};
