"use client";

import React from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-16 px-4 text-center">
        <div className="w-24 h-24 rounded-full bg-[var(--bg-warm)] mx-auto mb-6 flex items-center justify-center">
          <ShoppingBag size={40} className="text-[var(--muted)]" />
        </div>
        <h1 className="text-2xl font-serif font-bold mb-4">Səbətiniz Boşdur</h1>
        <p className="text-[var(--muted)] mb-8">
          Səbətinizdə hal-hazırda məhsul yoxdur.
        </p>
        <Link
          href="/products"
          className="btn-primary inline-flex items-center gap-2"
        >
          Alisverise Basla
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          Səbətim ({items.length} məhsul)
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <Link
                    href={`/product/${item.product.id}`}
                    className="font-semibold hover:text-[var(--accent)]"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {item.product.price} TL
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-[var(--border)] rounded-full">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-[var(--bg-warm)] rounded-l-full"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-[var(--bg-warm)] rounded-r-full"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[var(--accent)]">
                        {item.product.price * item.quantity} TL
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-sm text-[var(--muted)] hover:text-[var(--accent)] underline"
            >
              Səbəti Təmizlə
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Sifariş xülasəsi</h2>

              <div className="space-y-3 pb-6 border-b border-[var(--border)]">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Aralıq Cəmi</span>
                  <span>{total} TL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--muted)]">Kargo</span>
                  <span className="text-[var(--teal)]">
                    {total >= 100 ? "Pulsuz" : "30 azn"}
                  </span>
                </div>
              </div>

              <div className="flex justify-between py-6 border-b border-[var(--border)]">
                <span className="font-semibold">Cəmi</span>
                <span className="text-2xl font-bold text-[var(--accent)]">
                  {total >= 100 ? total : total + 30} azn
                </span>
              </div>

              <button className="btn-primary w-full mt-6">
                Sifarişi Tamamla
              </button>

              <Link
                href="/products"
                className="block text-center text-sm text-[var(--muted)] hover:text-[var(--accent)] mt-4"
              >
                Alışverişə dəvam et
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
