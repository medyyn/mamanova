import React from "react";
import { getProducts, getCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const products = await getProducts();
  const categories = await getCategories();

  const filteredProducts = searchParams.category
    ? products.filter((p) => p.category === searchParams.category)
    : products;

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Tum Urunler
          </h1>
          <p className="text-[var(--muted)] text-lg">
            {filteredProducts.length} urun bulundu
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="/products"
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              !searchParams.category
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--bg-warm)] hover:bg-[var(--accent)]/10"
            }`}
          >
            Tumu
          </a>
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/products?category=${cat.slug}`}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                searchParams.category === cat.slug
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--bg-warm)] hover:bg-[var(--accent)]/10"
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-[var(--muted)]">
              Bu kategoride urun bulunamadi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
