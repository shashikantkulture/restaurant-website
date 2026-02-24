'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (itemCount === 0) return null;

  return (
    <Link
      href="/cart"
      className="fixed bottom-8 right-8 z-50 bg-maroon-600 hover:bg-maroon-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="bg-gold-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
        {itemCount}
      </span>
    </Link>
  );
}
