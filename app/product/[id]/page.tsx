"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  Minus,
  Plus,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { getProduct, getProducts } from "@/lib/api";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);
  const allProducts = await getProducts();

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl">Məhsul Tapılmadı</h1>
        <Link href="/products" className="text-[var(--accent)]">
          Məhsullara geri qayıd
        </Link>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="text-[var(--muted)] hover:text-[var(--accent)]"
              >
                Ana Səhifə
              </Link>
            </li>
            <li className="text-[var(--muted)]">/</li>
            <li>
              <Link
                href="/products"
                className="text-[var(--muted)] hover:text-[var(--accent)]"
              >
                Məhsullar
              </Link>
            </li>
            <li className="text-[var(--muted)]">/</li>
            <li className="text-[var(--accent)]">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-3xl overflow-hidden bg-[var(--bg-warm)]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-[var(--bg-warm)] cursor-pointer hover:ring-2 hover:ring-[var(--accent)] transition-all"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {product.featured && (
                <span className="px-3 py-1 bg-[var(--gold)] text-white text-sm font-semibold rounded-full">
                  Önə çıxarılan
                </span>
              )}
              {product.isNew && (
                <span className="px-3 py-1 bg-[var(--teal)] text-white text-sm font-semibold rounded-full">
                  Yeni
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {product.name}
            </h1>

            {product.rating && (
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(product.rating!)
                          ? "text-[var(--gold)]"
                          : "text-gray-300"
                      }
                      fill={
                        i < Math.floor(product.rating!)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  ))}
                </div>
                <span className="text-sm text-[var(--muted)]">
                  {product.rating} ({product.reviews} Qiymətləndirmə)
                </span>
              </div>
            )}

            <p className="text-[var(--muted)] text-lg mb-6">
              {product.description}
            </p>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-[var(--accent)]">
                {product.price} azn
              </span>
              {product.originalPrice && (
                <span className="text-xl text-[var(--muted)] line-through">
                  {product.originalPrice} azn
                </span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <AddToCartSection product={product} />

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[var(--border)]">
              {[
                { icon: Truck, label: "Pulsuz Kargo", sub: "30 azn üstü" },
                {
                  icon: Shield,
                  label: "Təhlükəsiz ödəmə",
                  sub: "SSL sertifikatı",
                },
                { icon: RotateCcw, label: "Asand İadə", sub: "14 gün ərzində" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-[var(--muted)]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">
              Oxşar Məhsullar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AddToCartSection({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Quantity */}
      <div className="flex items-center border-2 border-[var(--border)] rounded-full">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="w-12 h-12 flex items-center justify-center hover:bg-[var(--bg-warm)] rounded-l-full transition-colors"
        >
          <Minus size={18} />
        </button>
        <span className="w-12 text-center font-semibold">{quantity}</span>
        <button
          onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
          className="w-12 h-12 flex items-center justify-center hover:bg-[var(--bg-warm)] rounded-r-full transition-colors"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Add to Cart */}
      <button
        onClick={() => addItem(product, quantity)}
        className="btn-primary flex-1"
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Stokta Yok" : "Sepete Ekle"}
      </button>

      {/* Wishlist */}
      <button className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
        <Heart size={20} />
      </button>

      {/* Share */}
      <button className="w-12 h-12 rounded-full border-2 border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
        <Share2 size={20} />
      </button>
    </div>
  );
}
