import React from "react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryNav from "@/components/CategoryNav";
import { getProducts, getCategories } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();
  const categories = await getCategories();

  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const newProducts = products.filter((p) => p.isNew);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <ProductGrid
        products={
          featuredProducts.length > 0 ? featuredProducts : products.slice(0, 4)
        }
        subtitle="Seçilmişlər"
        title="Ən Çox Satılan Məhsullar"
      />

      {/* Categories */}
      <CategoryNav categories={categories} />

      {/* New Products */}
      {newProducts.length > 0 && (
        <ProductGrid
          products={newProducts}
          subtitle="Təzə Əlavə Olunanlar"
          title="Yeni Lezzetlerimizi Kesfet"
        />
      )}

      {/* All Products */}
      <ProductGrid
        products={products.slice(0, 8)}
        subtitle="Bütün Məhsullar"
        title="Geniş məhsul çeşidimiz"
      />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--bg-warm)] to-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="section-title">
            <span className="inline-block px-4 py-1 bg-[var(--teal)]/10 text-[var(--teal)] rounded-full text-sm font-semibold mb-4">
              Niyə Biz?
            </span>
            <h2>Osmanlı çərəz fərqi</h2>
            <p>Keyfiyyət və etibarın ünvanı</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Təzə məhsullar",
                description:
                  "Bütün məhsullarımız təzə şəkildə tədarük olunur və sürətli şəkildə qapınıza çatdırılır.",
                icon: "🌿",
                color: "var(--teal)",
              },
              {
                title: "Natural və Organik",
                description:
                  "GMO tərkibli deyil, qatqı maddələri istifadə olunmur.",
                icon: "🌱",
                color: "var(--gold)",
              },
              {
                title: "Müştəri Məmnuniyyəti",
                description:
                  "24/7 müştəri dəstəyi və 100% məmnuniyyət zəmanəti ilə xidmətinizdəyik.",
                icon: "⭐",
                color: "var(--accent)",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass rounded-3xl p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-[var(--muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
