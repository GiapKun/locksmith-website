import Hero from "@/components/hero";
import ServiceHighlights from "@/components/service-highlights";

export const metadata = {
  title: "Sửa Khóa Tại Thanh Hóa - Thợ Khóa Uy Tín, Nhanh Chóng 24/7",
  description:
    "Dịch vụ sửa khóa tại Thanh Hóa - mở khóa, thay ổ, đánh chìa tận nơi. Có mặt nhanh trong 15 phút. Thợ chuyên nghiệp, giá rẻ, hỗ trợ 24/7.",
  keywords:
    "sửa khóa Thanh Hóa, thợ khóa Thanh Hóa, mở khóa tại nhà, làm chìa khóa xe máy, sửa khóa ô tô, mở khóa cửa nhà, sửa khóa két sắt, sửa khóa 24/7, thay ổ khóa, sửa khóa xe máy, sửa khóa cửa cuốn, mở khóa không phá, thợ khóa uy tín",
  robots: "index, follow",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceHighlights />
    </div>
  );
}
