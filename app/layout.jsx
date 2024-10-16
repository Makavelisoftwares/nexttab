import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXTAB",
  description:
    "NEXTTAB is a software engineering company that helps you build software products for your micro and macro business. Our services range from web development, mobile development , enterprise system development, Data analysis and Tutoring. Feel free to reach us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-sky-100 h-full to-sky-300/10 `}
      >
        <Analytics />
        <Toaster />
        <div className="sticky top-0 bg-sky-900">
          <Header />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
  s;
}
