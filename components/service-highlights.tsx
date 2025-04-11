import Image from "next/image";
import Link from "next/link";

export default function ServiceHighlights() {
  const services = [
    {
      title: "Sửa khóa cửa",
      description: "Dịch vụ sửa khóa cửa tại nhà nhanh chóng, chuyên nghiệp",
      image: "/images/home_key.jpg?height=300&width=300",
      href: "/sua-khoa-cua",
      icon: "door",
    },
    {
      title: "Làm chìa khóa ô tô",
      description: "Làm chìa khóa ô tô các loại, sửa khóa ô tô",
      image: "/images/car_key.jpg?height=300&width=300",
      href: "/khoa-o-to",
      icon: "car",
    },
    {
      title: "Sửa khóa két sắt",
      description: "Mở két sắt, sửa khóa két sắt tại nhà",
      image: "/images/safe_lock.jpg?height=300&width=300",
      href: "/sua-khoa-ket",
      icon: "safe",
    },
    {
      title: "Làm chìa khóa xe máy",
      description: "Làm chìa khóa xe máy các loại, sửa khóa xe máy",
      image: "/images/motorbike_key.jpg?height=300&width=300",
      href: "/khoa-xe-may",
      icon: "bike",
    },
  ];

  const benefits = [
    {
      icon: "phone",
      title: "Hỗ trợ 24/7",
      description: "Luôn sẵn sàng phục vụ mọi lúc, mọi nơi",
    },
    {
      icon: "tools",
      title: "Thợ chuyên nghiệp",
      description: "Đội ngũ thợ khóa với nhiều năm kinh nghiệm",
    },
    {
      icon: "clock",
      title: "Phục vụ nhanh chóng",
      description: "Có mặt trong vòng 15-30 phút sau cuộc gọi",
    },
    {
      icon: "shield",
      title: "Bảo hành dài hạn",
      description: "Cam kết chất lượng dịch vụ, bảo hành lâu dài",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Banner nổi bật */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-yellow-500 rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden">
          {/* Các hình trang trí */}
          <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-yellow-400 rounded-full -mt-16 -mr-16 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-400 rounded-full -mb-12 -ml-12 opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-400 rounded-full opacity-30 hidden md:block"></div>

          <div className="md:flex items-center justify-between relative z-10">
            {/* Nội dung chính */}
            <div className="md:w-3/5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left">
                DỊCH VỤ SỬA KHÓA TẠI NHÀ
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mb-6 text-center md:text-left">
                Chuyên nghiệp - Uy tín - Nhanh chóng - Giá cả hợp lý
              </p>
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <a
                  href="tel:+84912345678"
                  className="inline-block bg-white text-yellow-600 font-bold py-3 px-6 rounded-full transition-all hover:bg-yellow-600 hover:text-white hover:shadow-md transform hover:-translate-y-1"
                >
                  Gọi ngay: 0933.270.890
                </a>
              </div>
            </div>

            {/* Nội dung bên phải - Icon và thông tin nổi bật */}
            <div className="md:w-2/5 mt-6 md:mt-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20 shadow-lg">
              {/* Tiêu đề phần features - chỉ hiển thị ở mobile */}
              <h3 className="font-bold text-white text-center mb-4 md:hidden">
                Dịch Vụ Của Chúng Tôi
              </h3>

              {/* Mobile: hiển thị theo grid 2 cột thay vì stack */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <div className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Phục vụ nhanh
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      15-30 phút có mặt
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <div className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Bảo hành lâu
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Chất lượng cam kết
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-white/5 p-3 rounded-lg">
                  <div className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Giá phải chăng
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      Minh bạch, không phụ thu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Các lợi ích */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center text-center transform transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-yellow-100 p-3 rounded-full text-yellow-600 mb-3">
                <span className="flex items-center justify-center">
                  {benefit.icon === "phone" && (
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  )}
                  {benefit.icon === "tools" && (
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                  {benefit.icon === "clock" && (
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {benefit.icon === "shield" && (
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dịch vụ chính */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các dịch vụ sửa khóa chuyên nghiệp, đáp
            ứng mọi nhu cầu của khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-medium">Xem chi tiết</span>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-yellow-600 group-hover:text-red-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <span className="text-yellow-600 font-medium group-hover:text-red-600 transition-colors flex items-center">
                      Tìm hiểu thêm
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
