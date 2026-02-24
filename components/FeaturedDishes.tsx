'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredDishes = [
  {
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken',
    price: 450,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
  },
  {
    name: 'Biryani',
    description: 'Fragrant basmati rice with aromatic spices',
    price: 350,
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d29c?w=800',
  },
  {
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese with spices',
    price: 280,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800 mb-4">
            Featured Dishes
          </h2>
          <p className="text-lg text-gray-600">
            Our chef's special recommendations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-maroon-600">₹{dish.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-maroon-600 hover:text-maroon-700 font-semibold text-lg"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
