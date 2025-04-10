"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const services = [
    {
      name: "KHÓA Ô TÔ",
      image: "/images/car_key.jpg",
      href: "/khoa-o-to",
      description: "Sửa chữa, làm mới khóa ô tô mọi hãng",
    },
    {
      name: "KHÓA NHÀ",
      image: "/images/home_key.jpg",
      href: "/khoa-nha",
      description: "Thay thế, lắp đặt khóa cửa chuyên nghiệp",
    },
    {
      name: "KHÓA KÉT",
      image: "/images/safe_lock.jpg",
      href: "/khoa-ket",
      description: "Mở khóa két sắt an toàn, bảo mật",
    },
    {
      name: "KHÓA XE MÁY",
      image: "/images/motorbike_key.jpg",
      href: "/khoa-xe-may",
      description: "Làm chìa khóa xe máy mọi loại",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-gray-900 text-white overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Nền dịch vụ sửa khóa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent opacity-90" />
      </div>

      <div className="container mx-auto relative z-10 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Column - Main Image */}
          <motion.div className="px-4 sm:px-6" variants={itemVariants}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-4 border-yellow-500 shadow-2xl">
              <Image
                src="/images/main_banner.png"
                alt="Thợ sửa khóa chuyên nghiệp"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div>
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    SỬA KHÓA THANH HÓA
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Uy tín - Chuyên nghiệp - Giá cả hợp lý
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Services */}
          <motion.div className="px-4 sm:px-6" variants={itemVariants}>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              DỊCH VỤ SỬA KHÓA <span className="text-red-500">24/7</span>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link href={service.href} className="group block h-full">
                    <div className="relative rounded-xl overflow-hidden border-2 border-yellow-500/30 group-hover:border-yellow-500 transition-all h-full">
                      <div className="aspect-square">
                        <Image
                          src={service.image}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <h3 className="text-xl font-bold text-yellow-400 mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {service.description}
                        </p>
                        <div className="mt-2 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-sm">Xem chi tiết</span>
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
