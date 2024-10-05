import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Header } from "./_components/header";
import { SideBar } from "./_components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEXTAB",
  description:
    "NEXTTAB is a software engineering company that helps you build software products for your micro and macro business. Our services range from web development, mobile development , enterprise system development, Data analysis and Tutoring. Feel free to reach us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-3 `}>
        <Analytics />
        <div>
          <div className="sticky top-0 bg-white">
            <Header />
          </div>
          <div className="flex">
            <div className="md:w-[300px] md:flex hidden flex-col items-center space-y-3 fixed h-full">
              <SideBar />
            </div>
            <div className="md:pl-[310px] w-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
