'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 mb-4">
              <div className="text-4xl md:text-5xl font-black tracking-tighter drop-shadow-md leading-none">
                <span className="text-[#FCD34D]">WA</span>
                <span className="text-[#4ADE80]">AH!</span>
              </div>
              <div className="bg-white px-2 py-0.5 mt-1 rounded-sm shadow-md">
                <span className="text-[10px] md:text-[11px] font-extrabold text-[#E11D48] tracking-widest whitespace-nowrap uppercase">
                  #kya_swaad_hai
                </span>
              </div>
            </Link>
            <p className="text-cream-200 mb-4">
              Serving authentic Indian cuisine with love and tradition since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-200 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-cream-200">
                <Phone className="w-5 h-5" />
                <a href="tel:+911234567890" className="hover:text-gold-400 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-cream-200">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@royalkitchen.com" className="hover:text-gold-400 transition-colors">
                  info@royalkitchen.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-cream-200">
                <MapPin className="w-5 h-5 mt-1" />
                <span>123 Main Street, City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-cream-200">
              <li>Mon - Thu: 11:00 AM - 10:00 PM</li>
              <li>Fri - Sat: 11:00 AM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-maroon-800 mt-8 pt-8 text-center text-cream-200">
          <p>&copy; {new Date().getFullYear()} WAAH! All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
