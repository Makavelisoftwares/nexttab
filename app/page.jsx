import { HeroSection } from "./_components/hero-section";
import { Services } from "./_components/services";
import { CTA } from "./_components/call-to-action";
import { NewsLetter } from "./_components/news-letter";
import { Testimonials } from "./_components/testimonials";

export default function Component() {
  return (
    <div className="min-h-screen bg-sky-50 text-sky-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <Services />

      {/* CTA Section */}
      <CTA />

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Testimonial Section */}
      <Testimonials />
    </div>
  );
}
