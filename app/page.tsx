import Head from "next/head";
import Hero from "@/components/hero";
import ServiceHighlights from "@/components/service-highlights";

export const metadata = {
  title: "Sửa Khóa Tại Thanh Hóa - Thợ Khóa Uy Tín, Nhanh Chóng 24/7",
  description:
    "Dịch vụ sửa khóa tại Thanh Hóa - mở khóa, thay ổ, đánh chìa tận nơi. Có mặt nhanh trong 15 phút. Thợ chuyên nghiệp, giá rẻ, hỗ trợ 24/7.",
  keywords:
    "sửa khóa Thanh Hóa, thợ khóa Thanh Hóa, thợ sửa khóa tại Thanh Hóa, sửa khóa tận nơi Thanh Hóa, dịch vụ sửa khóa 24/7 Thanh Hóa, thợ khóa chuyên nghiệp Thanh Hóa, sửa khóa nhanh Thanh Hóa, sửa khóa xe máy Thanh Hóa, sửa khóa ô tô Thanh Hóa, sửa khóa cửa cuốn Thanh Hóa, sửa khóa két sắt Thanh Hóa, làm chìa khóa tại Thanh Hóa, mở khóa không phá Thanh Hóa, thay ổ khóa tại nhà Thanh Hóa, mở khóa cửa gỗ, cửa nhôm, cửa kính",
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="sửa khóa Thanh Hóa, thợ sửa khóa tại Thanh Hóa, sửa khóa tận nơi Thanh Hóa, sửa khóa 24/7, thợ khóa chuyên nghiệp, mở khóa xe máy, sửa khóa ô tô, thay ổ khóa cửa cuốn, sửa két sắt, mở khóa tại nhà, làm chìa khóa Thanh Hóa"
        />
      </Head>
      <div className="min-h-screen">
        <Hero />
        <ServiceHighlights />
      </div>
    </>
  );
}
