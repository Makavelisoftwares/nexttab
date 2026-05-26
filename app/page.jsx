import { HeroSection } from "./_components/hero-section";
import { Services } from "./_components/services";
import { CTA } from "./_components/call-to-action";
import { Testimonials } from "./_components/testimonials";
import { NewsLetter } from "./_components/news-letter";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Services />
      <CTA />
      <Testimonials />
      <NewsLetter />
    </main>
  );
}
