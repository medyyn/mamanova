import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Osmanli Cerez - Premium Quality Nuts & Dried Fruits',
  description: 'Traditional Ottoman flavors meet modern quality. Premium nuts, dried fruits, and traditional delicacies delivered to your doorstep.',
  keywords: 'osmanlı, çərəz, fıstıq, badam, qoz, fındıq, pəkməz, halva, türk fındığı',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <CartProvider>
          <div className="pattern-bg" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}