"use client";

import React from "react";
import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoryNavProps {
  categories: Category[];
}

export default function CategoryNav({ categories }: CategoryNavProps) {
  const colors = [
    "from-[#E85A4F] to-[#FF8A7A]",
    "from-[#D4A853] to-[#F0C878]",
    "from-[#2A9D8F] to-[#40C9B8]",
    "from-[#E07A5F] to-[#F2A285]",
    "from-[#81B29A] to-[#A8D5BA]",
    "from-[#F2CC8F] to-[#F9E4B7]",
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--bg)] to-[var(--bg-warm)]">
      <div className="max-w-7xl mx-auto">
        <div className="section-title">
          <span className="inline-block px-4 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full text-sm font-semibold mb-4">
            Kategoriler
          </span>
          <h2>Kategorilere Gore Kesfet</h2>
          <p>Aradiginiz lezzeti kategoriye gore kolayca bulun</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-80 group-hover:opacity-100 transition-opacity`}
              />
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-lg font-bold text-center mb-1">
                  {category.name}
                </h3>
                <span className="text-sm opacity-90">
                  {category.productCount} urun
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
