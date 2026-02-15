"use client";

import { useState, useEffect } from "react";
import { Search, BookOpen, ShoppingBag, Menu, X, Plus, Leaf } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-50/80 backdrop-blur-xl shadow-glass border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="PageTurner Home"
          >
            <div className="w-9 h-9 bg-amber-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <BookOpen className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold text-stone-900 leading-none">
                Page
              </span>
              <span className="font-display text-xl font-bold text-amber-600 leading-none">
                Turner
              </span>
            </div>
          </a>

          {/* Search Bar — Desktop */}
          <div
            className={`hidden md:flex flex-1 max-w-lg relative transition-all duration-300 ${
              searchFocused ? "max-w-xl" : ""
            }`}
          >
            <div
              className={`relative w-full group transition-all duration-300 ${
                searchFocused ? "shadow-card" : ""
              }`}
            >
              <Search
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
                  searchFocused ? "text-amber-600" : "text-stone-400"
                }`}
              />
              <input
                type="text"
                placeholder="Search titles, authors, ISBN…"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2.5 text-sm font-sans text-stone-800 placeholder:text-stone-400 rounded-xl border transition-all duration-200 outline-none bg-white/70 backdrop-blur-sm ${
                  searchFocused
                    ? "border-amber-400 bg-white ring-2 ring-amber-400/20"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-2 text-sm font-sans font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-lg transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Cart Icon */}
            <button
              className="relative p-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-xl transition-all duration-150"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-stone-50"></span>
            </button>

            {/* Sell a Book CTA */}
            <a
              href="/sell"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-sm font-sans font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Sell a Book</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100/80 rounded-xl transition-all duration-150"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {/* Mobile Search */}
          <div className="relative mb-3 mt-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search titles, authors…"
              className="w-full pl-10 pr-4 py-2.5 text-sm font-sans text-stone-800 placeholder:text-stone-400 rounded-xl border border-stone-200 bg-white/80 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
            />
          </div>
          
          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2.5 text-sm font-sans font-medium text-stone-700 hover:text-stone-900 hover:bg-stone-100/80 rounded-xl transition-all duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/sell"
              className="mt-2 flex items-center justify-center gap-1.5 px-4 py-3 bg-stone-900 text-white text-sm font-sans font-semibold rounded-xl transition-all duration-200"
              onClick={() => setMenuOpen(false)}
            >
              <Plus className="w-4 h-4" />
              Sell a Book
            </a>
          </div>
        </div>
      </nav>

      {/* Eco badge strip */}
      <div
        className={`w-full bg-sage-600 py-1.5 transition-all duration-500 ${
          scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <p className="text-center text-xs font-sans text-white/90 flex items-center justify-center gap-1.5">
          <Leaf className="w-3 h-3" />
          Every purchase saves a book from landfill — join 40,000+ eco-conscious readers
        </p>
      </div>
    </header>
  );
}
