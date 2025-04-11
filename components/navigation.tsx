"use client";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRinging, setIsRinging] = useState(false);

  // Hiệu ứng nhấp nháy cho nút điện thoại
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRinging((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Đóng menu khi chuyển từ mobile sang desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

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
        {/* Mobile menu button & enhanced phone button */}
        <div className="flex md:hidden justify-between items-center py-3">
          <Link
            href="tel:0933270890"
            className={`flex items-center space-x-2 bg-gradient-to-r ${
              isRinging ? "from-red-600 to-red-500" : "from-red-500 to-red-400"
            } text-white px-3 py-2 rounded-lg shadow-md transform transition-all duration-300 ${
              isRinging ? "scale-105" : "scale-100"
            }`}
          >
            <div className={`relative ${isRinging ? "animate-pulse" : ""}`}>
              <PhoneCall className="w-5 h-5 text-white" />
              <span
                className={`absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full ${
                  isRinging ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              ></span>
            </div>
            <span className="font-bold">0933.270.890</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="bg-white p-2 rounded-md text-red-900 hover:text-red-700 focus:outline-none shadow-sm"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Simple Design */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-200 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-200 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-yellow-500 flex justify-between items-center">
              <span className="font-bold text-red-900">Dịch Vụ</span>
              <button
                onClick={toggleMenu}
                className="text-red-900 hover:text-red-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Danh sách menu đơn giản */}
            <div className="overflow-y-auto h-full pb-16">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 px-4 border-b border-gray-100 font-medium text-gray-700 hover:bg-yellow-50 active:bg-yellow-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
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

      {/* CSS cho hiệu ứng đặc biệt */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite;
        }
      `}</style>
    </nav>
  );
}
