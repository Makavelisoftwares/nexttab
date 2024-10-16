"use client";

import NextTabLogo from "@/components/logo";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-sky-900 text-white sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl flex items-center space-x-2 font-bold">
          <div>
            <NextTabLogo />
          </div>
          <span>NextTab</span>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-sky-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="hover:text-sky-300 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-sky-300 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-sky-300 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-sky-800 transition-all duration-300">
          <Link
            href="/"
            className="block py-2 px-4 text-sm hover:bg-sky-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block py-2 px-4 text-sm hover:bg-sky-700 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="block py-2 px-4 text-sm hover:bg-sky-700 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block py-2 px-4 text-sm hover:bg-sky-700 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};
