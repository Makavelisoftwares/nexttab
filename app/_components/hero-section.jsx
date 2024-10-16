"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-sky-900 opacity-80 z-10"></div>
      <div className="relative aspect-square w-full h-full">
        <Image
          src="/images/code1.jpg"
          fill
          alt="Futuristic Technology"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white max-w-4xl px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Innovate, Create, Elevate
          </h2>
          <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            Empowering businesses with cutting-edge software solutions tailored
            for the future.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white transition-colors duration-300 text-lg px-8 py-3 rounded-full"
          >
            <Link href="/services">Discover Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
