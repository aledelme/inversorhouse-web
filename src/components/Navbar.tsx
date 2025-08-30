
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ClerkButton from "@/components/ClerkButton";

const navigation = [
  { name: 'Oportunidades', href: '/oportunidades' },
  { name: 'Renta Fija', href: '/#fix-incomes' },
  { name: 'Alto Volumen', href: '/#high-volumens' },
  { name: 'FAQs', href: '/faqs' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full bg-white/25 transition-all duration-300 ${isScrolled ? 'shadow-professional-md' : 'shadow-professional-sm'
      }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/isotipo.webp"
                alt="InversorHouse"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <Image
              src="/logo-title.webp"
              alt="InversorHouse"
              width={180}
              height={32}
              className="hidden sm:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-primary hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA and Auth */}
          <div className="flex items-center space-x-4">
            <Link
              href="/oportunidades"
              className="hidden md:inline-flex btn btn-primary text-sm px-4 py-2"
            >
              Ver Oportunidades
            </Link>
            <ClerkButton />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-surface-secondary transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-color">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-surface-secondary rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/oportunidades"
                className="block w-full text-center btn btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Ver Oportunidades
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}