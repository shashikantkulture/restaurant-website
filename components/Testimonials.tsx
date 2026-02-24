'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'The best Indian food I\'ve ever had! The flavors are authentic and the service is excellent.',
    image: 'https://ui-avatars.com/api?name=Rajesh+Kumar&background=8B0000&color=fff',
  },
  {
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Amazing experience! The biryani was perfect and the ambiance is wonderful. Highly recommended!',
    image: 'https://ui-avatars.com/api?name=Priya+Sharma&background=D4AF37&color=fff',
  },
  {
    name: 'Amit Patel',
    rating: 5,
    comment: 'Outstanding quality and taste. The butter chicken is to die for! Will definitely come back.',
    image: 'https://ui-avatars.com/api?name=Amit+Patel&background=8B0000&color=fff',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-cream-100 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from real customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold text-gray-900">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
