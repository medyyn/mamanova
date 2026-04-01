"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, Search, User, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl font-serif">
                OC
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-[var(--fg)]">
                Osmanli Cerez
              </h1>
              <p className="text-xs text-[var(--muted)] -mt-1">
                Premium Quality
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/products", label: "Urunler" },
              { href: "/products?category=featured", label: "One Cikanlar" },
              { href: "/about", label: "Hakkimizda" },
              { href: "/contact", label: "Iletisim" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[var(--fg)] font-medium hover:text-[var(--accent)] transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="w-10 h-10 rounded-full bg-[var(--bg-warm)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Wishlist */}
            <button
              className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--bg-warm)] items-center justify-center hover:bg-[var(--gold)] hover:text-white transition-all"
              aria-label="Wishlist"
            >
              <Heart size={18} />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative w-10 h-10 rounded-full bg-[var(--bg-warm)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all"
            >
              <ShoppingCart size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--accent)] text-white text-xs rounded-full flex items-center justify-center font-bold animate-pulse-glow">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* User */}
            <button
              className="hidden sm:flex w-10 h-10 rounded-full bg-[var(--bg-warm)] items-center justify-center hover:bg-[var(--teal)] hover:text-white transition-all"
              aria-label="Account"
            >
              <User size={18} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-[var(--bg-warm)] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isSearchOpen ? "max-h-20 mt-4" : "max-h-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Urun ara..."
              className="w-full py-3 px-5 pr-12 rounded-full border-2 border-[var(--border)] focus:border-[var(--accent)] focus:outline-none bg-white"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white z-40 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-6 flex flex-col gap-4">
          {[
            { href: "/", label: "Ana Sayfa" },
            { href: "/products", label: "Urunler" },
            { href: "/products?category=featured", label: "One Cikanlar" },
            { href: "/about", label: "Hakkimizda" },
            { href: "/contact", label: "Iletisim" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium py-3 px-4 rounded-xl hover:bg-[var(--bg-warm)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
