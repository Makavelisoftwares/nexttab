import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
});

export const metadata = {
  title: "NextTab Solutions",
  description:
    "NextTab Solutions is a software engineering company delivering web, mobile, cloud, and enterprise solutions for startups, SMEs, commerce brands, and large-scale organisations. Based in Nairobi, serving clients worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-canvas-soft text-ink`}>
        <Analytics />
        <Toaster />
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
