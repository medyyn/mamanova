"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem } = useCart();

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <div
      className="product-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-[var(--bg-warm)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discount > 0 && (
            <span className="px-3 py-1 bg-[var(--accent)] text-white text-sm font-semibold rounded-full">
              -{discount}%
            </span>
          )}
          {product.isNew && (
            <span className="px-3 py-1 bg-[var(--teal)] text-white text-sm font-semibold rounded-full">
              Yeni
            </span>
          )}
          {product.featured && (
            <span className="px-3 py-1 bg-[var(--gold)] text-white text-sm font-semibold rounded-full">
              One Cikan
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-3 bg-black/20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all transform ${
              isLiked
                ? "bg-[var(--accent)] text-white scale-110"
                : "bg-white text-[var(--fg)] hover:bg-[var(--accent)] hover:text-white"
            }`}
            aria-label="Add to wishlist"
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="w-12 h-12 rounded-full bg-white text-[var(--fg)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all transform hover:scale-110"
            aria-label="Add to cart"
          >
            <ShoppingCart size={20} />
          </button>
          <Link
            href={`/product/${product.id}`}
            className="w-12 h-12 rounded-full bg-white text-[var(--fg)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all transform hover:scale-110"
            aria-label="View product"
          >
            <Eye size={20} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(product.rating!)
                      ? "text-[var(--gold)]"
                      : "text-gray-300"
                  }
                  fill={
                    i < Math.floor(product.rating!) ? "currentColor" : "none"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-[var(--muted)]">
              ({product.reviews})
            </span>
          </div>
        )}

        {/* Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-[var(--accent)] transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-[var(--accent)]">
            {product.price} TL
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[var(--muted)] line-through">
              {product.originalPrice} TL
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-3">
          {product.stock > 10 ? (
            <span className="text-sm text-[var(--teal)] font-medium">
              Stokta mevcut
            </span>
          ) : product.stock > 0 ? (
            <span className="text-sm text-[var(--gold)] font-medium">
              Son {product.stock} urun!
            </span>
          ) : (
            <span className="text-sm text-[var(--accent)] font-medium">
              Tukendi
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
