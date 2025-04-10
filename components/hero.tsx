import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const services = [
    {
      name: "KHÓA Ô TÔ",
      image: "/placeholder.svg?height=200&width=200",
      href: "/khoa-o-to",
    },
    {
      name: "KHÓA NHÀ",
      image: "/placeholder.svg?height=200&width=200",
      href: "/khoa-nha",
    },
    {
      name: "KHÓA KÉT",
      image: "/placeholder.svg?height=200&width=200",
      href: "/khoa-ket",
    },
    {
      name: "KHÓA XE MÁY",
      image: "/placeholder.svg?height=200&width=200",
      href: "/khoa-xe-may",
    },
  ];

  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 z-10"></div>

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 md:p-10 flex items-center">
            <div className="relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Các loại chìa khóa"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="p-6 md:p-10">
            <h2 className="text-3xl md:text-5xl font-bold text-teal-400 mb-8 text-center">
              THỢ SỬA KHÓA TẠI NHÀ 24H CHUYÊN NGHIỆP
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => (
                <Link key={service.name} href={service.href} className="group">
                  <div className="relative rounded-xl overflow-hidden border-4 border-yellow-500 transition-all group-hover:border-red-500">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      width={200}
                      height={200}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black to-transparent">
                      <h3 className="text-xl font-bold text-red-500 mb-4">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                SỬA KHÓA BÌNH DƯƠNG
              </h2>
              <p className="text-lg text-white">
                Làm chìa khóa - Sửa chữa khóa - Làm Smartkey
              </p>
            </div>

            <div className="mt-6 text-center">
              <div className="inline-block bg-yellow-500 text-black font-bold px-4 py-2 rounded">
                HOTLINE 24/7
                <div className="text-2xl text-red-600">0933.270.890</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
