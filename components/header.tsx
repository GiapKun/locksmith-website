"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 hover:shadow-xl">
      <div className="container mx-auto py-3 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center w-full md:w-auto justify-between">
          <Link href="/" className="flex items-center group">
            <div className="relative w-16 h-16 mr-3 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png" // Thay bằng logo thực tế
                alt="Sửa Khóa Thanh Hóa Logo"
                width={64}
                height={64}
                className="rounded-full border-2 border-yellow-500 shadow-md"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold text-yellow-600 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                SỬA KHÓA THANH HÓA
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Dịch vụ sửa khóa chuyên nghiệp 24/7
              </p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Contact Info - Hiển thị trên desktop và mobile (khi menu mở) */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center md:items-start gap-6 mt-4 md:mt-0`}
        >
          {/* Phone Info với hiệu ứng */}
          <div className="flex items-center gap-3 group">
            <div className="bg-yellow-100 p-3 rounded-full transition-all duration-300 group-hover:bg-yellow-200 group-hover:scale-110">
              <Phone className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">HOTLINE 24/7</p>
              <a
                href="tel:0933270890"
                className="font-bold text-lg text-red-600 hover:text-red-700 transition-colors duration-300"
              >
                0933.270.890
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-center gap-3 group">
            <div className="bg-blue-100 p-3 rounded-full transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">THỜI GIAN LÀM VIỆC</p>
              <p className="font-bold text-lg text-blue-600">24/7 Không nghỉ</p>
            </div>
          </div>

          {/* Thêm nút CTA nếu cần */}
          <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Gọi Ngay
          </button>
        </div>
      </div>
    </header>
  );
}
