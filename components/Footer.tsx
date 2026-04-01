"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">
                Bultenimize Abone Olun
              </h3>
              <p className="text-white/80">
                Kampanyalardan ve yeniliklerden ilk siz haberdar olun
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 md:w-80 px-5 py-3 rounded-full text-[var(--fg)] focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[var(--accent)] font-semibold rounded-full hover:bg-[var(--bg-warm)] transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-serif">
                    OC
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold">
                    Osmanli Cerez
                  </h4>
                  <p className="text-sm text-gray-400">Premium Quality</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Geleneksel lezzetler, modern sunum. 1990'dan bu yana kaliteyi
                tescilli olarak tuketicilerimize sunuyoruz.
              </p>
              <div className="flex gap-3">
                {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--accent)] transition-colors"
                    >
                      <Icon size={18} />
                    </a>
                  ),
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Hizli Erisim</h4>
              <ul className="space-y-3">
                {[
                  { label: "Ana Sayfa", href: "/" },
                  { label: "Urunler", href: "/products" },
                  { label: "Hakkimizda", href: "/about" },
                  { label: "Blog", href: "/blog" },
                  { label: "Iletisim", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Kategoriler</h4>
              <ul className="space-y-3">
                {["Fistik", "Badem", "Ceviz", "Pekmez", "Findik", "Helva"].map(
                  (cat) => (
                    <li key={cat}>
                      <Link
                        href={`/products?category=${cat.toLowerCase()}`}
                        className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                      >
                        {cat}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Iletisim</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-[var(--accent)] mt-1" size={18} />
                  <span className="text-gray-400">
                    Osmanli Cerez Merkezi
                    <br />
                    Istanbul, Turkiye
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-[var(--accent)]" size={18} />
                  <a
                    href="tel:+902121234567"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +90 212 123 45 67
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[var(--accent)]" size={18} />
                  <a
                    href="mailto:info@osmanlicerez.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@osmanlicerez.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Osmanli Cerez. Tum hakları saklıdır.
              </p>
              <div className="flex gap-6">
                {[
                  "Gizlilik Politikasi",
                  "Kullanim Sartlari",
                  "Iade Politikasi",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
