import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              SỬA KHÓA BÌNH DƯƠNG
            </h3>
            <p className="mb-4">
              Dịch vụ sửa khóa tại nhà 24h, chuyên nghiệp, uy tín tại Bình Dương
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-yellow-500" />
                <Link href="tel:0933270890" className="hover:text-yellow-500">
                  0933.270.890
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-yellow-500" />
                <Link
                  href="mailto:contact@suakhoabinhduong.com"
                  className="hover:text-yellow-500"
                >
                  contact@suakhoabinhduong.com
                </Link>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <p>Bình Dương, Việt Nam</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">DỊCH VỤ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sua-khoa-cua" className="hover:text-yellow-500">
                  Sửa khóa cửa
                </Link>
              </li>
              <li>
                <Link href="/khoa-o-to" className="hover:text-yellow-500">
                  Làm chìa khóa ô tô
                </Link>
              </li>
              <li>
                <Link href="/khoa-xe-may" className="hover:text-yellow-500">
                  Làm chìa khóa xe máy
                </Link>
              </li>
              <li>
                <Link href="/sua-khoa-ket" className="hover:text-yellow-500">
                  Sửa khóa két sắt
                </Link>
              </li>
              <li>
                <Link
                  href="/khoa-cua-dien-tu"
                  className="hover:text-yellow-500"
                >
                  Lắp đặt khóa cửa điện tử
                </Link>
              </li>
              <li>
                <Link href="/remote-cua-cuon" className="hover:text-yellow-500">
                  Sửa remote cửa cuốn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">
              KHU VỰC HOẠT ĐỘNG
            </h3>
            <ul className="space-y-2">
              <li>Thành phố Thủ Dầu Một</li>
              <li>Thành phố Dĩ An</li>
              <li>Thành phố Thuận An</li>
              <li>Thị xã Bến Cát</li>
              <li>Thị xã Tân Uyên</li>
              <li>Huyện Bàu Bàng</li>
              <li>Huyện Phú Giáo</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Sửa Khóa Bình Dương. All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <Link
          href="tel:0933270890"
          className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
        >
          <Phone className="w-6 h-6" />
        </Link>
        <Link
          href="https://zalo.me/0933270890"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
        >
          <Facebook className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}
