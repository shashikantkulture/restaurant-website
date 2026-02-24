'use client';

import { motion } from 'framer-motion';
import { Award, Users, Utensils, Heart } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/90 to-maroon-800/80 z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')",
            }}
          ></div>
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-cream-200">A journey of flavors and traditions</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-4xl font-serif font-bold text-maroon-800 mb-6">Welcome to Royal Kitchen</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over three decades, Royal Kitchen has been a beacon of authentic Indian cuisine, 
                bringing the rich flavors and traditions of India to food lovers around the world. 
                Our journey began in 1995 when our founder, a passionate chef with a vision, 
                decided to share the culinary heritage passed down through generations.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every dish we serve tells a story—a story of family recipes, traditional cooking methods, 
                and the love for creating memorable dining experiences. We source the finest ingredients, 
                use authentic spices, and prepare each meal with the same care and attention that has 
                defined our kitchen for years.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to honor our traditions while embracing innovation, ensuring that 
                every guest experiences the perfect blend of heritage and modernity in every bite.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-maroon-800 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Passion', desc: 'We cook with love and dedication' },
              { icon: Utensils, title: 'Quality', desc: 'Only the finest ingredients' },
              { icon: Users, title: 'Community', desc: 'Bringing people together' },
              { icon: Award, title: 'Excellence', desc: 'Award-winning culinary expertise' },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-maroon-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-maroon-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-maroon-800 text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
              'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
              'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
              'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
              'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
              'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
            ].map((image, idx) => (
              <motion.div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
