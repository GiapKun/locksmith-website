import Image from "next/image"

export default function ServiceList() {
  const services = [
    "Sửa khóa cửa tại nhà",
    "Làm chìa khóa ô tô",
    "Làm chìa khóa xe máy",
    "Sửa khóa két sắt",
    "Mở két sắt",
    "Lắp đặt khóa cửa điện tử",
    "Sửa remote cửa cuốn",
    "Sửa khóa tủ",
    "Chép thẻ từ",
  ]

  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">DỊCH VỤ SỬA KHÓA BÌNH DƯƠNG</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <p className="font-medium">{service}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <p className="text-lg">
                Sửa Khóa Bình Dương cung cấp dịch vụ sửa khóa tại nhà 24/7, với đội ngũ thợ khóa chuyên nghiệp, nhiều
                năm kinh nghiệm. Chúng tôi cam kết mang đến dịch vụ nhanh chóng, uy tín với giá cả hợp lý.
              </p>
            </div>
          </div>

          <div className="relative h-[300px] md:h-full">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Thợ sửa khóa chuyên nghiệp"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
