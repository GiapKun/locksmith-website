import Image from "next/image"
import Link from "next/link"

export default function ServiceHighlights() {
  const services = [
    {
      title: "Sửa khóa cửa",
      description: "Dịch vụ sửa khóa cửa tại nhà nhanh chóng, chuyên nghiệp",
      image: "/placeholder.svg?height=300&width=300",
      href: "/sua-khoa-cua",
    },
    {
      title: "Làm chìa khóa ô tô",
      description: "Làm chìa khóa ô tô các loại, sửa khóa ô tô",
      image: "/placeholder.svg?height=300&width=300",
      href: "/khoa-o-to",
    },
    {
      title: "Sửa khóa két sắt",
      description: "Mở két sắt, sửa khóa két sắt tại nhà",
      image: "/placeholder.svg?height=300&width=300",
      href: "/sua-khoa-ket",
    },
    {
      title: "Làm chìa khóa xe máy",
      description: "Làm chìa khóa xe máy các loại, sửa khóa xe máy",
      image: "/placeholder.svg?height=300&width=300",
      href: "/khoa-xe-may",
    },
  ]

  return (
    <div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">DỊCH VỤ SỬA KHÓA TẠI NHÀ BÌNH DƯƠNG</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-yellow-600 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
