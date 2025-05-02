import Link from "next/link";
import { Phone, Mail, MapPin, Wrench, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-10">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none"></div>

      {/* Top wavy separator */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-gray-100"
        >
          <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Contact card highlighted area */}
        <div className="bg-yellow-600 rounded-xl p-6 md:p-8 shadow-xl mb-10 -mt-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full -mt-10 -mr-10 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 rounded-full -mb-8 -ml-8 opacity-50"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center transform transition-all hover:translate-y-[-5px]">
              <div className="bg-yellow-500 text-white p-3 rounded-full inline-flex mb-3">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">Gọi Ngay</h3>
              <Link
                href="tel:0933270890"
                className="text-xl font-bold text-white hover:text-yellow-300 transition-colors"
                aria-label="Gọi đến số 0933270890"
              >
                0933.270.890
              </Link>
              <p className="text-white/80 text-sm mt-2">Hỗ trợ 24/7</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center transform transition-all hover:translate-y-[-5px]">
              <div className="bg-yellow-500 text-white p-3 rounded-full inline-flex mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">Email</h3>
              <Link
                href="mailto:contact@suakhoathanhhoa.com"
                className="text-white hover:text-yellow-300 transition-colors break-all"
                aria-label="Gửi email đến suakhoathanhhoa@gmail.com"
              >
                suakhoathanhhoa@gmail.com
              </Link>
              <p className="text-white/80 text-sm mt-2">Phản hồi trong 24h</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center transform transition-all hover:translate-y-[-5px]">
              <div className="bg-yellow-500 text-white p-3 rounded-full inline-flex mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">
                Giờ Làm Việc
              </h3>
              <p className="text-white">24/7</p>
              <p className="text-white/80 text-sm mt-2">
                Tất cả các ngày trong tuần
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex flex-col items-center text-center transform transition-all hover:translate-y-[-5px]">
              <div className="bg-yellow-500 text-white p-3 rounded-full inline-flex mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-white text-lg mb-1">
                Phục Vụ Nhanh
              </h3>
              <p className="text-white">15-30 phút</p>
              <p className="text-white/80 text-sm mt-2">
                Có mặt tại địa điểm của bạn
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-1">
            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 text-yellow-500 border-b border-yellow-500/30 pb-2 flex items-center">
                <Wrench className="w-6 h-6 mr-2" />
                SỬA KHÓA THANH HÓA
              </h3>

              <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                <p className="text-gray-300 mb-3">
                  <span className="text-yellow-400 font-semibold">
                    Dịch vụ sửa khóa 24/7 tại Thanh Hóa
                  </span>{" "}
                  - Đội ngũ thợ lành nghề với 10+ năm kinh nghiệm. Cam kết phục
                  vụ nhanh chóng trong 30 phút, bảo hành dài hạn.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[
                    "Phục vụ 24/7",
                    "Thợ lành nghề",
                    "Đến trong 30'",
                    "Bảo hành 12 tháng",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Địa chỉ chi tiết */}
              <div className="relative bg-gradient-to-r from-yellow-600/20 to-black/30 p-6 rounded-xl border border-yellow-500/30 overflow-hidden mb-6 group hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300">
                {/* Các yếu tố trang trí */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full -mt-12 -mr-12 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-500/10 rounded-full -mb-8 -ml-8"></div>

                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 pointer-events-none"></div>

                {/* Icon lớn trang trí */}
                <div className="absolute right-4 bottom-4 opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20 text-yellow-500/20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                {/* Nội dung chính */}
                <div className="relative">
                  <div className="bg-yellow-500 text-black p-3 rounded-full inline-flex items-center justify-center mb-4 shadow-lg shadow-yellow-500/20 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <h4 className="text-xl font-bold text-yellow-400 mb-2 group-hover:translate-x-1 transition-transform duration-300">
                    Địa chỉ
                  </h4>

                  <div className="pl-1 border-l-2 border-yellow-500/50 mb-4">
                    <p className="text-gray-300 text-lg">
                      56 Đình Hương, Trương Thi, TP Thanh Hóa, Việt Nam
                    </p>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/RDefEX5jCjy181RH7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 py-2 px-4 rounded-lg transition-colors group-hover:shadow-md"
                  >
                    <span className="mr-2">Xem trên Google Maps</span>
                    <div className="bg-yellow-500 p-1 rounded-full transform group-hover:rotate-45 transition-transform duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500 border-b border-yellow-500/30 pb-2">
              DỊCH VỤ CHÍNH
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Sửa khóa cửa các loại", href: "/sua-khoa-cua" },
                { label: "Khóa ô tô chính hãng", href: "/khoa-o-to" },
                { label: "Khóa xe máy cao cấp", href: "/khoa-xe-may" },
                { label: "Két sắt, tủ an toàn", href: "/sua-khoa-ket" },
                {
                  label: "Khóa cửa điện tử thông minh",
                  href: "/khoa-cua-dien-tu",
                },
                { label: "Remote cửa cuốn, garage", href: "/remote-cua-cuon" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-yellow-500 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500 border-b border-yellow-500/30 pb-2">
              PHỤC VỤ TOÀN THÀNH PHỐ
            </h3>
            <ul className="grid grid-cols-1 gap-y-3 text-gray-300">
              {[
                "Trường Thi",
                "Đông Thọ",
                "Đông Sơn",
                "Lam Sơn",
                "Ngọc Trạo",
                "Đông Vệ",
                "Thiệu Dương",
              ].map((area, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-yellow-500 border-b border-yellow-500/30 pb-2">
              CAM KẾT DỊCH VỤ
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Wrench className="w-5 h-5" />,
                  text: "Thợ khóa chuyên nghiệp 10+ năm kinh nghiệm",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  text: "Bảo hành 12 tháng cho mọi dịch vụ",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  text: "Có mặt sau 15-30 phút nhận cuộc gọi",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="bg-yellow-500/20 p-2 rounded-md text-yellow-500">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
              <h4 className="font-bold text-yellow-400 mb-2">
                Khẩn cấp? Gọi ngay!
              </h4>
              <Link
                href="tel:0933270890"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center mt-2 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                0933.270.890
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sửa Khóa Thanh Hóa. All Rights
            Reserved.
          </p>
        </div>
      </div>

      {/* Floating contact buttons with enhanced animations */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* Phone button with pulse and bounce animation */}
        <Link
          href="tel:0933270890"
          className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl relative group animate-[bounce_3s_ease-in-out_infinite]"
          aria-label="Gọi điện thoại"
        >
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-red-600 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0 shadow-lg whitespace-nowrap animate-[fadeIn_0.5s]">
            Gọi ngay
            <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full border-[6px] border-transparent border-l-red-600"></span>
          </span>
          <Phone className="w-7 h-7" strokeWidth={2.5} />
          {/* Animated ring effect */}
          <span className="absolute inset-0 rounded-full border-2 border-red-400 opacity-0 group-hover:opacity-100 animate-[ping_1.5s_ease-out_infinite]"></span>
        </Link>

        {/* Zalo button with bounce animation (như nút gọi điện) */}
        <Link
          href="https://zalo.me/0933270890"
          className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white p-4 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl relative group animate-[bounce_3s_ease-in-out_infinite]"
          aria-label="Nhắn tin Zalo"
        >
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white text-sm py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-3 group-hover:translate-x-0 shadow-lg whitespace-nowrap animate-[fadeIn_0.5s]">
            Nhắn tin Zalo
            <span className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-full border-[6px] border-transparent border-l-blue-600"></span>
          </span>
          <div className="w-7 h-7 relative flex items-center justify-center">
            <Image
              src="/zalo_icon.svg"
              alt="Zalo"
              width={28}
              height={28}
              className="object-contain"
              priority
              loading="eager"
            />
          </div>
          {/* Animated ring effect (giống nút gọi điện) */}
          <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 animate-[ping_1.5s_ease-out_infinite]"></span>
        </Link>
      </div>
    </footer>
  );
}
