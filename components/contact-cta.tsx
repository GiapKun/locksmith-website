import { Phone } from "lucide-react";
import Link from "next/link";

export default function ContactCTA() {
  return (
    <div className="bg-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-0">
          SỬA KHÓA BÌNH DƯƠNG 24h
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="tel:0933270890"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            <span className="font-bold">HOTLINE: 0933.270.890</span>
          </Link>

          <Link
            href="https://zalo.me/0933270890"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded flex items-center justify-center gap-2"
          >
            <span className="font-bold">ZALO: 0933.270.890</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
