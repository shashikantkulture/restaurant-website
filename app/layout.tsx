import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import CartIcon from "@/components/CartIcon";
import InstagramButton from "@/components/InstagramButton";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Restaurant - Authentic Indian Cuisine",
  description: "Experience the finest Indian cuisine with our premium restaurant. Order online for delivery or dine-in.",
  keywords: "restaurant, indian food, online ordering, delivery, premium dining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <CartIcon />
          <InstagramButton />
        </CartProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#8B0000',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  );
}
