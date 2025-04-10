import Link from "next/link"
import { Search } from "lucide-react"

export default function Navigation() {
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
  ]

  return (
    <nav className="bg-yellow-500 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto flex flex-wrap">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-3 text-sm font-medium text-red-900 hover:bg-yellow-600 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center pr-4">
          <button className="p-2 text-red-900 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
