"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Star, Truck, Shield, Award } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 90, 79, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.3 }}
      />

      {/* Decorative Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[var(--accent-light)] to-transparent rounded-full blur-3xl opacity-30 animate-float" />
      <div
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-[var(--gold-light)] to-transparent rounded-full blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[var(--teal-light)] to-transparent rounded-full blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/10 text-[var(--accent)] px-4 py-2 rounded-full mb-6">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-semibold">
                Premium Kalite, Taze Urunler
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6">
              Dogann En <span className="gradient-text">Degerli</span> Hazinesi
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] mb-8 max-w-xl">
              Osmanli doneminden bu yana geleneksel lezzetler, bugunun
              teknolojisiyle bulusuyor. En kaliteli cerezleri kapiniza kadar
              getiriyoruz.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/products"
                className="btn-primary inline-flex items-center gap-2"
              >
                Alisverise Basla
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Hikayemizi Oku
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Truck, label: "Ucretsiz Kargo", sub: "100 TL Uzeri" },
                { icon: Shield, label: "Guvenli Odeme", sub: "256-bit SSL" },
                {
                  icon: Award,
                  label: "Kalite Garantisi",
                  sub: "%100 Memnuniyet",
                },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-warm)] flex items-center justify-center text-[var(--accent)]">
                    <badge.icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{badge.label}</p>
                    <p className="text-xs text-[var(--muted)]">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div
            className="relative animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--accent)]/30 animate-spin"
                style={{ animationDuration: "30s" }}
              />
              <div
                className="absolute inset-4 rounded-full border-2 border-dashed border-[var(--gold)]/30 animate-spin"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                }}
              />

              {/* Main Image */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--gold-light)] p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600"
                    alt="Premium Cerez"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-4 top-1/4 glass rounded-2xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-bold">
                    4.9
                  </div>
                  <div>
                    <p className="font-semibold">Musteri Puani</p>
                    <p className="text-xs text-[var(--muted)]">
                      2,500+ degerlendirme
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="absolute -left-4 bottom-1/4 glass rounded-2xl p-4 shadow-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--teal)] flex items-center justify-center text-white font-bold">
                    24h
                  </div>
                  <div>
                    <p className="font-semibold">Hizli Teslimat</p>
                    <p className="text-xs text-[var(--muted)]">
                      Ayni gun kargo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--accent)] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[var(--accent)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
