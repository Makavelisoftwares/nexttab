"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-canvas border-b border-hairline">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/images/logo1.png" width={100} height={36} className="object-contain" alt="NextTab" />
        </Link>

        {/* Nav links — center */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-body hover:text-ink px-3 py-1.5 rounded-full transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA cluster — right */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact"
            className="text-sm font-medium text-ink bg-canvas border border-hairline hover:border-hairline-strong rounded-nav px-3 h-7 inline-flex items-center transition-colors duration-150"
          >
            Log In
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-on-primary bg-ink hover:opacity-80 rounded-nav px-3 h-7 inline-flex items-center transition-opacity duration-150"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-3 text-sm text-body hover:text-ink hover:bg-canvas-soft transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4 border-t border-hairline flex gap-2">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex-1 text-center text-sm font-medium text-on-primary bg-ink rounded-nav py-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
