"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Phone } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "TRANG CHỦ", href: "/" },
    { name: "SỬA KHÓA CỬA", href: "/sua-khoa-cua" },
    { name: "KHÓA XE MÁY", href: "/khoa-xe-may" },
    { name: "KHÓA Ô TÔ", href: "/khoa-o-to" },
    { name: "CHÉP THẺ TỪ", href: "/chep-the-tu" },
    { name: "SỬA KHÓA KÉT", href: "/sua-khoa-ket" },
    { name: "REMOTE CỬA CUỐN", href: "/remote-cua-cuon" },
    { name: "SỬA KHÓA TỦ", href: "/sua-khoa-tu" },
    { name: "KHÓA CỬA ĐIỆN TỬ", href: "/khoa-cua-dien-tu" },
  ];

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-400 md:sticky md:top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        {/* Mobile menu button */}
        <div className="flex md:hidden justify-between items-center py-3">
          <Link href="tel:0933270890" className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-red-900" />
            <span className="font-bold text-red-900">0933.270.890</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="text-red-900 hover:text-red-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-2 px-4 border-b border-yellow-400 text-sm font-bold text-red-900 hover:bg-yellow-600 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-3 text-sm font-bold text-red-900 hover:bg-yellow-600 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-900 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
