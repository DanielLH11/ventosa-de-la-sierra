"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio", icon: "🏠" },
    { href: "/historia", label: "Historia", icon: "📜" },
    { href: "/turismo", label: "Turismo", icon: "🏔️" },
    { href: "/agenda", label: "Agenda", icon: "📅" },
    { href: "/como-llegar", label: "Cómo llegar", icon: "🗺️" },
  ];

  return (
    <header
      className={`no-print sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-white/90 shadow-sm backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center space-x-3 no-underline">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 shadow-md transition-transform group-hover:scale-110">
            <span className="text-xl">🏔️</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-emerald-700 transition-colors group-hover:text-emerald-800">
              Ventosa de la Sierra
            </span>
            <span className="hidden text-xs text-gray-500 sm:block">
              Soria, Castilla y León
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`no-underline group relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-gray-700 hover:bg-emerald-50/50 hover:text-emerald-600"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <span className="text-base transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  {link.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-emerald-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="group relative md:hidden rounded-xl p-2.5 text-gray-700 transition-all hover:bg-emerald-50"
          aria-label="Toggle menu"
        >
          <div className="relative h-6 w-6">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-6 transform rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "top-2.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-6 transform rounded-full bg-current transition-all duration-300 ${
                isMenuOpen ? "top-2.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[600px] border-t" : "max-h-0"
        }`}
      >
        <div className="space-y-1 bg-linear-to-b from-white to-emerald-50/30 px-4 pb-4 pt-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`no-underline flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  isActive
                    ? "bg-emerald-100 text-emerald-700 shadow-sm"
                    : "text-gray-700 hover:bg-white hover:text-emerald-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
                {isActive && (
                  <span className="ml-auto flex h-2 w-2">
                    <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

